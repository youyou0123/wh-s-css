import React from 'react';
import './style/todo1.css';
import './style/todo2.css';
import classNames from 'classnames';
//当hash值改变时，本地缓存的localStorage中拿取数据
let listData = JSON.parse(localStorage.getItem('hh')) || [
	// 数据三种状态：all active  completed
	{
		status: true,
		content: 'miaoweiketang',
		classNames: ' completed',
		id: Date.now()
	}
];

class Todo extends React.Component {
	constructor(props) {
		super(props);
		this.myRef = React.createRef();
		this.arr = [];
		this.state = {
			hash: 'all',
			valueAll: '请输入内容',
			selectAll: false,
			data: listData,
			editIndex:''
		};
	}
	//全选事件
	selectAll = (e) => {
		//未知数组长度，全选不能写死数据，应该给每一项改变状态
		let selectAll = null;
		let data = this.state.data;
		data.map((item) => (item.status = e.target.checked));
		selectAll = e.target.checked;
		this.setState({
			selectAll: selectAll,
			data: data
		});
		// console.log(data)
		e.target.checked = !e.target.checked;
	};
	//单选事件
	select = (index) => {
		let status = this.state.data[index].status;
		if (status) {
			this.setState({
				status: false
			});
		} else {
			this.setState({
				status: true
			});
		}
		this.state.data[index].status = !this.state.data[index].status;
	};
	//删除事件
	delete = (index) => {
		let data = this.state.data;
		//用过滤filter也可以
		data.splice(index, 1);
		// console.log(data)
		this.setState({
			data: data
		});
	};
	//输入事件
	shuRu = (e) => {
        this.beforeValues = e.target.value;
		this.setState({
			valueAll: e.target.value
		});
	};
	//按回车时添加
	add = (e) => {
		// console.log(e.keyCode)
		if (e.keyCode === 13) {
            if (e.target.value === '') {
                alert('请输入内容');
                return;
            }
			let data = this.state.data;
			data.unshift({
				status: false,
				content: this.state.valueAll,
				classNames: ' completed',
				id: Date.now()
			});
			this.setState({
				data: data,
				valueAll: ''
			});
        }
        

	};
	//每一项的输入时改变事件
	everyChange = (index, e) => {
		//找到当前输入的一项
		this.state.data[index].content = e.target.value;
		this.beforeValue = e.target.value; //存取之前的value
		this.setState({
			data: this.state.data
		});
		// console.log(this.state)
	};
	//每一项的失焦时改变事件
	everyBlur = (index, e) => {
		//找到当前输入的一项
		this.state.data[index].classNames = 'completed';
		// console.log( this.beforeValue)
		if (this.beforeValue === '') {
			this.state.data[index].content = this.beforeValue;
			console.log(this.state); //异步执行，导致赋值为上一次的值
		}

		this.setState({
			data: this.state.data
        });
        this.getHash();
	};
	//每一项的输入事件,按回车生效
	everyInput = (index, e) => {
		if (e.target.value !== '' && e.keyCode === 13) {
			// console.log(e.keyCode)
			this.state.data[index].classNames = 'completed';
			this.setState({
				data: this.state.data
            });
            this.getHash();
		}
	};
	//双击事件
	double = (index, e) => {
		this.state.data.map((item) => (item.classNames = 'completed'));
		
		this.state.data[index].classNames = 'editing';
		this.setState({
			data: this.state.data,
			editIndex:index
		});
	};
	getHash = () => {
		let hash = window.location.hash;
		if (hash) {
			hash = hash.slice(2);
		} else {
			hash = 'all';
		}
		//获取当前哈希，并更新
		// console.log(hash)
		let datas = [];
		if (hash === 'all') {
			datas = listData;
		} else if (hash === 'active') {
			datas = listData.filter((item) => item.status);
		} else if (hash === 'completed') {
			datas = listData.filter((item) => !item.status);
		}
		this.setState({
			hash: hash,
			data: datas
		});
	};
	componentDidMount() {
		//挂载完成之后执行,这时还未渲染
		this.getHash();
		window.addEventListener('hashchange', this.getHash);
	}
	componentDidUpdate() {
		//更新完成之后，操作元素，操作dom时聚焦ref={(input)=>{this[index]=input}}
		// console.log(this.arr[this.state.editIndex])
		
if (this.arr[this.state.editIndex]) {
	this.arr[this.state.editIndex].focus();
		}
        localStorage.setItem('hh', JSON.stringify(this.state.data));
        // this.getHash();
	}
	render() {
		// console.log(this.state.data)
		//全选取决于每一项
		this.state.selectAll = this.state.data.every((item) => item.status);
		let filterHash = this.state.hash;

		return (
			<React.Fragment>
				<section className="todoapp">
					<header className="header">
						<h1>todos</h1>
						<input
							className="new-todo"
							onChange={this.shuRu}
							onKeyDown={this.add}
							value={this.state.valueAll}
						/>
					</header>
					<section className="main">
						<input
							className="toggle-all"
							onClick={this.selectAll}
							checked={this.state.selectAll}
							type="checkbox"
						/>
						<ul className="todo-list">
							{this.state.data.map((item, index) => {
								//去除下划线的 editing
								let td = this.state.data[index].status ? 'none' : 'line-through';
								return (
									<li
										onDoubleClick={this.double.bind(this, index)}
										key={index}
										className={item.classNames}
									>
										<div className="view">
											<input
												onClick={this.select.bind(this, index)}
												className="toggle"
												checked={item.status}
												type="checkbox"
											/>
											<label style={{ textDecoration: td }}>{item.content}</label>
											<button onClick={this.delete.bind(this, index)} className="destroy" />
										</div>
										<input
											ref={(myRef)=>this.arr[index]=myRef}
											onBlur={this.everyBlur.bind(this, index)}
											onChange={this.everyChange.bind(this, index)}
											value={item.content}
											onKeyDown={this.everyInput.bind(this, index)}
											className="edit"
										/>
									</li>
								);
							})}
						</ul>
					</section>
					<footer className="footer">
						<span className="todo-count">
							<strong>
								{
									this.state.data.filter((item) => {
										return !item.status;
									}).length
								}
							</strong>
							<span>条未选中</span>
						</span>
						<ul className="filters">
							<li>
								<a
									href="#/all"
									className={classNames({
										selected: filterHash === 'all'
									})}
								>
									All
								</a>
							</li>
							<li>
								<a
									href="#/active"
									className={classNames({
										selected: filterHash === 'active'
									})}
								>
									Active
								</a>
							</li>
							<li>
								<a
									href="#/completed"
									className={classNames({
										selected: filterHash === 'completed'
									})}
								>
									Completed
								</a>
							</li>
						</ul>
					</footer>
				</section>
			</React.Fragment>
		);
	}
}
export default Todo;

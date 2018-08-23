//React选项卡
import React from 'react';
import './style/tab.css';
class Tab extends React.Component {
	constructor(props) {
		super(props);
		//设置自己状态,让初始第一个显示
		this.state = {
            currentIndex:0
        };
    }
    //接受点击时传过来的按钮序列参数
    handle = (index)=>{
        // console.log(index)
this.setState({
    currentIndex:index
})
    }

	render() {
		let data = this.props.data;
        // console.log(data);
        // let {currentIndex} = this.state
		return (
			<div>
				{data.map((item, index) => {
                    let bt = this.state.currentIndex === index ? 'yellow' : 'red';
					return (
                        <button key = {index} 
                        className = {bt}
                        onClick = {this.handle.bind(this, index)}>
							{item.title}
						</button>
					);
				})}
				{data.map((item, index) => {
                    let ul = this.state.currentIndex===index?'block':'none';
					return (
						<ul key={index} style = {{display:ul}}>
							{item.list.map((item, index) => {
								return <li key={ index }>{item}</li>;
							})}
						</ul>
					);
				})}
			</div>
		);
	}
}
export default Tab;

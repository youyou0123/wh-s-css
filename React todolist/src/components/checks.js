import React from 'react';
import './style/tab.css';
class Checks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            arr: [ false, false, false, false, false ],
            arrAll:false
		};
    }
    handle = (index)=>{
let arrs = this.state.arr[index];
if (arrs) {
	this.setState({
		arrs:false
	})
} else {
	this.setState({
		arrs:true
	})
}
this.state.arr[index]=!this.state.arr[index];
	}
	handleAll = (e)=>{
		this.state.arr.map((item)=>e.target.checked)
		this.setState({
			arr:[ false, false, false, false, false ],
			arrAll:e.target.checked
		})
		e.target.checked = !e.target.checked;
    }
	render() {
		this.state.arrAll = this.state.arr.every((item)=>item);
		return (
			<div>
				<div className={'sty'}>
				{
					this.state.arr.map((item,index)=>{
					return <input key={index}
					 type='checkbox' 
					 onChange={this.handle.bind(this,index)}
					 checked={item}/>;
					})
						}
				</div>
                <input className={'cl'} checked={this.state.arrAll}  type='checkbox'
                onChange={this.handleAll} />
			</div>
		);
	}
}
export default Checks;

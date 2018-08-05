import React from 'react';
import logo from './logo.svg';
import './App.css';

import Apps from './components/apps';
// import Init from './components/Init';
// import Btn from './components/btn';
// import Child from './components/child';
// import Input from './components/input';
//组件入口

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	//---------按钮事件---------------
	// this.state={
	//   color:'green'
	// }
	// handle = ()=>{
	//   this.setState({
	//     color:'red'
	//   })
	// }
	// parentFn = (c)=>{
	//         this.setState({
	//           color:c
	//         })
	//       }
	//-----------------------
	render() {
		//------------选项卡数据-----------------------
		// let arr = [1,3,4,5];
		
		// <Btn data={one}/>
		//  <Tab da={arr}/>
		//  <Init data={one}/>
		// <Tab data={one}/>
		// parentFn = (c)=>{
		//   this.setState({
		//     color:c
		//   })
		// }parentFn={parentFn}
		//let {color} = this.state;
		// <hr/>
		// <h2 style={{color:color}}>我是父级组件</h2>
		// <button onClick={this.handle}>变色</button>
		// <Child color={color} parentFn={this.parentFn}/>
		//-----------------------------------
		// return <Input/>;
		return <Apps/>;
	}
}

export default App;

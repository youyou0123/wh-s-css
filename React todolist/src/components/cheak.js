import React from 'react';
import './style/tab.css'
class Check extends React.Component{
constructor(props){
super(props);
this.state={
   arr: [false,false,false,false,false],
   arrAll:false
}
}
//操作数据，改变状态
 handle=(index)=>{
    let arrs =this.state.arr[index];
    if (arrs) {
        this.setState({
           arrs:true
            })
    } else {
        this.setState({
            arrs:false
             })
    }
   arrs = !arrs;
   this.state.arr[index] = arrs;
   
 }
 handleAll=(e)=>{
   if (e.target.checked) {
    this.setState({
        arrAll:true,
        arr: [true,true,true,true,true]
        })
   } else {
    this.setState({
        arrAll:false,
        arr: [false,false,false,false,false]
       })
   }
   e.target.checked =!e.target.checked;
//    console.log(e.target.checked)
 }
 
render(){
    //状态同步，全选按钮是否选中取决于单选every的返回值
    this.state.arrAll = this.state.arr.every((item)=>item);
    return (<div>
        <input type='checkbox'
         className={'cl'} 
         checked={this.state.arrAll}
         onChange={this.handleAll}
         />
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
        </div>);
}
}
export default Check;
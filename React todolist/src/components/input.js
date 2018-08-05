//双向数据绑定，input可控元素与不可控元素
import React from 'react';
class Input extends React.Component{
    constructor(props){
super(props);
this.state={
    val:''
}
    }
    handle = (e)=>{
this.setState({
    val:e.target.value
})
    }
    render(){
        return (
            <div>
            <input value={this.state.val} onChange={this.handle}/>
            <span>{this.state.val}</span>
            </div>
        );
    }
}
export default Input;

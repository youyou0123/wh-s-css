import React from 'react';
import Sunzi from './sunzi';
class Child extends React.Component{
    constructor(props){
        super(props);
        this.state={
            color:'red'
        }
       
    }
    handle = ()=>{
        this.setState(
            {color:'pink'}
        );
    }
    render(){
        // console.log(this.props.fn)
return (<div>
    <hr/>
    <h3 style={{color:this.state.color}}>我是儿子组件</h3>
    <button onClick={this.handle}>点我</button>
    <Sunzi fn={this.props.fn}/>
    </div>);
    }
}
export default Child;

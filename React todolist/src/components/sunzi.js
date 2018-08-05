import React from 'react';
class Sunzi extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            color:'red'
        } 
    }
     handle = ()=>{
        this.setState(
            {color:'pink'}
        );
        // console.log( this.props.fn)
        this.props.fn();
    }
    render(){
        return (<div>
            <hr/>
            <h3 style={{color:this.state.color}}>我是孙子组件</h3>
            <button onClick={this.handle}>点我</button>
            </div>);
    }
}
export default Sunzi;
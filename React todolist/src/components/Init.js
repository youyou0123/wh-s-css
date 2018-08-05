import React from 'react';
class Init extends React.Component{
constructor(props){
    super(props);
this.state={
    color:this.props.color
}
}
handle1(){
    this.setState({
        color:'red'
    });
}
render(){
    let p = {
        color:this.state.color
    };
    return (<div>
   <p style={p}>变色</p>
   <button onClick={this.handle1.bind(this)}>点我</button>
        </div>
    );
}
}
export default Init;
import React from 'react';
import './style/tab.css'
//选项卡
class Tabs extends React.Component{
constructor(props){
    super(props);
    this.state={
        currentIndex:0
    }
}
handle=(index)=>{
this.setState({
    currentIndex:index
})
}
render(){
    let arr = this.props.data;
    // console.log(arr)
    return (
        <div>
        {
            arr.map((item,index)=>{
                let bu = index===this.state.currentIndex?'red':'';
                return <button
                onClick={this.handle.bind(this,index)}
                style={{background:bu}}
                key={index}>
                {item.title}
                </button>
            })
        }
        {
            arr.map((item,index)=>{
                let ul = index===this.state.currentIndex?'block':'none';
                return <ul
                style={{display:ul}}
                key={index}>
                {
                    item.list.map((item,index)=>{
                        return <li key={index}>{item}</li>
                    })
                }
                </ul>
            })
        }
        </div>
    );
}
}
export default Tabs;
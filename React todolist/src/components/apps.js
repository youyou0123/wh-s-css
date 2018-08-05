import React from 'react';
//import Tab from './Tab';
// import Child from './child';
// import Check from './cheak';
// import Tabs from './tabs';
//import Checks from './checks';
import Todo from './todo';
// import Liuyanban from './liuyanban';
//第二个接口，用来测试，全部放在app上麻烦
class Apps extends React.Component{
    constructor(props){
        super(props);
        
    }
   
    render(){
       /* 选项卡
       this.state={
            color:'red'
        }
       let one = [
            {
            title: '新闻',
            list: ['新闻列表', '新闻列表', '新闻列表']
            },
            { 
            title: '娱乐',
            list: ['娱乐列表', '娱乐列表', '娱乐列表']
            }, {
            title: '体育',
            list: ['体育列表', '体育列表', '体育列表']
            }
            ]
        <Tabs data={one}/>
        */
        /*组件通信
<h2 style={{color:this.state.color}}>父级组件</h2>
    <button onClick={this.handle}>点我</button>
    <hr/>
    <Child fn={this.yeFn}/>
     handle = ()=>{
        this.setState(
            {color:'pink'}
        );
    }
    yeFn = ()=>{
        this.setState(
            {color:'green'}
        );
    }
        */
     //   console.log(this.yeFn)
     //(<Check/>)<Liuyanban/>
return  <React.Fragment><Todo/></React.Fragment>; 
    }
}
export default Apps;
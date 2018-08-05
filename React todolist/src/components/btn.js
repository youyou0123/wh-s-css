import React from 'react';
class Btn extends React.Component{
    render(){
        let data = this.props.data;
    //    console.log(data[0].list)
return (
    <div>
    <h2>我是选项卡 </h2>
    {
        data.map((item,index)=>{
return <button key={index}>{item.title}</button>;
        })
    }
    {
        data.map((item,index)=>{
            return <div key={index}>{
                item.list.map((item,index)=>{
                  return <p key={index}>{item}</p>
                })
            }</div>
                    }) 
    }
    </div>
)
       
    }
}
export default Btn;
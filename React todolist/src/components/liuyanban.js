import React, { Component } from 'react';
import './style/liuyanban.css';
import Top from './lTop';
import Bottom from './lBottom';
export default class Liuyanban extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: new Date().getTime(),
					name: 'laa',
					message: 'efwffsd'
				},
				{
					id: new Date().getTime(),
					name: 'www',
					message: 'saddgdd'
				}
			]
		};
	}
	issue = (id, na, me) => {
        let data = this.state.data;
        data.push({
            id: id,
            name: na,
            message: me
        });
		console.log(this);
		this.setState({
			data: data
        });
    
		// console.log(this.state.data);
	};
	render() {
        // console.log(this.state.data);
		return (
			<div className="wrapper">
				<Top issue={this.issue} data={this.state.data} />
				<Bottom fn={this.fn} data={this.state.data} />
			</div>
		);
	}
}

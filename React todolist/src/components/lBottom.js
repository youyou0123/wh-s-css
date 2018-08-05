import React, { Component } from 'react';
import './style/liuyanban.css';
class Bottom extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let data = this.props.data;
		// console.log(this.props.data)
		return (
			<div>
				{data.map((item, index) => {
					return (
						<div key={index} className="comment">
							<div className="comment-user">
								<span>{item.name}</span>:
							</div>
							<p>{item.message}</p>
							<span onClick={this.delete}>删除</span>
						</div>
					);
				})}
			</div>
		);
	}
}
export default Bottom;

import React, { Component } from 'react';
import './style/liuyanban.css';
class Top extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: 'name',
			message: 'message'
		};
	}
	changeName = (e) => {
		this.setState({
			name: e.target.value
		});
	};
	changeMessage = (e) => {
		this.setState({
			message: e.target.value
		});
	};
	handle = (e) => {
		//点击发布通知父组件改变状态
		this.setState({
			message: '',
			name: ''
		});
		//id,name,message
		this.props.issue(new Date().getTime(), this.state.name, this.state.message);
	};
	render() {
		return (
			<div className="comment-input">
				<div className="comment-field">
					<span className="comment-field-name">用户名：</span>
					<div className="comment-field-input">
						<input onChange={this.changeName} value={this.state.name} name="username" />
					</div>
				</div>
				<div className="comment-field">
					<span className="comment-field-name">评论内容：</span>
					<div className="comment-field-input">
						<textarea onChange={this.changeMessage} value={this.state.message} name="content" />
					</div>
				</div>
				<div className="comment-field-button">
					<button onClick={this.handle}>发布</button>
				</div>
			</div>
		);
	}
}
export default Top;

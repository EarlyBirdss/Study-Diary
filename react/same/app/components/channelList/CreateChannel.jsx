import React from "react";

import "../../styles/create-channel.less";

class CreateChannel extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			channelName: "",
			channelAbstract: "",
			$channelName: {
				error: false
			},
			$channelAbstract: {
				error: false
			}
		}
	}

	handleChannelName(e) {
		var value = e.target.value;

		if (value.length > 20) {
			this.setState({
				$channelName: {
					error: true
				}
			});
		}else {
			this.setState({
				channelName: value
			});

			this.setState({
				$channelName: {
					error: false
				}
			});
		}
	}

	handleChannelAbstract(e) {
		var value = e.target.value;

		if (value.length > 100) {
			this.setState({
				$channelAbstract: {
					error: true
				}
			});
		}else {
			this.setState({
				channelAbstract: value
			});

			this.setState({
				$channelAbstract: {
					error: false
				}
			});
		}
	}

	createChannel() {
		var {channelName, channelAbstract} = this.state;

		var response = api.createChannel({
			channelName: channelName,
			abstract: channelAbstract
		});

		if(response.ok === true) {
			window.location.hash="/channelList";
		}
	}

	render(){
		return (
			<div className="form-box">
				<div className="form-row">
					<input type="text" placeholder="输入你的频道名称（20个字以内）" value={ this.state.channelName } onChange={ this.handleChannelName.bind(this) } />
					<span className={this.state.$channelName.error ? "show" : "hide" + " text-red"}>超过10字符</span>
				</div>
				<div className="form-row">
					<textarea type="text" placeholder="输入你的频道简介（100个字以内）" rows="2" value={ this.state.channelAbstract } onChange={ this.handleChannelAbstract.bind(this) } ></textarea>
					<span className={this.state.$channelAbstract.error ? "show" : "hide" + " text-red"}>超过100字符</span>
				</div>
				<div className="form-row">
					<button onClick={ this.createChannel.bind(this) }>确认提交</button>
				</div>
			</div>
		)
	}
}

export default CreateChannel;
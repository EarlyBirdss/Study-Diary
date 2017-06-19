import React from "react";
import {Link} from "react-router-dom";

import "../../styles/create-channel.less";

class CreateChannel extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			channelName: "",
			channelAbstract: "",
			$channelName: {
				error: {
					required: false,
					length: false,
				}
			},
			$channelAbstract: {
				error: {
					required: false,
					length: false,
				}
			}
		}
	}

	handleChannelName(e) {
		var value = e.target.value;

		if (value.length > 20) {
			this.setState({
				$channelName: {
					error: {
						length: true
					}
				}
			});
		}else {
			this.setState({
				channelName: value
			});

			this.setState({
				$channelName: {
					error: {
						length: false
					}
				}
			});
		}
	}

	handleChannelAbstract(e) {
		var value = e.target.value;

		if (value.length > 100) {
			this.setState({
				$channelAbstract: {
					error: {
						length: true
					}
				}
			});
		}else {
			
			this.setState({
				channelAbstract: value
			});

			this.setState({
				$channelAbstract: {
					error: {
						length: false
					}
				}
			});
		}
	}

	createChannel() {

		var channelName = (this.state.channelName || "").trim(),
			channelAbstract = (this.state.channelAbstract || "").trim();

		if(!channelName) {

			this.setState({
				$channelName: {
					error: {
						required: true
					}
				}
			});

			return false;
		}

		if(!channelAbstract) {
			this.setState({
				$channelAbstract: {
					error: {
						required: true
					}
				}
			});

			return false;
		}

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
			<div>
				<div className="top-bar">
					<h4 className="top-tt">创建频道</h4>
					<Link to="/channelList">
						<svg className="icon btn-left" aria-hidden="true">
						    <use xlinkHref="#icon-fanhui"></use>
						</svg>
					</Link>
				</div>
				<div className="form-box">
					<div className="form-row">
						<input type="text" placeholder="输入你的频道名称（20个字以内）" value={ this.state.channelName } onChange={ this.handleChannelName.bind(this) } />
						<span className={ "text-red " + (this.state.$channelName.error.length ? "show" : "hide") }>超过20字符</span>
						<span className={ "text-red " + (this.state.$channelName.error.required ? "show" : "hide") }>请输入频道名称</span>
					</div>
					<div className="form-row">
						<textarea type="text" placeholder="输入你的频道简介（100个字以内）" rows="2" value={ this.state.channelAbstract } onChange={ this.handleChannelAbstract.bind(this) } ></textarea>
						<span className={ "text-red " + (this.state.$channelAbstract.error.length ? "show" : "hide") }>超过100字符</span>
						<span className={ "text-red " + (this.state.$channelAbstract.error.required ? "show" : "hide") }>请输入频道简介</span>
					</div>
					<div className="form-row">
						<button onClick={ this.createChannel.bind(this) }>确认提交</button>
					</div>
				</div>
			</div>
		)
	}
}

export default CreateChannel;
import React from "react";
import {Link} from "react-router-dom";

import Pop from "../common/Pop.jsx";
import "../../styles/channel-abs-editor.less";

class ChannelAbsEditor extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
			abs: "",
			abserror: {
				required: false,
				length: false,
			},
			abspass: true,
			updated: false,
		};

		this.channelId = Number(this.props.match.params.channelId);
		this.absMaxLength = 200;
	}

	componentWillMount(){
		var response = api.getChannelAbs(this.channelId);

		if(response.ok === true) {
			this.setState({
				abs: response.data
			});
		}
	}

	handleAbs(e){
		var abs = e.target.value.trim();

		this.setState({
			abserror: {
				required: false,
				maxlength: false,
			},
			abs: abs,
			abspass: true,
		});

		if(!abs) {
			this.setState({
				abserror: {
					required: true
				},
				abspass: false,
			});

		} else if(abs.length > this.absMaxLength) {
			this.setState({
				abserror: {
					maxlength: true
				},
				abspass: false,
			});
		}
	}

	submitAbs() {
		if(!this.state.abspass) {
			return false;
		}

		var data = {
			abstract: this.state.abs,
		};

		var response = api.updateChannelAbs(this.channelId, data);

		if(response.ok === true) {
			this.setState({
				abs: response.data,
				updated: true,
			});
		}
	}

	render() {
		return (
			<div className="editor-wrapper">
				<div className={ this.state.updated ? 'show' : 'hide' }>
					<Pop msg="修改成功"></Pop>
				</div>
				<div className="top-bar">
					<Link to={"/channelInfo/" + this.channelId}>
						<svg className="icon btn-left">
							<use xlinkHref="#icon-fanhui"/>
						</svg>
					</Link>
					<h4 className="top-tt">
						修改频道设置
					</h4>
					<button className="btn-right btn-submit" onClick={this.submitAbs.bind(this)}>
						完成
					</button>
				</div>
				<div className="form-wrapper">
					<h5>频道简介</h5>
					<textarea rows="5" value={this.state.abs} onChange={this.handleAbs.bind(this)}></textarea>
					<span className={ (this.state.abserror.required ? 'show' : 'hide') + ' text-red'}>请填写频道简介</span>
					<span className={ (this.state.abserror.maxlength ? 'show' : 'hide') + ' text-red'}>频道简介超过200字符</span>
				</div>
			</div>
		)
	}
}

export default ChannelAbsEditor; 
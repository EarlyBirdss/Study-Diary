import React from "react";
import {Link} from "react-router-dom";

import Pop from "../common/Pop.jsx";

import "../../styles/channel-detail.less";

class ChannelDetail extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
		    channelInfo: {},
		    content: "",
		    image: "",
		    imageError: ""
		};
		this.channelId = Number(this.props.match.params.channelId);
	}

	componentWillMount() {

		var response = api.getChannelInfo(this.channelId);

		if(response.ok === true) {
			this.setState({
				channelInfo:  response.data || {}
			});	
		}
	}

	handleImage(event) {
		var value = event.target.value.toLowerCase();
		var reg = /\.(png|jpg|jpeg|gif|bmp)$/;

		if(reg.test(value)) {
			this.setState({
				image: value,
				imageError: ""
			});
		} else{
			this.setState({
				imageError: "请检查图片格式"
			});
		}
	}

	handleInput(event) {
		this.setState({
			content: event.target.value
		});
	}

	deleteImage() {
		this.setState({
			image: ""
		});
	}

	createContent(e) {

		e.preventDefault();

		var channelId = this.channelId,
			data = {
				image: this.state.image || "",
				content: this.state.content,
			};

		if(!data.content) {
			return false;
		}

		var response = api.createContent(channelId, data);

		if(response.ok === true) {
			var channelInfo = this.state.channelInfo;

			channelInfo.contents.push(response.data);
			this.setState({
				channelInfo,
				image: "",
				content: "",
			});
		}
	}

	linkContent() {

	}

	render(match) {

		let that = this;

		return (

			<div>
				<div className={this.state.imageError ? 'show' : 'hide'}>
					<Pop msg={this.state.imageError}/>
				</div>
				<div className="top-bar">
					<h4 className="top-tt">{this.state.channelInfo.channelName}</h4>
					<Link to="/channelList">
						<svg className="icon btn-left" aria-hidden="true">
						    <use xlinkHref="#icon-fanhui"></use>
						</svg>
					</Link>
					<Link to={ "/channelInfo/" + this.channelId }>
						<svg className="icon btn-right" aria-hidden="true">
						    <use xlinkHref="#icon-syspot"></use>
						</svg>
					</Link>
				</div>
				<div className="content-list">
				{
					this.state.channelInfo.contents.map((item) => {
						return (
							<div className="content-item" key={ item.id }>
								<div className="info-bar clearfix">
									<div className="user-wrapper">
										<p className="user-name">{ item.userName }</p>
										<p className="create-time">{ item.createTime }</p>
									</div>
									<svg className="icon opre-btn">
										<use xlinkHref="#icon-syspot"></use>
									</svg>
								</div>
								<div className="content-box">
									{ item.content }
								</div>
								<div className="opre-bar">
									<i className="liked">{ item.linkedNum }</i>
									<i className="like-btn" onClick={ that.linkContent.bind(that, item) }></i>
								</div>
							</div>
						)
					})
				}
				</div>
				<div className="form-wrapper">
					<div className={ "image-wrapper" + (this.state.image ? " show" : " hide") }>
						<img src={this.state.image} className="preview-image"/>
						<i className="btn-delete-image" onClick={ this.deleteImage.bind(this) }>×</i>
					</div>
					<form onSubmit={ this.createContent.bind(this) } className="input-wrapper">
						<input type="file" accept="image/*;capture=camera" className="input-image" value={ this.state.image } onChange={ this.handleImage.bind(this) }/>
						<svg className="icon icon-image" aria-hidden="true">
							<use xlinkHref="#icon-image"/>
						</svg>
						<textarea type="text" className="input-text" placeholder="请输入图片配文" value={ this.state.content } onChange={ this.handleInput.bind(this) }></textarea>
						<button className="input-btn">发送</button>
					</form>
				</div>
			</div>
		)
	}
}

export default ChannelDetail;


import React from "react";
import {Link} from "react-router-dom";

import "../../styles/channel-detail.less";

class ChannelDetail extends React.Component{
	constructor(props) {
		super(props);

		this.state = {
		    channelInfo: {}
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

	link(content) {
		console.log(content);
	}

	render(match) {

		return (
			<div>
				<div className="top-bar">
					<h4 className="top-tt">{this.state.channelInfo.channelName}</h4>
					<Link to="/channelList">
						<svg className="icon back-btn" aria-hidden="true">
						    <use xlinkHref="#icon-fanhui"></use>
						</svg>
					</Link>
					<Link to={"/channelInfo" + this.channelId}>
						<svg className="icon channel-info-btn" aria-hidden="true">
						    <use xlinkHref="#icon-syspot"></use>
						</svg>
					</Link>
				</div>
				<div className="content-list">
				{
					this.state.channelInfo.contents.map((item, key) => {
						<div className="content-item" key={key}>
							<div className="info-bar">
								<p>{ item.userName }</p>
								<p>{ item.createTime }</p>
								<i className="opre-btn">...</i>
							</div>
							<div className="content-box">
								{ item.content }
							</div>
							<div className="opre-bar">
								<i className="liked">{ item.linkedNum }</i>
								<i className="like-btn" onClick="this.like.bind(this, item)"></i>
							</div>
						</div>
					})
				}
				</div>
				<div className="input-wrapper">
					<input type="file" className="input-image"/>
					<svg className="icon-image" aria-hidden="true">
						<use xlinkHref="#icon-image"/>
					</svg>
					<input type="text" className="input-text"/>
					<button className="input-btn">发送</button>
				</div>
			</div>
		)
	}
}

export default ChannelDetail;


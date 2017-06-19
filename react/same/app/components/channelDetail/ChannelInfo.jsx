import React from "react";
import {Link} from "react-router-dom";

import "../../styles/channel-info.less";

class ChannelInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ChannelInfo: {}
		};

		this.channelId = Number(this.props.match.params.channelId);
	}

	componentWillMount() {
		var response = api.getChannelInfo(this.channelId);

		if(response.ok === true) {
			this.setState({
				channelInfo: response.data
			});
		}
	}

	render() {
		return (
			<div className="info-wrapper">
				<div className="top-bar">
					<h4 className="top-tt">频道详情</h4>
					<Link to={"/channelDetail/" + this.channelId }>
						<svg className="icon btn-left" aria-hidden="true">
						    <use xlinkHref="#icon-fanhui"></use>
						</svg>
					</Link>
				</div>
				<div className="info-box">
					<div className="row">
						<label>频道主</label>
						<Link to={"/user/" + this.state.channelInfo.userId}>
							<span className="info-user">{ this.state.channelInfo.userName }</span>
						</Link>
					</div>
					<div className="row">
						<label>频道简介</label>
					</div>
					<div className="row">
						<Link to={ "/editChannelAbs/" + this.channelId }>
							{ this.state.channelInfo.abstract }
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default ChannelInfo;
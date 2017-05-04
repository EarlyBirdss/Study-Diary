import React from "react";

class TopBar extends React.Component {
    constructor(props) {
        super(props);
        this.status = {
            show: true
        }
    }

    goBack() {
        this.setState({
            show: false
        });
    }

    showChannelDetail () {
        this.setState({
            show: false
        });
    }

    render(){
        return ( 
            <div className = "topbar">
                <a href = "jacascript:;" className="tb-back" onClick={ this.goBack }>
                    <i className = "iconfont icon-fanhui"></i>
                </a> 
                <span className = "channel-name"> 
                    { this.props.channelName } 
                </span> 
                <a href="jacascript:;" className = "tb-detail" onClick = { this.showChannelDetail }>
                <i className = "iconfont icon-detail"></i>
                </a>
            </div>
        );
    }
}
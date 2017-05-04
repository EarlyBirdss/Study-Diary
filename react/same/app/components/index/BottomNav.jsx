import React from "react";

class BottomNav extends React.Component {
    constructor (props) {
        super(props);
        this.status = {
            route: "index"
        };
    }

    render() {
        return (
            <ul>
                <li><Link to="/channelList">我的频道</Link></li>
                <li><Link to="/explore">发现</Link></li>
                <li><Link to="/myContent">我的内容</Link></li>
                <li><Link to="/user">关于我</Link></li>
            </ul>
        );
    }
}

export default BottomNav;
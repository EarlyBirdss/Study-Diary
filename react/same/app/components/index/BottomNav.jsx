import React from "react";
import {NavLink} from "react-router-dom";

class BottomNav extends React.Component {
    constructor (props) {
        super(props);
        this.status = {
            route: "index"
        };
    }

    render() {
        return (
            <ul className="bottom-nav">
                <li className="nav-item">
                    <NavLink to="/channelList" activeClassName="active">我的频道</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/explore" activeClassName="active">发现</NavLink>
                </li>
                <li className="nav-item">

                </li>
                <li className="nav-item">
                    <NavLink to="/message" activeClassName="active">消息</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/myContent" activeClassName="active">我的内容</NavLink>
                </li>
            </ul>
        );
    }
}

export default BottomNav;
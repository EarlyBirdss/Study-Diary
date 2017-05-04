import React from "react";
import ReactDom from "react-dom";
import { Router, Route, Link, HashRouter } from "react-router-dom";
import { createHashHistory } from "history";

import App from "./components/App.jsx";
import Index from "./components/index/index.jsx";
import ChannelList from "./components/channelList/ChannelList.jsx";
import Explore from "./components/explore/Explore.jsx";
import MyContent from "./components/mycontents/MyContents.jsx";
import Message from "./components/message/Message.jsx";

import "./iconfont/iconfont.eot";
import "./iconfont/iconfont.svg";
import "./iconfont/iconfont.ttf";
import "./iconfont/iconfont.woff";
import "./iconfont/iconfont.js";
import "./iconfont/iconfont.css";

import "./styles/base.less";
import "./styles/base.less";

const history = createHashHistory();

ReactDom.render(
    (
        <Router history={history}>
            <div>
                <Route exact path="/" component={Index} />
                <Route path="/channelList" component={ChannelList} />
                <Route path="/explore" component={Explore} />
                <Route path="/message" component={Message} />
                <Route path="/myContent" component={MyContent} />
                <ul className="bottom-nav">
                    <li className="nav-item">
                        <Link to="/channelList">我的频道</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/explore">发现</Link>
                    </li>
                    <li className="nav-item">

                    </li>
                    <li className="nav-item">
                        <Link to="/message">消息</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/myContent">我的内容</Link>
                    </li>
                </ul>
            </div>
        </Router>
    ),
    document.getElementById("myapp")
);

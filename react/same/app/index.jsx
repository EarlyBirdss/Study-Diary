import React from "react";
import ReactDom from "react-dom";
import { Router, Route, NavLink, HashRouter } from "react-router-dom";
import { createHashHistory } from "history";

import App from "./components/App.jsx";
import Index from "./components/index/index.jsx";
import ChannelList from "./components/channelList/ChannelList.jsx";
import Explore from "./components/explore/Explore.jsx";
import MyContent from "./components/mycontents/MyContents.jsx";
import Message from "./components/message/Message.jsx";

import ChannelDetail from "./components/channelList/ChannelDetail.jsx";
import CreateChannel from "./components/channelList/CreateChannel.jsx";

import "./scripts/util.js";
import "./scripts/api.js";

import "./iconfont/iconfont.js";

import "./styles/base.less";
import "./styles/index.less";
import "./styles/common.less";

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

                <Route path="/channelDetail/:channelId" component={ChannelDetail} />
                <Route path="/createChannel" component={CreateChannel} />
            </div>
        </Router>
    ),
    document.getElementById("myapp")
);

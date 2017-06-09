import React from "react";
import List from "./List.jsx";
import BottomNav from "../index/BottomNav.jsx";

class ChannelList extends React.Component{
    render() {
        var props = {
            list: [{
                channelId: 1,
                channelName: "222",
                updateNum: 222
            }]
        };
        return (
            <div>
                <List {...props}></List>
                <BottomNav />
            </div>
        );
    }
}

export default ChannelList;
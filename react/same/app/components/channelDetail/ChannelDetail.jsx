import React from "react";
import TopBar from "./TopBar.jsx";
import ContentList from "./ContentList.jsx";
import ContentBox from "./InputBox.jsx";

class ChannelDetail extends React.Component{

    render(){

        var topbarProps = {
            channelName: "一个频道"
        };

        var contentProps = {
            list: [{
                userId: 1,
                userName: "EarlyBirdss",
                avatar: "images/avatar.jpg",
                image: "images/image_01.png",
                content: "This is a test!",
                createTime: "2018-01-01 12:00:00"
            }]
        };

        var bottombarProps = {};

        var contentboxProps = {
            contentProps,
            bottombarProps
        }

        return (
            <div>
                <TopBar {...topbarProps}/>
                <ContentBox {...contentboxProps}/>
            </div>
        );
    }
}

export default ChannelDetail;

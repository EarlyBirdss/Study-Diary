import React from "react";

class BottomBar extends React.Component {

    constructor(props) {
        super(props);

        this.status = {
            init: true,
            form: {
                image: "",
                content: ""
            }
        };
    }

    getAvatarByUserId(userId) {
        return "avatar.jpg";
    }

    send() {
        if (!this.status.form.content) {
            return false;
        }

        var data = {
            image: this.status.form.image,
            content: this.status.form.content,
            createTime: util.getDateString(+new Date),
            userName: window.GLOBAL.userName,
            userId: window.GLOBAL.userId,
            avatar: this.getAvatarByUserId(window.GLOBAL.userId)
        };

        this.props.pushContent(data, function() {
            this.status.form = {
                image: "",
                content: ""
            }
        });
    }

    handleContent(event) {

        var content = this.status.form.content = event.target.value;

        this.setState({
            content
        });
    }

    handleImage(event) {
        var image = this.status.form.image = event.target.value;
        this.setState({
            image
        });
    }

    render() {
        return ( 
            <div className = "bottom-box">
                <a href = "javascript:;" className = "icon-add-image">
                    <i className = "iconfont icon-image"></i>
                </a> 
                <input type = "file" className = "hidden" name = "image" value = { this.status.form.image } onChange = { this.handleImage.bind(this, event) } /> 
                <input type = "text" placeholder = "输入您的图片配文" name = "content" value = { this.status.form.content } className = "content-input" onChange = { this.handleContent.bind(this, event) } /> 
                <a href = "javascript:;" className = "btn-send" onClick = { this.send.bind(this) }> 发送 </a> 
            </div>
        )
    }
}
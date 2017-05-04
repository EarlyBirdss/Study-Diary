import React from "react";

class ContentList extends React.Component {

    constructor(props) {

        super(props);
        this.status = {
            list: props.list
        };
    }

    showUserPage() {

    }

    render() {
        var list = this.status.list;
        var that = this;
        return ( 
            <ul className = "content-box"> 
                警方时光隧道
            </ul>
            );
    }
}

export default ContentList;
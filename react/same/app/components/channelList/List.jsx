import React from "react";
import { Router, Route, Link, HashRouter } from "react-router-dom";
import { createHashHistory } from "history";

import "../../styles/channel-list.less";

const history = createHashHistory();

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    static propTypes: {
        list: React.PropTypes.array
    }

    static defaultProps:{
        list: []
    }

    componentDidMount() {

        var response = api.getChannelList();

        if(response.ok === true){
            this.setState({
                list: response.data
            }); 

        }
    }

    render() {
        var that = this;

        return (

        <div>

            <div className="box">
                <div className="top-title">
                    <h5>频道</h5>
                    <Link to="/createChannel" className="create-btn">创建频道</Link>
                </div>
                <div className="channel-list">
                    {
                        this.state.list.map(function(item, key) {
                             return (
                                <div className="c-item" key={key}>
                                    <Link to={"/channelDetail/"+item.id}>
                                        { item.channelName }
                                        <span className="pull-right">{ item.updateNum }</span>
                                    </Link>
                                </div>
                                )
                        })
                    }
                </div>
            </div>

        </div>
        )
    }
}

export default List;
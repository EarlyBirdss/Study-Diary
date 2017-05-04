import React from 'react';
import ReactDOM form 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
    } 

    render() {
        return (
            <div className="test">
                <h1>hello react</h1>
            </div>
        )
    }

}

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
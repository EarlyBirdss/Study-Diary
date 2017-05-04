window.GLOBAL = {
	userId: "100015",
	userName: "小土包"
};

var util = {
	getDateType: function(data) {
		return /^\[object\s(\w*)\]$/.exec(Object.prototype.toString.call(data))[1];
	},
	getDateString: function(date) {
		var d = new Date(date);

		return d.getFullYear() + "-" + this.addZero(d.getMonth()) + "-" + this.addZero(d.getDate()) + " " + this.addZero(d.getHours()) + ":" + this.addZero(d.getMinutes()) +
			":" + this.addZero(d.getSeconds());
	},
	addZero: function(num) {
		return ("0000" + (num + 1)).substr(-2, 2);
	}
}

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

var TopBar = React.createClass({
	getInitialStatus: function() {
		return {
			show: true
		};
	},
	goBack: function() {
		this.setState({
			show: false
		});
	},
	showChannelDetail: function() {
		this.setState({
			show: false
		});
	},
	render: function() {
		return ( < div className = "topbar" >
			< a href = "jacascript:;"
			className = "tb-back"
			onClick = {
				this.goBack
			} >
			< i className = "iconfont icon-fanhui" > < /i> < /a> < span className = "channel-name" > {
				this.props.channelName
			} < /span> < a href = "jacascript:;"
			className = "tb-detail"
			onClick = {
				this.showChannelDetail
			} >
			< i className = "iconfont icon-detail" > < /i> < /a> < /div>
		);
	}
});

class ContentList extends React.Component {

		

		

		class ContentBox extends React.Component {
			constructor(props) {
				super(props);

				this.status = {
					list: props.contentProps.list
				}
			}

			pushContent(data, callback) {
				var list = this.status.list.push(data);
				this.setState({
					list
				});

				callback.bind(this);
			}

			render() {
				var {
					contentProps,
					bottombarProps
				} = this.props;
				return ( < div className = "contentbox" >
					< ContentList {...contentProps
					}
					/> < BottomBar {...bottombarProps
					}
					pushContent = {
						this.pushContent.bind(this)
					}
					/> < /div>
				)
			}
		}

		ReactDOM.render( < TopBar {...topbarProps
			}
			/>,
			document.getElementById('topbar')
		);

		ReactDOM.render( < ContentBox {...contentboxProps
			}
			/>,
			document.getElementById('contentbox')
		)
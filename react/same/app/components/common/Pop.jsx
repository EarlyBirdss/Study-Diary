import React from "react";

class Pop extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes: {
		msg: React.propTypes.string.required
	}

	confirm() {
		Array.prototype.slice.call(document.querySelectorAll('.pop-box')).map((item) => {item.style.display = 'none'});
	}

	render() {
		return (
			<div className="pop-box">
				<div className="content-box">
					{ this.props.msg }
				</div>
				<div className="btn-bar">
					<button className="cfm-btn" onClick={ this.confirm.bind(this) }>确定</button>
				</div>
			</div>
		)
	}

}

export default Pop;
import React from "react";

class ErrorPop extends React.Component {
	constructor(props) {
		super(props);
	}

	static propTypes: {
		msg: React.propTypes.string.required
	}

	confirm() {
		Array.prototype.slice.call(document.querySelectorAll('.error-pop-box')).map((item) => {item.style.display = 'none'});
	}

	render() {
		return (
			<div className="error-pop-box">
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

export default ErrorPop;
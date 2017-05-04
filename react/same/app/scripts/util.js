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
};
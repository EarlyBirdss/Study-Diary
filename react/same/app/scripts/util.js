(function() {
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
		},
		type: function(arg) {
			var reg = /^\[object ([a-zA-Z]+)\]$/;
			var res = Object.prototype.toString.call(arg).match(reg);

			return res ? res[1].toLowerCase() : res;
		},
		date2string: function(date, type) {
			date = this.type(date) === "date" ? date : new Date(date);
			type = this.type(type) === "string" ? type : "";

			if (this.type(date) !== "date") {
				throw new Error("param is not a date type");
				return false;
			}

			var res = 0,
				year = date.getFullYear(),
				mouth = this.toFixed(date.getMonth() + 1, 2),
				day = this.toFixed(date.getDate(), 2),
				hour = this.toFixed(date.getHours(), 2),
				minute = this.toFixed(date.getMinutes(), 2),
				second = this.toFixed(date.getSeconds(), 2);

			switch (type.toUpperCase()) {
				case "YMD":
					res = year + "-" + mouth + "-" + day;
					break;
				case "YMDHIS":
				default:
					res = year + "-" + mouth + "-" + day + " " + hour + ":" + minute + ":" + second;
					break;
			}

			return res;
		},
		// 数字转为字符串向前加0
		toFixed: function(num, tofixed) {
			tofixed = this.type(tofixed) === "number" && tofixed && tofixed > 0 ? tofixed : Number(tofixed) || 0;

			var str = "",
				res = 0;

			for (var i = 0; i < tofixed; i++) {
				str += "0";
			}

			res = (str + num).substr(-tofixed, tofixed);

			return tofixed !== 0 ? res : num;
		},
	};

	window.util = util;
})();
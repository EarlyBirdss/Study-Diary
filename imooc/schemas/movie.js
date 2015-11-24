var mongoose = require("mongoose");
var MovieSchema = new mongoose.Schema({
	doctor: String,
	title: String,
	language: String,
	country: String,
	summary: String,
	flash: String,
	poster: String,
	year: Number,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

//存储之前执行
MovieSchema.pre("save", function() {
	if (this.isNew) {
		this.meta.createAt = this.meta.updateAt = Date.now();
	} else {
		this.meta.updateAt = Date.now();
	}

	next();
});

MovieSchema.statics = {
	fetch: function(cb) {

		return this
			.find({})
			.sort("meta.updateAt")
			.exec(cb);
	},
	findById: function(id, cb) {

		return this
			.find({
				_id: id
			})
			.exec(cb);
	}
};

module.exports = MovieSchema;
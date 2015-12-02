//引入模块
var express = require("express");
var path = require("path");
var mongoose = require("mongoose");
//var mongoose = db.createConnection("localhost", "imooc");
var _ = require("underscore");
var bodyParser = require("body-parser");
//加载movie模型
var Movie = require("./models/movie");
//设置端口
var port = process.env.PORT || 8080;
//启动
var app = express();

mongoose.connect('mongodb://localhost/test');


//设置视图地址
app.set("views", "./views/pages");
//设置模板引擎
app.set("view engine", "jade");
//格式化表单数据
//app.use(express.bodyParser());
//更改样式目录
app.use(express.static(path.join(__dirname, "bower_components")));
app.use(bodyParser.urlencoded({
	extended: true
}));
//监听端口
app.listen(port);

console.log("imooc started on port" + port);

//设置路由
//首页
app.get("/", function(req, res) {

	Movie.fetch(function(err, movies) {

		if (err) {
			console.log(err);
		}

		res.render("index", {
			title: "imooc 首页",
			movies: movies
		});
	});

});

//列表页
app.get("/admin/list", function(req, res) {

	var id = req.params.id;
	Movie.fetch(function(err, movie) {

		if (err) {
			console.log(err);
		}

		res.render("list", {
			title: "imooc 列表",
			movies: movies
		});

	});

});

app.get("/movie/:id", function(req, res) {


	var id = req.params.id;
	Movie.findById(id, function(err, movie) {

		if (err) {
			console.log(err);
		}

		res.render("detail", {
			title: "imooc " + movie.title,
			movies: movie
		});

	});

});

app.get("/admin/movie", function(req, res) {
	res.render("admin", {
		title: "imooc 后台录入页",
		movie: {
			title: "",
			doctor: "",
			country: "",
			year: "",
			poster: "",
			flash: "",
			summary: "",
			language: ""
		}
	});
});

app.get("/admin/update/:id", function(req, res) {
	var id = req.params.id;

	if (id) {
		Movie.findById(id, function(err, movie) {
			res.render("admin", {
				title: "imooc 后台更新",
				movie: movie
			});
		});
	}
})

app.post("/admin/movie/new", function(req, res) {

	var id = req.body.movie._id;
	var movieObj = req.body.movie;
	var _movie;

	if (id !== "undefined") {
		Movie.findById(id, function(err, movie) {
			if (err) {
				console.log(err);
			}

			_movie = _.extend(movie, movieObj);
		});
	} else {
		_movie = new Movie({
			doctor: movieObj.doctor,
			title: movieObj.title,
			country: movieObj.country,
			language: movieObj.language,
			year: movieObj.year,
			poster: movieObj.poster,
			summary: movieObj.summary,
			flash: movieObj.flash
		});
	}

	_movie.save(function(err, movie) {
		if (err) {
			console.log(err);
		}

		res.redirect("/movie/" + movie._id);
	});

});
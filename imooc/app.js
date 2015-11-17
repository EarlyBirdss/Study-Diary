//引入模块
var express = require("express");
var path = require("path");
//设置端口
var port = process.env.PORT || 8080;
//启动
var app = express();
//设置视图地址
app.set("views", "./views/pages");
//设置模板引擎
app.set("view engine", "jade");
//格式化表单数据
//app.use(express.bodyParser());
//更改样式目录
app.use(express.static(path.join(__dirname, "bower_components")));
//监听端口
app.listen(port);

console.log("imooc started on port" + port);

//设置路由
app.get("/", function(req, res) {
	res.render("index", {
		title: "imooc 首页首页首页",
		movies: [{
			title: "机械战警",
			_id: 1,
			poster: "1.png"
		}, {
			title: "机械战警",
			_id: 2,
			poster: "1.png"
		}, {
			title: "机械战警",
			_id: 3,
			poster: "1.png"
		}, {
			title: "机械战警",
			_id: 4,
			poster: "1.png"
		}, {
			title: "机械战警",
			_id: 5,
			poster: "1.png"
		}, {
			title: "机械战警",
			_id: 6,
			poster: "1.png"
		}, {
			title: "机械战警",
			_id: 7,
			poster: "1.png"
		}, {
			title: "机械战警",
			_id: 8,
			poster: "1.png"
		}]
	});
});
app.get("/admin/list", function(req, res) {
	res.render("index", {
		title: "imooc 列表页",
		movies: [{
			_id: 1,
			title: "机械战警",
			doctor: "导演",
			country: "英国",
			year: 2014
		}]
	});
});
app.get("/movie/:id", function(req, res) {
	res.render("index", {
		title: "imooc 详情页",
		movie: {
			doctor: "导演",
			country: "美国",
			title: "机械战警",
			year: 2014,
			poster: "1.png",
			language: "英语",
			flash: "flash",
			summary: "简介"
		}
	});
});
app.get("/admin/movie", function(req, res) {
	res.render("index", {
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
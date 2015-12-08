//创建目录
//
//fs.mkdir(path[,mode],callback)
//mode - 设置目录权限，默认为 0777。
var fs = require("fs");

fs.mkdir("input-main-16-9", function(err) {
	if (err) {
		return console.error(err);
	}

	console.log("创建成功");
});
//写入文件
//
//fs.writeFile(filename,data[,options],callback)
//
//
var fs = require("fs");

console.log("准备写入文件");
fs.writeFile("input-16.txt", "我是写入内容，测试fs.writeFile", function(err) {
	if (err) {
		return console.error(err);
	}

	console.log("数据写入成功");
	console.log("读取写入的数据");
	fs.readFile("input-16.txt", function(err, data) {
		console.log(data.toString());
	});
});
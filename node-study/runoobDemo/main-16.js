//文件
//
var fs = require("fs");

//异步读取
fs.readFile("input-6.txt", function(err, data) {
	if (err) {
		return console.error(err);
	}
	console.log("异步读取：" + data);
});

//同步读取
var data = fs.readFileSync("input-6.txt");
console.log("同步读取：" + data.toString());

console.log("程序结束");
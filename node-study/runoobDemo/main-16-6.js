//关闭文件
//fs.close(fd,callback)
//fd - 通过 fs.open() 方法返回的文件描述符。

//示例
//
var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件");
fs.open("input-6.txt", "r+", function(err, fd) {
	if (err) {
		return console.error(err);
	}

	console.log("文件打开成功");
	console.log("准备读取文件");

	fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
		if (err) {
			return console.error(err);
		}

		//输出读取的字节
		if (bytes > 0) {
			console.log(buf.slice(0, bytes).toString());
		}

		//关闭文件
		fs.close(fd, function(err) {
			if (err) {
				return console.error(err);
			}
			console.log("文件关闭成功");
		});
	});
});
//截取文件
//fs.ftruncate(fd,len,callback)
//len  内容截取的长度

var fs = require("fs");
var buf = new Buffer(1024);

console.log("准备打开文件");
fs.open("input-6.txt", "r+", function(err, fd) {
	if (err) {
		return console.error(err);
	}

	console.log("打开成功");
	console.log("准备10字节后的长度截取");

	fs.ftruncate(fd, 10, function(err) {
		if (err) {
			return;
		}
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
			if (err) {
				return;
			}
			//输出
			if (bytes > 0) {
				console.log(buf.slice(0, bytes).toString());
			}

			//关闭文件
			fs.close(fd, function(err) {
				if (err) {
					console.log(err);
				}

				console.log("文件关闭");
			});
		});
	});
});
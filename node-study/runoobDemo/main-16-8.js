//删除文件
//fs.unlink(path,callback)
//

var fs = require("fs");
fs.unlink("input-16-8.txt", function(err) {
	if (err) {
		return console.error(err);
	}

	console.log("文件删除成功");
});
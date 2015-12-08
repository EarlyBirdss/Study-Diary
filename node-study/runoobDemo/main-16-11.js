//删除目录
//fs.rmdir(path,callback)
//

var fs = require("fs");
fs.rmdir("input-main-16-9", function(err) {
	if (err) {
		return console.error(err);
	}
	console.log("删除成功");
});
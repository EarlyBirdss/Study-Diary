//非阻塞读取文件示例
var fs = require("fs");
fs.readFile("input-6.txt",function(err,data){

	if(err){
		console.log(err);
	}

	console.log(data.toString());
});

console.log("程序执行结束");
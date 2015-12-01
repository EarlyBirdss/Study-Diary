var fs = require("fs");
var data = "写入流";

//创建一个可以写入的流，写到文件out-10.txt
var writerStream = fs.createWriteStream('output-10.txt');
writerStream.write(data,"UTF8");

//标记文件末尾
writerStream.end();

//处理事件流
writerStream.on("finish",function(){
	console.log("完成写入");
});

console.log("程序结束");

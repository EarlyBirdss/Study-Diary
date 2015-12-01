//stream 流
//四种类型  readable writable duplex(可读可写) transform（操作为写入数据，然后读出结果）
//常见的事件有 data end error finish

var fs = require("fs");
var data = "";

//创建可读流
var readerStream = fs.createReadStream("input-10.txt");

//设置编码为utf-8
readerStream.setEncoding("UTF8");

//处理事件流
readerStream.on("data",function(chunk){
	data += chunk;
});

readerStream.on("end",function(){
	console.log(data);
});

console.log("程序结束");

var http = require("http");

http.createServer(function(request,respond){
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	respond.writeHead(200,{'content-Type':'text/plain'});

	//发送相应数据
	respond.end("hello world");
}).listen(8888);

//终端打印如下信息
console.log("server running at http://127.0.0.1:8888");
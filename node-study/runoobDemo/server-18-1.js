var net = require("net");
var server = net.createServer(function(connection) {
	console.log("client connection");
	console.log("end", function() {
		console.log("客服端关闭连接");
	});
	connection.write("hello world!\r\n");
	connection.pipe(connection);
});
server.listen(8080, function() {
	console.log("server is listen");
});
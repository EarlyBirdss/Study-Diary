var event = require("events");
var eventEmitter = new event.EventEmitter();

//创建事件处理程序
var connectHandle = function(){
	console.log("连接成功");

	//触发data_received事件
	eventEmitter.emit("data_received");
};

//绑定事件以及事件的处理程序
eventEmitter.on("connection",connectHandle);

eventEmitter.on("data_received",function(){
	console.log("数据接收成功");
});
//触发事件
eventEmitter.emit("connection");

console.log("程序执行结束");
var event = require("events");
var emitter = new event.EventEmitter();

emitter.on("some_event",function(arg1,arg2){
	console.log("listerner1",arg1,arg2);
});

emitter.on("some_event",function(arg3,arg4){
	console.log("listerner2",arg3,arg4);
});

emitter.emit("some_event","arg1","arg2");
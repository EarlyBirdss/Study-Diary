var fs = require("fs");

fs.readFile("input-7.txt",function(err,data){
	if(err){
		console.log(err);
		return false;
	}

	console.log(data.toString());
});

console.log("程序执行完毕");
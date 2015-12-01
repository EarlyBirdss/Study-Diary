//使用阻塞方式读取文件
var fs = require("fs");
var data = fs.readFileSync("input-6.txt");

console.log(data.toString());
console.log("程序执行结束");
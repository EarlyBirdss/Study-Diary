//流管道

var fs = require("fs");
var readerStream = fs.createReadStream("input-10-3.txt");
var writerStream = fs.createWriteStream("output-10-3.txt");

readerStream.pipe(writerStream);
console.log("程序结束");
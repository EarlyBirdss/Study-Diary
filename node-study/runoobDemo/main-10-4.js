//链式流
var fs = require("fs");
var zlib = require("zlib");

//压缩input-10-4.txt为input.txt.gz
fs.createReadStream("input-10-4.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));

console.log("程序结束");
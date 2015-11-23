#nodejs学习笔记

var http = require('http');
var querystring = require('querystring');

//侦听服务器的request事件
http.createSever(function(req,res){
var postData = '';
req.setEncoding('utf8');
//侦听请求的data事件
req.on('data',function(chunk){
 postData += chunk;
});
//侦听请求的end事件
req.on('end',function(){
 res.end(postData);
}).listen(8080);

#API

## url 
    
### url.parse():
参数：第一个参数：完整的URL地址，第二个参数（可选）：是否使用query解析（true）,如果设置为true，query string字段被填充为对象（见图二）,第三个参数：讲第三个设置为true，允许第一个参数不带协议
返回：解析为URL对象
![](http://i.imgur.com/EhMx7WV.png)


图一没有设置true--------------------------------  query: 'search=keyword&data=121510',

![](http://i.imgur.com/KWsmhk0.png)

图二设置第二个参数为true-------------  query: { search: 'keyword', data: '121510' },

![](http://i.imgur.com/EEwV6Hp.png)

不带协议并且不设置第三个参数：无法正确解析主机名host和路径path

不带协议并且设置第三个参数为true

![](http://i.imgur.com/MDI0mJ0.png)

！！！地址前不加//  ！！！无法解析主机

![](http://i.imgur.com/1QcRNIO.png)
### url.format():

参数：URL对象
返回：URL地址
是url.parse()的逆操作

![](http://i.imgur.com/O2WyjEp.png)

### url.resolve():

接收两个参数：首页地址 ， 路径
返回：url地址

![](http://i.imgur.com/UmrOprZ.png)

## querystring
### querystring.stringify

参数：第一个参数需要序列化的对象，第二个参数连接符（可选），第三个参数键值（key-value）之间的连接符（可选）
返回：字符串

不加第二个参数默认返回用“&”连接的字符串

![](http://i.imgur.com/paESyyK.png)
    
增加第二个参数

![](http://i.imgur.com/337sCHr.png)

增加第三个参数

![](http://i.imgur.com/Etl1z2k.png)

### querystring.parse()


参数：第一个参数：需要反序列化的字符串，第二个参数：如果各个属性之间不是默认的“&”连接，需传入改字符串所用的连接符（可选），第三个参数：同二，键值之间的连接符（可选），第四个参数：最大个数限制
默认：

![](http://i.imgur.com/pUOXgis.png)

增加第二个参数

![](http://i.imgur.com/wAY8sy0.png)

增加第三个参数

![](http://i.imgur.com/5hyKsQC.png)


### querystring.escape():字符转义

![](http://i.imgur.com/TE4yn7H.png)

### querystring.unescape():反转义

![](http://i.imgur.com/fVxCO19.png)














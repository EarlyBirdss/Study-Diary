//全局对象
//输出全局对象 __filename的值  表示当前正在执行的脚本文件的文件名。输出文件所在位置的绝对路径
//console.log(__filename); //E:\Study-Diary\node-study\runoobDemo\main-14.js
//__dirname 表示当前执行脚本所在的目录
//console.log(__dirname);//E:\Study-Diary\node-study\runoobDemo


//setTimeout(function(){},ms);

function printHello() {
	console.log("hello,world");
}

//两秒后执行
var t = setTimeout(printHello, 2000);

clearTimeout(t);

var p = setInterval(printHello, 500);

clearTimeout(p);

//process  global对象的属性 用于描述当前node进程状态的对象，提供了一个与操作系统的简单接口。通常在你本地命令行程序的时候，少不了与它打交道
//exit  当进程准备退出时触发
//beforeExit 当node清空事件循环，并且没有其他安排是触发这个事件，通常来说，当没有进程安排node退出，但是beforeExit的监听器可以异步调用，这样node就会继续执行
//uncaughtException当一个异常冒泡回到事件循环，触发这个事件，如果也吃添加了监听器，默认的操作（打印堆栈跟踪信息并退出）就不会发生
//signal事件  当进程接收到信号时就触发，信号礼拜详见标准的POSIX信号 如SIGINT/SIGUSR1等
//
//实例
process.on("exit", function(code) {
	//以下代码永远不会执行
	setTimeout(function() {
		console.log("该代码不会执行");
	}, 0);

	console.log("退出码为：", code);
});
console.log("程序结束");

//退出状态码如下
//1      有未捕获异常，并且没有被域或uncaughtException处理函数处理
//2       保留
//3       JavaScript的源码启动node进程时引发的解析错误 。非常罕见
//4        JavaScript的源码启动node进程，评估时返回函数失败。非常罕见
//4        v8里致命的不可恢复的错误
//6        未捕获异常，内部异常处理函数不知为何设置为on-function，并且不能被调用
//7        未捕获的异常， 并且异常处理函数处理时自己抛出了异常。
//8         保留
//9        可能是给了未知的参数，或者给的参数没有值
//10       JavaScript的源码启动 Node 进程时抛出错误，非常罕见
//11       设置了参数--debug 和/或 --debug-brk，但是选择了错误端口。
//>128     如果 Node 接收到致命信号，比如SIGKILL 或 SIGHUP，那么退出代码就是128 加信号代码。这是标准的 Unix 做法，退出信号代码放在高位。
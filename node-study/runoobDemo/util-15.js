//util.inherits(constructor,superConstructor)是一个实现对象间原型继承的函数
//javascript的面向对象特性是基于原型的
//示例
//
var util = require("util");

function Base() {
	this.name = "base";
	this.base = 1991;
	this.sayHello = function() {
		console.log("hello" + this.name);
	}
}

Base.prototype.showName = function() {
	console.log(this.name);
};

function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, Base); //实现继承  只继承原型链 不继承构造函数中属性和方法
var objBase = new Base();
objBase.sayHello();
objBase.showName();

console.log(objBase);

var objSub = new Sub();
//objSub.sayHello();//error :undefined is not a function
objSub.showName();
console.log(objSub); //不继承 构造函数中 base属性和sayhello方法


//util.inspect(object,[showHidden],[depth],[colors]) 是一个将任意对象转化为字符串的方法 通常用于调试和错误输出
//util.isArray(object) 
//util.isRegExp(object)
//util.isDate(object)
//util.isError(object)
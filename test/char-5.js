var gooleMap = {
	show: function() {
		console.log("开始渲染谷歌地图");
	};
};

var renderMap = function() {
	gooleMap.show();
};

renderMap(); //开始渲染谷歌地图

//加入百度地图切换
var gooleMap = {
	show: function() {
		console.log("开始渲染谷歌地图");
	};
};

var baiduMap = {
	show: function() {
		console.log("开始渲染百度地图");
	};
};

var renderMap = function(type) {
	if (type === "google") {
		gooleMap.show();
	} else if (type === "baidu") {
		baiduMap.show();
	}
};

renderMap("gooleMap"); //开始渲染谷歌地图
renderMap("baidu"); //开始渲染百度地图


//优化后 抽象
var renderMap = function(map) {
	if (map.show instaceof Function) {
		map.show();
	}
}

renderMap(gooleMap); //开始渲染谷歌地图
renderMap(baidu); //开始渲染百度地图

//加入搜搜地图
var sosoMap = {
	show: function() {
		console.log("开始渲染搜搜地图");
	}
}


//------------------我是例子与例子间的分隔符


var obj = {
	myName: "Mathilda",
	getName: function() {
		return this.myName;
	}
}

alert(obj.getName()); //Mathilda;
var getName2 = obj.getName;
alert(getName2()); //undefined;

//------------------我是例子与例子间的分隔符


//使用更短的函数名代替document.getElementById
var getId = function(id) {
	return document.getElementById(id);
}

//如果这样做会引发什么错误呢
var getId = document.getElementById;
//试运行上一句代码，会抛出异常，因为document.getElementById方法的内部实现中使用到了this,这个this本指向document，但上一句代码使得this指向了window



//使用apply修正this的执行，如下
document.getElementById = (function(func) {
	return function() {
		return func.apply(document, arguments);
	}
}(document.getElementById));


//----------------------我是例子与例子间的分隔符



var report = function(src) {
	var img = new Image();
	img.src = src;
};

//上述代码在低版本的实现中，report函数并不是每次都能成功的发出http请求，因为，report调用结束后，局部变量img会被立即销毁，而此时http请求可能还没来得及发出。

//解决 用闭包将img封装起来
var report = (function() {
	var imgs = [];
	return function(src) {
		var img = new Image();

		imgs.push(img);
		img.src = src;
	};
}());


//----------------------我是例子与例子间的分隔符

//appendDiv函数：在页面中创建100个div，并把这些div节点都设置为隐藏
var appendDiv = function() {
	for (var i = 0; i < 100; i++) {
		var div = document.createElement("div");
		div.innerHTML = i;
		document.body.appendChild(div);
		div.style.display = "none";
	}
};
appendDiv();
//div.style.display = "none";的逻辑编码在appendDiv函数中显然是不合理的，


//解决：将div.style.display = "none"用回调函数的形式传入appendDiv中
var appendDiv = function(callback) {
	for (var i = 0; i < 100; i++) {
		var div = document.createElement("div");
		div.innerHTML = i;
		document.appendChild(div);

		if (typeof callback === "function") {
			callback(div);
		}
	}
};

appendDiv(function(node) {
	node.style.display = "none";
});



//----------------------我是例子与例子间的分隔符


//getSingle
var getSingle = function(fn) {
	var ret;
	return function() {
		return ret || (ret = fn.apply(this, arguments));
	};
};


//----------------------我是例子与例子间的分隔符
//高阶函数实现AOP
Function.prototype.before = function(beforefn) {
	var __self = this;
	return function() {
		before.apply(this, arguments);
		return __self.apply(this, arguments);
	};
};

Function.prototype.after = function(afterfn) {
	var __self = this;
	return function() {
		var ret = __self.apply(this, arguments);
		after.apply(this, arguments);
		return ret;
	};
};

var func = function() {
	console.log("2");
};

func = func.before(function() {
	console.log("1");
}).after(function() {
	console.log("3");
});

//高阶函数的其他应用
//currying (部分求值)
//假设我们要编写一个计算每月开销的函数，在每天结束之前我们都要记录今天花掉了多少钱，代码如下(不是currying的例子)

var cost = (function() {
	var args = [];

	return function() {
		if (arguments.length === 0) {
			var money = 0;
			for (var i = 0, len = args.length; i < len; i++) {
				money += args[i];
			}
		} else {
			[].push.apply(args, arguments);
		}
	}
}());

cost(100); //未求值
cost(100); //未求值
cost(100); //未求值

cost(); //300


//编写通用currying
var currying = function(fn) {
	var args = [];

	return function() {
		if (arguments.length === 0) {
			return fn.apply(this.args);
		} else {
			[].push.apply(args, arguments);
			return arguments.callee;
		}
	};
};

var cost = function() {
	var money = 0;

	return function() {
		for (var i = 0, len = arguments.length; i < len; i++) {
			money += arguments[i];
		}
	};
};

var cost = currying(cost); //转化为currying函数

cost(100); //未求值
cost(100); //未求值
cost(100); //未求值

cost(); //300
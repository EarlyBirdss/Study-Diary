##2015-1-23 周一

* 【书籍】JavaScript启示录

##2015-1-23 周二

* 【书籍】JavaScript启示录
* 【书籍】JavaScript设计模式与开发实践（好书好书好书！太长见识咯！）
* 【慕课】nodeJS + mongoose建站（遇到问题暂时卡住了）

##2015-1-23 周三

* 【书籍】JavaScript设计模式与开发实践
* 【书籍】Effective JavaScript
* 【慕课】angularJS实战

##2015-1-23 周四

* 【书籍】JavaScript设计模式与开发实践
* 【书籍】Effective JavaScript
* 【慕课】angularJS实战
* 【菜鸟教程】[angularJS菜鸟教程](http://www.runoob.com/angularjs/angularjs-tutorial.html)
* 【OurJS】[mongoose教程](http://ourjs.com/detail/53ad24edb984bb4659000013)
	
##2015-1-23 周五

* 【书籍】JavaScript设计模式与开发实践
* 【书籍】Effective JavaScript

##2015-1-23 周六

* 空

##2015-1-23 周日

* 【书籍】Effective JavaScript

这周有大段大段的时间学习 好棒！

##学习笔记

9. 避免使用for-in循环，因为1.for-in是按键值对查询，2.每次循环都重新计算数组的长度，相比for循环性能更低。
10. 判断是否为NaN 可用 a !== a;//true 如果返回true则a为NaN (javascript 原生的isNaN有缺陷)
11. 假值只有 null undefined "" false  0 -0 其他都为真值（不易混淆）
12. 函数内的嵌套函数（无论第几层嵌套）中this一般指向window   即闭包内this指向window
13. 如果调用构造器时不使用new 如 var person = Person() ; 那么Person内的属性讲指向window。如function Person(){this.name = "Mathilda";} alert(person.name);//undefined; alert(window.name); //Mathilda
14. 为了防止连接js文件时出现问题，每个js文件最好使用立即执行函数封装起来，并在立即执行函数内部第一行加入"use strict"，在文件第一个字符加入";"分号，即 ;(function(){"use strict";}());
15. apply()接收的第二个参数也可以为类数组
16. 终于懂一点闭包 1.封装变量2.延续局部变量对的寿命

### 《JavaScript设计模式与开发实践》  的一些例子


JavaScript设计模式与开发实践【一本让我见识新大陆的书 这里的想法真是让我耳目一新】
多态就是把"做什么"与"怎么去做"分开

#####一个不好的例子：

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

##### 优化后 抽象

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
	
	假设每个地图API提供展示地图的方法名都是show


###//------------------我是例子与例子间的分隔符

##### this指向引发的错误

	var obj = {
	    myName: "Mathilda",
	    getName: function() {
	        return this.myName;
	    }
	}
	
	alert(obj.getName()); //Mathilda;
	var getName2 = obj.getName;
	alert(getName2()); //undefined;

###//------------------我是例子与例子间的分隔符

##### this指向引发的错误

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


### //----------------------我是例子与例子间的分隔符

##### //闭包延缓局部变量寿命的例子

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


### //----------------------我是例子与例子间的分隔符

##### //回调函数的例子！！！！这个想法好厉害

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


### //----------------------我是例子与例子间的分隔符

##### //getSingle 单例模式

	var getSingle = function(fn){
	    var ret;
	    return function(){
	        return ret || (ret = fn.apply(this,arguments));
	    };
	};



### //----------------------我是例子与例子间的分隔符

##### //高阶函数实现AOP :before()调用函数前执行、after()调用函数后执行;
	
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
	
	
##### //编写通用currying

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

	//用法示例
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

### 【慕课】angularJS实战 笔记

* 两个或多个控制器之前有相似的方法，不要用继承，使用ng中的server
* 利用directive实现view的复用
* angularjs的MVC是全部借助于$scope实现的
* ng-repeat: 迭代一个数组

##### $scope

* $scope是一个JavaScript对象
* $scope提供一些工具方法（$watch/$apply）
* $scope是表达式的执行环境（或者说是作用域）
* $scope是一个树形结构，与DOM标签平行
* 子$scope可以继承父$scope上的属性和方法
* 每一个angular应用只有一个根$scope对象，一般位于ng-app上
* $scope可以传播事件，与DOM事件相似，可以向上$emit可以向下$broadcast
* $scope不仅是MVC的基础，也是实现数据双向绑定的基础
* 可以使用angular.element($0).scope()进行调试

##### 注意点：
* 不要试图去复用controller，一个控制器一般只控制一小块视图
* 不要在controller中操作DOM，这不是控制器的职责（指令）
* 不要在controller里做数据格式化，ng有很好的表单控件
* 不要在controller里做数据过滤，ng有$filter服务
* 一般来说，controller是不会互相调用的，控制器之间的交互会通过事件进行


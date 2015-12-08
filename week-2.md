##2015-11-16 周一

* 【慕课】lightbox
* 【慕课】图片旋转木马组件

##2015-11-17 周二

* 【慕课】nodejs+mongoDB建站

##2015-11-18 周三

* 【慕课】lightbox

##2015-11-19 周四

* 【慕课】nodejs--进击nodejs基础

##2015-11-20 周五

* 【慕课】nodejs--进击nodejs基础
* JavaScript模块化

##2015-11-21 周六

* 空

##2015-11-22 周天

* 空

##学习笔记

### 前端模块化

1. 职责单一，高度解耦且可替换的模块
2. commonJS
3. 很多主流的模块化解决方案通过 JavaScript 运行时来支持“匿名闭包”、“依赖分析”和“模块加载”等功能
4. 一般 require 用于处理页面首屏所需要的模块，require.async 用于处理首屏外的按需模块。
5. 自包含的模块
    

	var testModule = (function() {
	        var counter = 0;
	        return {
	            incrementCounter: function() {
	                return ++counter;
	            },
	            resetCounter: function() {
	                counter = 0;
	            }
	        }
	})();

6.揭示模块（Revealing Module）


	var myRevealingModule = function(){
	    var privateVar = "private",
	          publicVar  = "public";
	
	    function privateFunction  = function() {
	            console.log("private");
	    }
	
	    function publicFunction  = function() {
	            console.log("public");
	    }
	
	    return {
	        publicV: publicVar,
	        publicF: publicFunction
	    }
	}();

7.单例模块（Singleton）

	var mySingleton = (function(){
        var instance;
        function init() {

            //私有变量和方法
            var privateVar = "private";
            function privateFunction = "public";

            return {
                    //公共变量和方法
                    publicV : "public",
                    publicF : function() {
                            console.log("public");
                    }
            } 
   ·
        }

    return {
        //获取singleton的实例，如果存在就返回，不存在就创建新实例
        getInstance: function() {
            if(!instance) {
                    instance = init();
            }
            return install;
        }
    }
	})();
        
使用方法：

	var singleA = mySingleton.getInstance();

使用范围：1.当类只能能有一个实例并且客户可以从一个众所周知的访问点访问它是。2.该唯一的实例应该是通过子类化可扩展的，并且客户应该无需要更改代码就能更使用一个扩展的实例时。
延迟执行

8.MVC（模型-视图-控制器）

model：业务逻辑  view：用户界面 conctroller：管理逻辑和用户输入

### 原型链继承

* 在原型链实现继承时，不能使用对象字面量创建原型方法。因为这样做就会重写原型链。

	function SuperType() {
	 this.property = true;
	}
	SuperType.prototype.getSuperValue = function() {
	 return this.property;
	}
	function SubType() {
	 this.property = false;
	}
	//实现继承
	SubType.prototype = new SubType();
	//不要使用字面量
	SubType.prototype = {
	 getSubValue: function() {
	  return this.property;
	 },
	 someOtherMethod: function() {
	  return false;
	 }
	};
	var instance = new SubType();
	alert(instance.getSubValue); //error

### 借用构造函数：在子类型内部调用超类型构造函数 apply() call()

	function SuperType() {
	 this.colors = ["red", "blue", "yellow"];
	}
	function SubType() {
	 //利用call()继承SuperType
	 SuperType.call(this);
	}
	var instance1 = new SubType();
	instance1.colors.push("gray");
	alert(instance1.colors); //red,bule,yellow,gray
	var instance2 = new SubType();
	alert(instance2.colors); //red,bule,yellow

* 缺点：方法都在构造函数中定义，函数无法复用。很少单独使用。

### 组合继承（经典继承）

	
	function SuperType(name) {
	 this.name = name;
	 this.colors = ["red", "blue", "yellow"];
	}
	
	SuperType.prototype.sayName = function() {
	 alert(this.name);
	};
	
	function SuperType(name, age) {
	 //利用call() 继承（借用构造模式）
	
	 SuperType.call(this, name);
	
	 this.age = age;
	}
	
	//继承方法
	SubType.prototype = new SuperType();
	SubType.prototype.constructor = SuperType;
	SubType.prototype.sayAge = function() {
	 alert(this.age);
	};
	
	var instance1 = new SubType("Mathilda", 5);
	instance1.colors.push("gray");
	alert(instance1.colors);
	instance1.sayName();
	instance1.sayAge();
	
	var instance2 = new SubType("young", 5);
	alert(instance2.colors);
	instance2.sayName();
	instance2.sayAge();

* 最常用的继承模式：避免了原型链和借用构造模式的缺陷
* instanceof和isPrototypeOf() 能够识别基于组合继承创建的对象

### juery module :

	function library(module) {
	 $(function() {
	  if (module.init) {
	   module.init();
	  }
	 });
	 return module;
	}
	var myLibrary = library(function() {
	 return {
	  init: function() {
	   //模块实现
	  }
	 };
	})();


##2015-11-10 周一
* 学习node.js入门教程

###学习笔记

1. node.js由三部分组成
	* 引入一个模块require
	* 创建一个服务器 http.createServer
	* 接受请求和相应请求
	
2. Node.js REPL(交互式解释器)
	* 读取 - 读取用户输入，解析输入了Javascript 数据结构并存储在内存中。
	* 执行 - 执行输入的数据结构
	* 打印 - 输出结果
	* 循环 - 循环操作以上步骤直到用户两次按下 ctrl-c 按钮退出
	
3. events ： events.EventEmitter
	* EventEmitter 的核心就是事件触发与事件监听器功能的封装
	* addListener(event, listener)
为指定事件添加一个监听器到监听器数组的尾部。
	* on(event, listener)
为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
	* once(event, listener)
为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
	* removeAllListeners([event])
移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器
	* error 事件

##2015-11-11 周二

* 继续学习node.js
* 安装sublime 安装sublime插件
* 慕课开始学习node+mongoose建站

###学习笔记



##2015-11-12 周三

* Javascript规范
* css规范
* HTML规范

### 学习笔记

#### HTML规范
1. HTML属性应遵循以下顺序保存可读性：1.id 2.class 3.name 4.data-* 5.src for type href 6.title alt 7.aria-*  role
2. Boolean 属性指不需要声明取值的属性。如selected

#### JavaScript规范

1. 避免全局命名污染 使用IIFE（立即执行函数）
2. 建议所有脚本都从IIFE开始
3. 推荐使用 (function(){   }());不推荐使用(function(){})();
4. 推荐使用'use strict',最好是放在独立的IIFE中，避免影响第三方类库。
5. 所有变量已经方法，应当定义在function内的首行，只用一个var声明，多个变量用逗号分割。
6. 不要在循环中使用函数或闭包。
7. 限制this的使用场景：1.在构造函数中2.在对象方法
8. 首选函数式风格

#### css规范
1. 省略“0”值后面的单位。但在js设置css样式“0”值后必须带单位
2. css类名使用-连接，id使用_连接
3. 声明顺序，结构性属性(1.display,2.position,left,top···3.overflow,float4.,maggin,padding)>表现性属性(1.background,border,2.font,text)
4. 使用双引号，url不使用引号。
5. 16进制用小写。如#fff。尽量使用更短的16进制数值。如#fff而不是#ffffff。
6. 链接的样式必须按以下的杨思a:link>a:visited>a:hover>a:active
5. sass less 规范
    * 不嵌套没有内容的选择器

##2015-11-13 周四

* 慕课学习node+mongoose建站

###学习笔记
* 摘要
	* .vertical-align:top bottom middle 数值 百分比
	* IE6、7的vertical-aline百分比值不支持line-height为小数的情况
	* text-bottom 与bottom 的区别：text-bottom始终与文字底部对齐，bottom受制于box line-height属性
	* vertical-align:middle属性的表现与否，仅仅与其父标签有关


##2015-11-14 周五

* 学习js模块化

###学习笔记——MVC 的JavaScript Web富应用开发

视图： 少量逻辑视图助手

    //help.js
    var helper = {};
    helper.formatDate= function(){};

    //template html
    <div>
        $.{helper.formateDate=function(){} }
    </div>

控制器：从视图获得事件和输入，处理，更新视图 加事件监听

	var Controller = {};

#### //使用匿名函数来封装一个作用域

	(Controller.users = function($){
	    var nameClick = function(){
	       
	    };
	    
	    //在页面加载时绑定事件监听
	    $(function(){
	         $("#view_name").on("event",nameClick);
	      // $("#view_name") .click(nameClick);
	    });
	})(jQuery);


#### 创建自己的类模拟库

	var Class = function(){
	    var _class = function(){
	        this.init.apply(this, arguments);
	    };
	    
	    _class.prototype.init = function(){};
	    return _class;
	};
	
	var Person = new Class;
	Person.protorype.init = function(){
	    //基于Person的实例做初始化
	};

#### //用法

	var person = new Person;

在构造函数中给类添加函数跟给对象添加属性是一样的，/* Person.find = function(id){}; var person = Person.find(1);  */要想给构造函数添加实例函数，需要用到构造函数的prototype/* Person.prototype.breath = function(){}; var person = new Person; */


#### 给实现了类机制的类添加方法 extend() include()

	var Class = function() {
	 var _class = function() {
	  this.init.apply(this, arguments);
	 };
	
	 _class.prototype.init = function() {};
	
	 //定义prototype的别名
	 _class.fn = _class.prototype;
	
	 //定义类的别名
	 _class.fn.parent = _class;
	
	 //给类添加属性
	 _class.extend = function(obj) {
	  var enxtended = obj.extended;
	  for (var i in obj) {
	   _class[i] = obj[i];
	  }
	  if (enxtended) {
	   enxtended(_class);
	  }
	 };

	 //给实例添加属性

	 _class.include = function(obj) {
	  var included = obj.included;
	  for (var i in obj) {
	   _class.fn[i] = obj[i];
	  }
	  if (included) {
	   included(_class);
	  }
	 };
	 return _class;
	};

#### //extend用法

	var Person = new Class;
	
	Person.extend({
	 find: function(id) {
	  console.log(id);
	 },
	 exists: function(id) {}
	})
	
	var person1 = Person.find(1);
	
####	//include用法

	 var Person = new Class;
	
	 Person.include({
	  save: function(id) {
	   console.log(id);
	  },
	  destory: function(id) {
	
	  }
	 });
	
	 var person = new Person;
	
	 person.save(2);
	
	//实现继承
	var ORMModule = {
	 save: function() {
	  // 共享的函数
	 }
	};
	var Person = new Class;
	var Asset = new Class;
	Person.include(ORMModule);
	Asset.include(ORMModule);





##2015-11-15 周六

* 空

##2015-11-16 周日

* 空




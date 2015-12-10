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

//用法
if (0) {

	var Person = new Class;

	Person.extend({
		find: function(id) {
			console.log(id);
		},
		exists: function(id) {}
	});

	Person.find(1);
} else {

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
}

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

//prototype 原型
var Animal = function() {};
Animal.prototype.breath = function() {
	console.log("breath");
};
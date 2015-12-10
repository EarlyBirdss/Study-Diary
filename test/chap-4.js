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
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
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
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
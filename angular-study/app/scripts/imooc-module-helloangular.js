var HelloAngular = angular.module("HelloAngular", []);
HelloAngular.controller("helloNgCtrl", ["$scope", function($scope) {
	$scope.greeting = {
		text: "angular"
	}
}]);
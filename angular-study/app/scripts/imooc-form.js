var userInfoModule = angular.module("UserInfoModule", []);
userInfoModule.controller("UserInfoCtrl", ["$scope", function() {
	$scope.userInfo = {
		email: "Mathilda.yang@toursforfun.com",
		password: "Mathilda.yang",
		autoLogin: true
	};
}]);
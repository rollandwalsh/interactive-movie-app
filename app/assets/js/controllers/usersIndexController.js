angular.module('MovieApp').controller('UsersIndexController', function (User, $scope) {
	$scope.users = User.query();
});
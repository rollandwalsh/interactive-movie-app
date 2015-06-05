angular.module('MovieApp').controller('MoviesIndexController', function (Note, $scope) {
	$scope.notes = Note.query();

	console.log($scope.notes)
});
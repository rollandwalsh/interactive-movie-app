angular.module('MovieApp').controller('MoviesIndexController', function (Movie, $scope) {
	$scope.notes = Movie.query();
});
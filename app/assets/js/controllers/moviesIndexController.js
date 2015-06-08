angular.module('MovieApp').controller('MoviesIndexController', function (Movie, $scope) {
	$scope.movies = Movie.query();
	$scope.search = {};
});
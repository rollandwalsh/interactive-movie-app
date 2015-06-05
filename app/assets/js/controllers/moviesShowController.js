angular.module('MovieApp').controller('MoviesShowController', function (Movie, $scope, $routeParams, $location) {
	$scope.movie = Movie.get({id: $routeParams.id});

	$scope.deleteMovie = function (movie) {
		movie.$remove().then(function () {
			$location.path("/");
		});
	}
});
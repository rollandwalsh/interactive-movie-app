angular.module('MovieApp').controller('MoviesCreateController', function ($scope, Movie, $location) {
	$scope.movie = new Movie();
	$scope.isSubmitting = false;

	$scope.saveMovie = function (movie) {
		$scope.isSubmitting = true;
		movie.$save().then(function () {
			$location.path('/');
		}).finally(function () {
			$scope.isSubmitting = false;
		});
	}
});
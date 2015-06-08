angular.module('MovieApp').controller('MoviesEditController', function ($scope, Movie, Category, User, $routeParams, $location) {
  $scope.movie = Movie.get({id: $routeParams.id})
  $scope.isSubmitting = false;
  $scope.categories = Category.query();
  $scope.users = User.query();

  $scope.saveMovie = function (movie){
  	$scope.isSubmitting = true;

    movie.$update().finally(function () {
    	$scope.isSubmitting = false;
    	$location.path("/movies/" + movie.id);
    });
  }
});
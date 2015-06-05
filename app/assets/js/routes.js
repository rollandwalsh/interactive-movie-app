angular.module('MovieApp').config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/movies'
		})

		.when('/movies', {
			templateUrl: 'assets/templates/movies/index.html'
			controller: 'MoviesIndexController'
		})

		.when('/movies/new', {
			templateUrl: 'assets/templates/movies/new.html'
			controller: 'MoviesCreateController'
		})

		.when('/movies/:id', {
			templateUrl: 'assets/templates/movies/show.html'
			controller: 'MoviesShowController'
		})
		
		.when('/movies/:id/edit', {
			templateUrl: 'assets/templates/movies/edit.html'
			controller: 'MoviesEditController'
		})
});
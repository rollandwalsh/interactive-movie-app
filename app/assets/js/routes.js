angular.module('MovieApp').config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			redirectTo: '/movies'
		})

		.when('/movies', {
			templateUrl: "assets/templates/movies/index.html",
			controller: "MoviesIndexController"
		})

		.when('/movies/new', {
			templateUrl: "assets/templates/movies/create.html",
			controller: "MoviesCreateController"
		})

		.when('/movies/:id', {
			templateUrl: "assets/templates/movies/show.html",
			controller: "MoviesShowController"
		})

		.when('/movies/:id/edit', {
			templateUrl: "assets/templates/movies/edit.html",
			controller: "MoviesEditController"
		})

		.when('/users', {
			templateUrl: "assets/templates/users/index.html",
			controller: "UsersIndexController"
		})

		.when('/users/:id', {
			templateUrl: "assets/templates/users/show.html",
			controller: "UsersShowController"
		})
});
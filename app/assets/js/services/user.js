angular.module('MovieApp').factory('User', function ($resource) {
	return $resource('/users/:id');
});
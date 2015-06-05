angular.module('MovieApp').factory('Category', function ($resource) {
	return $resource('/categories/:id');
});
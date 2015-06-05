angular.module('MovieApp').factory('Note', function ($resource) {
	return $resource('/movies/:id');
});
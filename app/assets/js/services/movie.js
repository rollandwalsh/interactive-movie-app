angular.module('MovieApp').factory('Movie', function ($resource) {
	return $resource('/movies/:id', {id: "@id"}, {
		update: {
			method: 'PUT'
		}
	});
});
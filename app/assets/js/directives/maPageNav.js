angular.module('MovieApp').directive('maPageNav', function () {
	return {
		replace: true,
		restrict: "E",
		templateUrl: "assets/templates/directives/maPageNav.html",
		controller: function ($scope, $location) {
			$scope.isPage = function (name) {
				return new RegExp("/" + name + "($|/)").test($location.path());
			}
		}
	}
})

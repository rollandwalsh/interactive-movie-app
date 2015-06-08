angular.module('MovieApp').directive('maCategorySelector', function (Category) {
	return {
		replace: true,
		restrict: 'E',
		require: '?ngModel',
		templateUrl: '/assets/templates/directives/maCategorySelector.html',
		link: function (scope, element, attrs, ngModelCtrl) {
			var activeCategory = {}
			scope.categories = Category.query();

			scope.isActive = function (cateogry) {
				return activeCategory && activeCategory.id === cateogry.id;
			};

			scope.toggleCategory = function (cateogry) {
				if (cateogry === activeCategory) {
					activeCategory = {};
				} else {
					activeCategory = cateogry;
				}

				ngModelCtrl.$setViewValue(activeCategory);
			};

			ngModelCtrl.$render = function () {
				activeCategory = ngModelCtrl.$viewValue;
			};
		}
	};
});
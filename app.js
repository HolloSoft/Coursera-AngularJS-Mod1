(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController) {
	//LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope)
{
	$scope.method1 = function (){
		var arrayOfStrings = $scope.name.split(",");
		$scope.message = arrayOfStrings.length;
	}
}
});

})();

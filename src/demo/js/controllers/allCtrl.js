require('angular').module('demo').controller('AllCtrl', function ($scope, leaugeService) {
	leaugeService.getAll(function(data) {
		$scope.message = data;
	})
	$scope.showMe = true;

});
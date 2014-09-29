require('angular').module('demo').controller('SwedishCtrl', function ($scope, leaugeService) {
	leaugeService.getSwedish(function(data) {
		$scope.message = data;
	});
});
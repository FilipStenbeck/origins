require('angular').module('demo').controller('RawCtrl', function ($scope, leaugeService) {
	leaugeService.getRaw(function(data) {
		$scope.message = data;
	})
});
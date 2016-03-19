require('angular').module('demo').controller('SwedishCtrl', function ($scope, leaugeService) {
	
	$scope.message = "No Swedish leauges found";
	
	leaugeService.getSwedish(function(data) {
		$scope.message = data;
	});
});
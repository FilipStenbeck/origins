require('angular').module('demo').controller('AllCtrl', function ($scope, leaugeService) {
	
	$scope.message = "No leauges found";

	leaugeService.getAll(function(data) {
		$scope.message = data;
	})
});
require('angular').module('demo').directive("hitCounter", function ($http) {
   return {
        restrict: "E",
        link: function (scope, element, attributes) {
        	$http({
            method : 'GET',
            url : 'http://localhost:9000/api/counter',
        	}).success(function (data) {
            	var counter = document.createElement("h3");
            	counter.textContent =  "Number of visits: " + data;
            	element[0].appendChild(counter);
    		});
        }
    };
});

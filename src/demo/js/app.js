'use strict';
/*********************************** 
 Routers 
***********************************/

angular.module('demo', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'main.html',
        controller: 'SwedishCtrl'
      })
      .when('/all', {
        templateUrl: 'main.html',
        controller: 'AllCtrl'
      })
      .when('/raw', {
        templateUrl: 'main.html',
        controller: 'RawCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


/*********************************** 
 Controllers
************************************/

angular.module('demo').controller('SwedishCtrl', function ($scope, leaugeService) {
	leaugeService.getSwedish(function(data) {
		$scope.message = data;
	});
	$scope.showMe = true;
});

angular.module('demo').controller('AllCtrl', function ($scope, leaugeService) {
	leaugeService.getAll(function(data) {
		$scope.message = data;
	})
	$scope.showMe = true;

});

angular.module('demo').controller('RawCtrl', function ($scope, leaugeService) {
	leaugeService.getRaw(function(data) {
		$scope.message = data;
	})
	$scope.showMe = true;
		
});


/************************************** 
 Services
***************************************/

angular.module('demo').factory('leaugeService', function ($http) {

   var ROOT_URL = 'http://localhost:9000/api/leagues/';
   
   var callServer = function(url, callback) {
    	$http({
            method : 'GET',
            url : url,
        }).success(function (data) {
            callback(data);
        });
    }

    return {        
        
        getSwedish : function (callback) {
            callServer(ROOT_URL + 'se', callback);  
        },
        
        getAll : function (callback) {
            callServer(ROOT_URL + 'all', callback);  
        },

        getRaw : function (callback) {
            callServer(ROOT_URL + 'raw', callback);  
        }
    };
});

/*********************************** 
 Directives 
***********************************/
angular.module('demo').directive("hitCounter", function ($http) {
   return {
        restrict: "E",
        link: function (scope, element, attributes) {
        	$http({
            method : 'GET',
            url : 'http://localhost:9000/api/counter',
        	}).success(function (data) {
            	var counter = document.createElement("h3");
            	counter.textContent =  "Number of visits: " + data //attributes.messsage;
            	element[0].appendChild(counter);
    		});
        }
    };
});


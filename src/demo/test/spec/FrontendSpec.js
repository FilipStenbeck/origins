require('angular');
require('angular-mocks');

require('../../js/app');

var BACKEND_URL = "http://localhost:9000";

describe("Frontend", function() {
 
    beforeEach(window.angular.mock.module("demo"))
  	
  	describe("Controllers", function() {

    	describe("AllCtrl", function() {

		    it("should show a default message when no leauges found", inject(function($rootScope, $controller){
		    	var ctrl, scope = $rootScope.$new();
		    	ctrl = $controller("AllCtrl", { $scope: scope });
		       	expect(scope.message).toEqual("No leauges found");
		    })); 
		});

		describe("SwedishCtrl", function() {

		    it("should show a default message when no leauges found", inject(function($rootScope, $controller){
		    	var ctrl, scope = $rootScope.$new();
		    	ctrl = $controller("SwedishCtrl", { $scope: scope });
		       	expect(scope.message).toEqual("No Swedish leauges found");
		    }));

		     it("should update the message when it recieves data from the server", inject(function($rootScope, $controller, $httpBackend){
		    	var ctrl, scope = $rootScope.$new(), msg = "Allsvenskan & Division 1" ;
        		
		    	ctrl = $controller("SwedishCtrl", { $scope: scope });
        		$httpBackend.when("GET", BACKEND_URL + "/api/leagues/se").respond(msg);
		       	
		       	//Before getting data from server
		       	expect(scope.message).toEqual("No Swedish leauges found");
		       	
		       	$httpBackend.flush();
		       	
		       	//After data from server
		       	expect(scope.message).toEqual(msg);
		    }));
		});
	});

	describe("Services", function() {
		describe("LeaugeService", function() {
	    	var $injector = angular.injector([ 'demo' ]);
        	var leaugeService = $injector.get( 'leaugeService' );
   
		    it("should have functions for getting data", function(){
		    	expect(typeof leaugeService.getAll).toEqual('function');
		    	expect(typeof leaugeService.getSwedish).toEqual('function');
		    	expect(typeof leaugeService.getRaw).toEqual('function');
		    });

		    it("should expose a method that return mock data", function(){
		    	expect(leaugeService.getMockData()).toEqual('Allsvenskan, Division 1 Norra & Premier League');
		    });
		});
	});

	describe("Directives", function() {
		describe("Hitcounter", function() {
			var element, scope;

			  it("should display page hit numbers", inject(function($rootScope, $httpBackend, $compile){

			  	$httpBackend.when("GET", BACKEND_URL + "/api/counter").respond("12");
			  	scope = $rootScope.$new();

			    element = $compile('<hit-counter></hit-counter>')(scope);
			    scope.$digest();
				
				//No data before server call is finished
				expect(element[0].innerText).toBe("");

			  	$httpBackend.flush();

			  	//After there should be data
			  	expect(element[0].innerText).toBe("Number of visits: 12");
			  }));
		});
	});
});
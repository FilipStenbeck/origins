require('angular');
require('angular-mocks');

require('../../js/app');

describe("Frontend", function() {

    beforeEach(window.angular.mock.module("demo"))
  	
  	describe("Controllers", function() {

    	describe("AllCtrl", function() {
		    it("should have a default message for no leauges found", inject(function($rootScope, $controller){
		    	var ctrl, scope = $rootScope.$new();
		    	ctrl = $controller("AllCtrl", { $scope: scope });
		       	expect(scope.message).toEqual("No leauges found");
		    }));
		});

		describe("SwedishCtrl", function() {
		    it("should have a default message for no leauges found", inject(function($rootScope, $controller){
		    	var ctrl, scope = $rootScope.$new();
		    	ctrl = $controller("SwedishCtrl", { $scope: scope });
		       	expect(scope.message).toEqual("No Swedish leauges found");
		    }));
		});

	});

	describe("Services", function() {
		describe("LeaugeService", function() {
	    	var $injector = angular.injector([ 'demo' ]);
        	var leaugeService = $injector.get( 'leaugeService' );

		    it("should have a functions for getting data", function(){
		    	expect(typeof leaugeService.getAll).toEqual('function');
		    	expect(typeof leaugeService.getSwedish).toEqual('function');
		    	expect(typeof leaugeService.getRaw).toEqual('function');
		    });

		    it("should get mock data", function(){
		    	expect(leaugeService.getMockData()).toEqual('Allsvenskan, Division 1 Norra & Premier League');
		    });
		});
	});
});
'use strict';

require('angular');
require('angular-route');

require('angular').module('demo', ['ngRoute']).config(function ($routeProvider) {
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

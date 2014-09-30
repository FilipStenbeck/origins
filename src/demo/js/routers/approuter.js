'use strict';

require('angular');
require('angular-route');

require('angular').module('demo').config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'SwedishCtrl'
      })
      .when('/all', {
        templateUrl: 'templates/main.html',
        controller: 'AllCtrl'
      })
      .when('/raw', {
        templateUrl: 'templates/main.html',
        controller: 'RawCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

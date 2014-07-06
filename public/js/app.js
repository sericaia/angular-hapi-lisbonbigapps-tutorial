'use strict';


// Declare app level module which depends on filters, and services
angular.module('lisbonBigApp', [
  'ngRoute',
  'lisbonBigApp.filters',
  'lisbonBigApp.services',
  'lisbonBigApp.directives',
  'lisbonBigApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/itinerary', {templateUrl: 'partials/itinerary-list.html', 
		controller: 'ItineraryCtrl'});
  $routeProvider.when('/itinerary/:itineraryId', {templateUrl: 'partials/itinerary-detail.html', 
		controller: 'ItineraryDataCtrl'});
  $routeProvider.otherwise({redirectTo: '/itinerary'});
}]);

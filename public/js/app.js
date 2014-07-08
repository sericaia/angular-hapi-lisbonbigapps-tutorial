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
  $routeProvider.when('/itinerary', {
        templateUrl: 'partials/itinerary-one.html', 
		controller: 'ItineraryCtrl'});
  $routeProvider.when('/itinerary/:itineraryId', {
        templateUrl: 'partials/itinerary-detail.html', 
		controller: 'ItineraryDataCtrl'});
    
  /* other demos - in this example they use the same controller just bacause the data is equal */
  $routeProvider.when('/demo2', {
        templateUrl: 'partials/itinerary-two.html', 
		controller: 'ItineraryCtrl'});
    
  $routeProvider.when('/demo3', {
        templateUrl: 'partials/itinerary-three.html', 
		controller: 'ItineraryCtrl'});
    
  $routeProvider.when('/demo4', {
        templateUrl: 'partials/itinerary-four.html', 
		controller: 'ItineraryFourCtrl'});
    
  $routeProvider.when('/demo5', {
        templateUrl: 'partials/itinerary-five.html', 
		controller: 'ItineraryFiveCtrl'});
    
  $routeProvider.when('/demo6', {
        templateUrl: 'partials/itinerary-six.html', 
		controller: 'ItinerarySixCtrl'});    
    
  $routeProvider.otherwise({redirectTo: '/itinerary'});
}]);

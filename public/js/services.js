'use strict';

/* Services */

var appServices = angular.module('lisbonBigApp.services', []);

//simple service with a function
appServices.factory('ItineraryService', ['$http', function($http){
	function getItineraryList(){
		return $http({
			method: 'GET', 
			url: '/getitinerarylist'			
		});
	}
	
    return {
		getItineraryList : getItineraryList
	}
}]);

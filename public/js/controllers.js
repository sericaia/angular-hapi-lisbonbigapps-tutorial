'use strict';

/* Controllers */

angular.module('lisbonBigApp.controllers', [])
  .controller('ItineraryCtrl', ['$scope', function($scope) {

		$scope.itineraryList = [{"name":"Night in Lisbon", "kilometers":3},
								{"name":"City Centre", "kilometers":5},
								{"name":"Castle", "kilometers":2}, ]
  }])
  .controller('ItineraryDataCtrl', ['$scope', function($scope) {
		// TODO :: homework!
  }]);

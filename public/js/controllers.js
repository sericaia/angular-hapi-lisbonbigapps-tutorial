'use strict';

/* Controllers */

/* Aditional Recomendations:  
*   Please split your controllers through several different files. This is just a simple example.
*/

angular.module('lisbonBigApp.controllers', [])

  /* Disclaimer : the first three demos use this controller cause it just has a simple list */
  .controller('ItineraryCtrl', ['$scope', function($scope) {

		$scope.itineraryList = [{"name":"Night in Lisbon", "kilometers":3},
								{"name":"City Center", "kilometers":5},
								{"name":"Castle", "kilometers":2}]
  }])

  /* Demo 4 - SHOW  & HIDE */
  .controller('ItineraryFourCtrl', ['$scope', function($scope) {

		$scope.itineraryList = [{"name":"Night in Lisbon", "kilometers":3},
								{"name":"City Center", "kilometers":5},
								{"name":"Castle", "kilometers":2}]

        $scope.simulationActive = false;
                                
        $scope.toggleSimulation = function(){
                return  $scope.simulationActive = !$scope.simulationActive;        
                                
        }                        
                                
  }])

  /* Demo 5 - MANIPULATING STRUCTURES */   
  .controller('ItineraryFiveCtrl', ['$scope', function($scope) {
	
		$scope.itineraryList = [{"name":"Night in Lisbon", "kilometers":3},
								{"name":"City Center", "kilometers":5},
								{"name":"Castle", "kilometers":2}]
        
        $scope.addItinerary = function(){
            $scope.itineraryList.push({"name":$scope.name, "kilometers":$scope.kilometers});
        }      
        
        $scope.removeItinerary = function(itinerary){
            var index = $scope.itineraryList.indexOf(itinerary);
            $scope.itineraryList.splice(index,1);
        }
  }])


  /* Demo 6 - AJAX CALL */ 
  .controller('ItinerarySixCtrl', ['$scope', 'ItineraryService',function($scope, ItineraryService) {

		$scope.itineraryList = null;
     
        //get data from service
        ItineraryService.getItineraryList().then(function(result) {
            $scope.itineraryList  =  result.data;
            console.log(result.data)
	    });                  
  }])
  
  /* Aditional controller for '/itinerary/:itineraryId' route */ 
  .controller('ItineraryDataCtrl', ['$scope', function($scope) {
		// TODO :: homework
      
        // Hint: $routeParams must be included through dependency injection!
  }]);

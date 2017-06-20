'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:SceltafraseCtrl
 * @description
 * # SceltafraseCtrl
 * Controller of the lfsagAgApp
 */
angular.module('lfsagAgApp')
  .controller('SceltafraseCtrl', ['$scope', '$stateParams', '$http', '$q', '$location', 'sharedAmper', function($scope, $stateParams, $http, $q, $location, sharedAmper) {
    angular.element.noop($http, $q, $location, sharedAmper);
    $scope.nazioneP = $stateParams.nazioneP;
    $scope.areaP = $stateParams.areaP;
    $scope.piP = $stateParams.piP;
    $scope.locP = $stateParams.locP;
    $scope.locNumber = 0;

    $scope.gotoListen = function(struct){
      console.log(struct);//DEBUG
      $location.url('/map/' + $scope.nazioneP + '/' + $scope.areaP + '/' + $scope.piP + '/' + $scope.locP + '/' + struct);
    };

    var getNazioneDeferred = $q.defer();
    var getAreaDeferred = $q.defer();

    sharedAmper.getNazione($scope.nazioneP).then(function(jsonNazione){
      $scope.nazioneData = jsonNazione;
      $scope.areaLabel = jsonNazione.aree[$scope.areaP].label;
      console.log("done getNazione");
      getNazioneDeferred.resolve();
    });

    sharedAmper.getArea($scope.nazioneP, $scope.areaP).then(function(jsonArea){
      $scope.areaData = jsonArea;
      console.log("done getArea");
      getAreaDeferred.resolve();

      if ($scope.piP && $scope.areaData.cities.hasOwnProperty($scope.piP)){
        $scope.locutori =  $scope.areaData.cities[$scope.piP].locutori;

        var locNumberTemp = 0;
        for (var locutore in $scope.locutori){
          locNumberTemp++;
          if (locutore === $scope.locP){
            $scope.locNumber = locNumberTemp;
            break;
          }
        }
      }
    });


    $q.all([getNazioneDeferred.promise, getAreaDeferred.promise]).then(
      function() {
        $scope.Status1 = 'Done';
        for(var piId in $scope.areaData.cities){
          if ($scope.areaData.cities[piId].active){
            angular.element("svg .pigroup." + piId).addClass("active");
          }
          if (piId === $scope.piP){
            $scope.piPselected = $scope.piLabel = $scope.areaData.cities[piId].label;
          }
        }
      },
      function() {
        $scope.Status1 = 'Failed';
      }
    ).finally(function() {
      $scope.Status2 = 'Done waiting';

    });
  }]);

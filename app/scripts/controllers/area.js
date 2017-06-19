'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:AreaCtrl
 * @description
 * # AreaCtrl
 * Controller of the lfsagAgApp
 */
angular.module('lfsagAgApp')
  .controller('AreaCtrl', ['$scope', '$stateParams', '$http', '$q', 'sharedAmper', function($scope, $stateParams, $http, $q, sharedAmper) {
    $scope.nazioneP = $stateParams.nazioneP;
    $scope.areaP = $stateParams.areaP;
    $scope.piP = $stateParams.piP;
    $scope.svgLoaded = false;
    $scope.piLabel = "";
    $scope.setPiLabel = function(label){
      $scope.piLabel = label;
    };
    $scope.locutori= [];

    var svgLoadDeferred = $q.defer();
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
      }
    });

    $scope.svgLoaded = function() {
      sharedAmper.getNazione($scope.nazioneP).then(function () {
        console.log("svg loaded");
        $scope.svgLoaded = true;
        svgLoadDeferred.resolve();
      });
    };

    $q.all([svgLoadDeferred.promise, getNazioneDeferred.promise, getAreaDeferred.promise]).then(
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

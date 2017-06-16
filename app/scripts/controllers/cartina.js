'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:CartinaCtrl
 * @description
 * # CartinaCtrl
 * Controller of the lfsagAgApp
 */

angular.module('lfsagAgApp')
  .controller('CartinaCtrl', ['$scope', '$stateParams', '$http', '$q', 'sharedAmper', function($scope, $stateParams, $http, $q, sharedAmper) {
    $scope.nazioneP = $stateParams.nazioneP;
    $scope.svgLoaded = false;
    $scope.areaLabel = "";
    $scope.setAreaLabel = function(label){
      $scope.areaLabel = label;
    };

    var svgLoadDeferred = $q.defer();
    var getDataDeferred = $q.defer();

    sharedAmper.getNazione($scope.nazioneP).then(function(jsonNazione){
      $scope.nazioneData = jsonNazione;
      console.log("done getNazione");
      getDataDeferred.resolve();
    });

    $scope.svgLoaded = function() {
      sharedAmper.getNazione($scope.nazioneP).then(function () {
        console.log("svg loaded");
        $scope.svgLoaded = true;
        svgLoadDeferred.resolve();
      });
    };

    $q.all([svgLoadDeferred.promise, getDataDeferred.promise]).then(
      function() {
        $scope.Status1 = 'Done';
        for(var areaId in $scope.nazioneData.aree){
          if ($scope.nazioneData.aree[areaId].active){
            angular.element("svg .areagroup." + areaId).addClass("active");
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
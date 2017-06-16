'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:AreaCtrl
 * @description
 * # AreaCtrl
 * Controller of the lfsagAgApp
 */
angular.module('lfsagAgApp')
  .controller('AreaCtrl', ['$scope', '$stateParams', '$http', 'sharedAmper', function($scope, $stateParams, $http, sharedAmper) {
    $scope.nazioneP = $stateParams.nazioneP;
    $scope.areaP = $stateParams.areaP;
    sharedAmper.getNazione($scope.nazioneP).then(function(jsonNazione){
      $scope.nazioneData = jsonNazione;
      sharedAmper.getArea($scope.nazioneP, $scope.areaP).then(function(jsonArea){
        $scope.areaData = jsonArea;
      });
    });

  }]);

'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:CartinaCtrl
 * @description
 * # CartinaCtrl
 * Controller of the lfsagAgApp
 */

angular.module('lfsagAgApp')
  .controller('CartinaCtrl', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
    $scope.nazione =  $stateParams.nazione;
    $scope.bubu = "bubu";

    $http.get('/files/json/' + $scope.nazione + '.json')
      .then(function (data) {
        $scope.jsonData = data.data;
        $scope.nazioneLabel = $scope.jsonData.label;
        //$scope.leggendaFilename = $scope.jsonData.leggendaFilename;
      },function (data) {
        console.log("there was an error:", data);
    });
  }]);
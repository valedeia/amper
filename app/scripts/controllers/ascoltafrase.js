'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:AscoltafraseCtrl
 * @description
 * # AscoltafraseCtrl
 * Controller of the lfsagAgApp
 */
angular.module('lfsagAgApp')
  .controller('AscoltafraseCtrl', ['$scope', '$stateParams', '$http', '$q', '$location', 'sharedAmper', function($scope, $stateParams, $http, $q, $location, sharedAmper) {
    angular.element.noop($http, $q, $location, sharedAmper);
    $scope.nazioneP = $stateParams.nazioneP;
    $scope.areaP = $stateParams.areaP;
    $scope.piP = $stateParams.piP;
    $scope.locP = $stateParams.locP;
    $scope.structP = $stateParams.structP;
    $scope.structSaved = sharedAmper.getStructData($scope.structP);
    $scope.locNumber = 0;


    var getNazioneDeferred = $q.defer();
    var getAreaDeferred = $q.defer();
    var getGruppoFrasiDeferred = $q.defer();

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
    });

    sharedAmper.getGruppoFrasi().then(function(jsonGruppoFrasi){
      $scope.gruppoFrasiData = jsonGruppoFrasi;
      console.log("done getGruppoFrasi");
      getGruppoFrasiDeferred.resolve();
    });


    $q.all([getNazioneDeferred.promise, getAreaDeferred.promise, getGruppoFrasiDeferred.promise]).then(
      function() {
        $scope.Status1 = 'Done';
        for(var piId in $scope.areaData.cities){
          if (piId === $scope.piP){
            $scope.piPselected = $scope.piLabel = $scope.areaData.cities[piId].label;
          }
        }
        if ($scope.piP && $scope.areaData.cities.hasOwnProperty($scope.piP)){
          $scope.locutori =  $scope.areaData.cities[$scope.piP].locutori;

          /*$scope.frase =  $scope.areaData.cities[$scope.piP].frase;
           $scope.trascrizione =  $scope.areaData.cities[$scope.piP].trascrizione; */

          var locNumberTemp = 0;
          for (var locutore in $scope.locutori){
            locNumberTemp++;
            if (locutore === $scope.locP){
              $scope.locutore = $scope.locutori[$scope.locP];
              $scope.locNumber = locNumberTemp;
              break;
            }
          }
        }
        if ($scope.locutore){
          var fraseObj = $scope.gruppoFrasiData[$scope.locutore.gruppofrase][$scope.structP];
          $scope.frase = fraseObj.frase;
          $scope.trascrizione = fraseObj.trascrizione;
          $scope.fraseVisualizzata = fraseObj.frase;
          
        }

      },
      function() {
        $scope.Status1 = 'Failed';
      }
    ).finally(function() {
      $scope.Status2 = 'Done waiting';

    });
  }]);

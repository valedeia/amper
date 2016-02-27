'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lfsagAgApp
 */

var annunci = [
    {
        "titolo": "Chiusura",
        "messaggio": "Laboratorio resterà chiuso per le vacanze."
    },
    {
        "titolo": "Manutenzione sito",
        "messaggio": "Il sito è chiuso per manutenzione straordinaria."
    }

];

angular.module('lfsagAgApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

      this.annunci = annunci;

    $scope.getClass = function (path) {
      //if ($location.path().substr(0, path.length) === path) {
      if ($location.path() === path) {
        return 'active';
      } else {
        return '';
      }
    };
  }]);

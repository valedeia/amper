'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the lfsagAgApp
 */
angular.module('lfsagAgApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.getClass = function (path) {
      //if ($location.path().substr(0, path.length) === path) {
      if ($location.path() === path) {
        return 'active';
      } else {
        return '';
      }
    }
  }]);

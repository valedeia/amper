'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:locicon
 * @description
 * # locicon
 */
angular.module('lfsagAgApp')
  .directive('locicon', function () {

    var locMap = {
      "1": {
        "speaker": "C",
        "age": "H",
        "sex": "F"
      },
      "2": {
        "speaker": "C",
        "age": "H",
        "sex": "M"
      },
      "3": {
        "speaker": "C",
        "age": "L",
        "sex": "F"
      },
      "4": {
        "speaker": "C",
        "age": "L",
        "sex": "M"
      },
      "5": {
        "speaker": "I",
        "age": "H",
        "sex": "F"
      },
      "6": {
        "speaker": "I",
        "age": "H",
        "sex": "M"
      },
      "7": {
        "speaker": "I",
        "age": "L",
        "sex": "F"
      },
      "8": {
        "speaker": "I",
        "age": "L",
        "sex": "M"
      }
    };

    return {
      templateUrl: 'files/templates/template_locicon.html',
      restrict: 'E',
      scope: {
        locId: '='
      },
      link: function postLink(scope) {
        var locTypeV = scope.locId.toString().slice(-1);
        //console.log(scope.locId);//DEBUG
        //console.log(locTypeV);//DEBUG
        if (locMap.hasOwnProperty(locTypeV)) {
          scope.locType = locMap[locTypeV];
        }
      }
    };
  });

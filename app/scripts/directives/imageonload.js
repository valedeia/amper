'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:imageonload
 * @description
 * # imageonload
 */
angular.module('lfsagAgApp')
  .directive('imageonload', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        element.bind('load', function() {
          scope.$apply(attrs.imageonload)(true);
        });
        element.bind('error', function(){
          scope.$apply(attrs.imageonload)(false);
        });
      }
    };
  });

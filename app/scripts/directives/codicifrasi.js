'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:codicifrasi
 * @description
 * # codicifrasi
 */
angular.module('lfsagAgApp')
  .directive('codicifrasi', function () {
    return {
      template: '<div class="codicefrase"></div>',
      restrict: 'E',
      scope: {
        type: '=type',
        value: '=value',
        syntax: '@syntax',
        blocked: '=blocked'
      },
      link: function postLink(scope, element) {     //attrs
        var destDiv = element.find("div.codicefrase");
        element.append("<span> codicifrasi: type=" + scope.type + " value=" + scope.value + " blocked=" + scope.blocked + "</span>");
        var cells = scope.type.toString().split('');
        var syntax = scope.syntax.toString().split('');
        var values = scope.value.toString().split('');
        for (var i=0; i<cells.length; i++) {
          //var pos = i + 1;
          var cellCount = parseInt(cells[i]);
          console.log("cellCount: " + cellCount);
          var cssClass = syntax[i];
          var contenitore = angular.element('<div class="syntax ' + cssClass + '"></div>').appendTo(destDiv);
          for (var k=0; k<cellCount; k++){
            console.log("here");
            console.log("cellCount: " + cellCount);
            var isActive = (parseInt(values[i]) === k+1) ? "active" : "";
            contenitore.append('<span class="' + isActive + '"></span>');
          }
        }
      }
    };
  });

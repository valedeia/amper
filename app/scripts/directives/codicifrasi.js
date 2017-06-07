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

        function calculateValue(){
          var valueA = [];
          angular.element(element).find("div.syntax").each(function(index, el) {
            var idx = angular.element(el).find("span.active").index();
            if (idx !== -1) {
              valueA.push(idx + 1);
            }
          });
          scope.value = valueA.join("");
          console.log(valueA.join(""));
          angular.element(element).find("span.debug1").text("codicifrasi: type=" + scope.type + " value=" + scope.value + " blocked=" + scope.blocked);
        }

        var destDiv = element.find("div.codicefrase");
        element.append("<span class=\"debug1\"> codicifrasi: type=" + scope.type + " value=" + scope.value + " blocked=" + scope.blocked + "</span>");
        var cells = scope.type.toString().split('');
        var syntax = scope.syntax.toString().split('');
        var values = scope.value.toString().split('');
        var blocked = scope.blocked.toString().split('');
        for (var i=0; i<cells.length; i++) {
          var cellCount = parseInt(cells[i]);
          var usable = (blocked.indexOf((i+1).toString()) !== -1) ? "blocked" : "usable";
          var cssClass = syntax[i] + " " + usable;
          var contenitore = angular.element('<div class="syntax ' + cssClass + '"></div>').appendTo(destDiv);
          for (var k=0; k<cellCount; k++){
            var isActive = (parseInt(values[i]) === k+1) ? "active" : "";
            contenitore.append('<span class="' + isActive + '"></span>');
          }
        }

        element.on("click", "div.syntax.usable > span:not(active)", function(){
          angular.element(this).parent().find("span").removeClass("active");
          angular.element(this).addClass("active");
          calculateValue();
        });
      }
    };
  });

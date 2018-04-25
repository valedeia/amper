'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:codicifrasi
 * @description
 * # codicifrasi
 */
angular.module('lfsagAgApp')
  .directive('codicifrasi', function () {

    var structMap = {
      "214": "pwk",
      "213": "pwt",
      "212": "pwp",
      "2143": "pwg",
      "2142": "pwx",
      "2141": "pwj",
      "2133": "pwd",
      "2132": "pws",
      "2131": "pwz",
      "2123": "pwb",
      "2122": "pwf",
      "2121": "pwv",
      "2314": "bwk",
      "2313": "bwt",
      "2312": "bwp",
      "2214": "fwk",
      "2213": "fwt",
      "2212": "fwp",
      "2114": "vwk",
      "2113": "vwt",
      "2112": "vwp"
    };//FIXME: da cambiare con factory sharedamper

    return {
      template: '<div class="codicefrase"><div class="struct"></div><div ng-if="goto" class="listen"><img src="images/amper/audio_ombra.svg" ng-click="gotoListen(struct)"/></div></div>',
      restrict: 'E',
      scope: {
        type: '=',
        value: '=',
        syntax: '=',
        blocked: '=',
        firstCellBlocked: '=',
        goto: '=',
        gotoListen: '='
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
          if (structMap.hasOwnProperty(scope.value)){
            scope.struct = structMap[scope.value];
          }
          console.log(valueA.join(""));
          angular.element(element).find("span.debug1").text("codicifrasi: type=" + scope.type + " value=" + scope.value + " struct=" + scope.struct + " blocked=" + scope.blocked);
        }

        var destDiv = element.find("div.struct");
        element.append("<span class=\"debug1\"></span>");
        var cells = scope.type.toString().split('');
        var syntax = scope.syntax.toString().split('');
        var values = scope.value.toString().split('');
        var blocked = scope.blocked.toString().split('');
        var firstCellBlocked = scope.firstCellBlocked.toString().split('');
        for (var i=0; i<cells.length; i++) {
          var cellCount = parseInt(cells[i]);
          var usable = (blocked.indexOf((i+1).toString()) !== -1) ? "blocked" : "usable";
          var cssClass = syntax[i] + " " + usable;
          var contenitore = angular.element('<div class="syntax ' + cssClass + '"></div>').appendTo(destDiv);
          for (var k=0; k<cellCount; k++){
            var isActive = (parseInt(values[i]) === k+1) ? "active" : "";
            var isBlocked = (firstCellBlocked.indexOf((i+1).toString()) !== -1 && k === 0) ? " blocked" : "";
            contenitore.append('<span class="' + isActive + isBlocked + '"></span>');
          }
        }
        calculateValue();

        element.on("click", "div.syntax.usable > span:not(.active, .blocked)", function(){
          angular.element(this).parent().find("span").removeClass("active");
          angular.element(this).addClass("active");
          calculateValue();
        });
      }
    };
  });

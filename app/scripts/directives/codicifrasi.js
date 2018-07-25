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
      "2112": "vwp",
      "314": "twk",
      "313": "twt",
      "312": "twp",
      "3143": "twg",
      "3142": "twx",
      "3141": "twj",
      "3133": "twd",
      "3132": "tws",
      "3131": "twz",
      "3123": "twb",
      "3122": "twf",
      "3121": "twv",
      "3314": "dwk",
      "3313": "dwt",
      "3312": "dwp",
      "3214": "swk",
      "3213": "swt",
      "3212": "swp",
      "3114": "zwk",
      "3113": "zwt",
      "3112": "zwp",
      "414": "kwk",
      "413": "kwt",
      "412": "kwp",
      "4143": "kwg",
      "4142": "kwx",
      "4141": "kwj",
      "4133": "kwd",
      "4132": "kws",
      "4131": "kwz",
      "4123": "kwb",
      "4122": "kwf",
      "4121": "kwv",
      "4314": "gwk",
      "4313": "gwt",
      "4312": "gwp",
      "4214": "xwk",
      "4213": "xwt",
      "4212": "xwp",
      "4114": "jwk",
      "4113": "jwt",
      "4112": "jwp"
    };
//FIXME: da cambiare con factory sharedamper

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

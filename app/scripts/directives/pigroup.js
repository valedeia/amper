'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:pigroup
 * @description
 * # pigroup
 */
angular.module('lfsagAgApp')
  .directive('pigroup', ['$location', function (location) {
    return {
      restrict: 'C',
      link: function postLink(scope, element) {      //attrs

        if (scope.piP) {
          angular.element("svg circle.pigroup." + scope.piP).addClass("selected");
          angular.element("svg circle.pigroup").not("." + scope.piP).removeClass("selected");
        }

        element.on("mouseover", function () {
          //console.log("mouseover");//DEBUG
          //var elId = element.attr("id") || "";
          //var elClass = angular.element(this).attr("class") || "";
          //console.log("class: " + elClass);//DEBUG
          var picode = element.attr("picode") || "";
          if (picode && scope.areaData.cities.hasOwnProperty(picode)){
            scope.setPiOverLabel(scope.areaData.cities[picode].label || "");
            scope.$apply();
          }
        
          angular.element(this).stop().fadeTo(400,1);
          angular.element("svg circle.pigroup").not(this).stop().fadeTo(400, 0.4);
        });
        element.on("mouseout", function () {
          //console.log("mouseover svg");//DEBUG
          var piSelectedLabel = (scope.piP) ? scope.piPselected : "";
          scope.setPiOverLabel(piSelectedLabel);
          scope.$apply();
          angular.element("svg").find("circle.pigroup").stop().fadeTo(400,1);
        });
        element.on("click", function () {
          if (angular.element(this).hasClass("active")){
            console.log("svg pi active click");//DEBUG
            var picode = element.attr("picode") || "";
            if (picode && scope.areaData.cities.hasOwnProperty(picode)){
              var shortName = picode; //scope.nazioneData.aree[picode].shortName;
              scope.$apply(function(){
                location.url('/map/' + scope.nazioneP + '/' + scope.areaP + '/' + shortName);
              });
            }
          }
        });
      }
    };
  }]);

'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:pirect
 * @description
 * # pirect
 */
angular.module('lfsagAgApp')
  //.directive('areagroup', ['$compile', '$templateRequest', '$sce', function ($compile, $templateRequest, $sce) {
  .directive('areagroup', ['$location', function (location) {

    //var templateUrl = $sce.getTrustedResourceUrl('files/ampere/template_view.html');
    //var template = "<div>{{ampereData.%paese%.trascrizione}}</div>";

    return {
      restrict: 'C',
      link: function postLink(scope, element) {      //attrs
        element.on("mouseover", function () {
          //console.log("mouseover");//DEBUG
          //var elId = element.attr("id") || "";
          //var elClass = angular.element(this).attr("class") || "";
          //console.log("class: " + elClass);//DEBUG
          var areacode = element.attr("areacode") || "";
          if (areacode && scope.nazioneData.aree.hasOwnProperty(areacode)){
            scope.setAreaLabel(scope.nazioneData.aree[areacode].label || "");
            scope.$apply();
          }

          angular.element(this).stop().fadeTo(400,1);
          angular.element("svg g.areagroup").not(this).stop().fadeTo(400, 0.2);
        });
        element.on("mouseout", function () {
          //console.log("mouseover svg");//DEBUG
          scope.setAreaLabel("");
          scope.$apply();
          angular.element("svg").find("g.areagroup").stop().fadeTo(400,1);
        });
        element.on("click", function () {
          if (angular.element(this).hasClass("active")){
            console.log("svg area active click");//DEBUG
            var areacode = element.attr("areacode") || "";
            if (areacode && scope.nazioneData.aree.hasOwnProperty(areacode)){
              var shortName = areacode; //scope.nazioneData.aree[areacode].shortName;
              scope.$apply(function(){
                location.url('/map/' + scope.nazioneP + '/' + shortName);
              });
            }
          }
        });
      }
    };
  }]);
  //}]);

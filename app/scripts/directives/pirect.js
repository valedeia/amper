'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:pirect
 * @description
 * # pirect
 */
angular.module('lfsagAgApp')
  .directive('pirect', ['$compile', function ($compile) {

    var template = "<div>{{ampereData.%paese%.frase}}</div>";

    return {
      restrict: 'C',
      link: function postLink(scope, element) {      //attrs
        element.on("click", function(){
          console.log("test");//DEBUG
          var elId = element.attr("id") || "";
          var paese = elId.replace("pi-", "");
          //scope.$parent.showdiv();
          scope.$apply(function() {
            var compiledeHTML = $compile(template.replace("%paese%", paese))(scope);
            console.log("test2");//DEBUG
            angular.element.fancybox(compiledeHTML);
          });
        });
      }
    };
  }]);
'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:pirect
 * @description
 * # pirect
 */
angular.module('lfsagAgApp')
  .directive('pirect', ['$compile', '$templateRequest', '$sce', function ($compile, $templateRequest, $sce) {

    var templateUrl = $sce.getTrustedResourceUrl('files/ampere/template_view.html');
    //var template = "<div>{{ampereData.%paese%.trascrizione}}</div>";

    return {
      restrict: 'C',
      link: function postLink(scope, element) {      //attrs
        element.on("click", function(){
          console.log("test");//DEBUG
          var elId = element.attr("id") || "";
          var paese = elId.replace("pi-", "");
          console.log("paese: " + paese);//DEBUG
          //scope.$parent.showdiv();
          scope.$apply(function() {
            $templateRequest(templateUrl).then(function(template) {
              // template is the HTML template as a string
              console.log("test2");//DEBUG
              console.log("paese: " + paese);//DEBUG
              var templateCleaned = template.replace(new RegExp('%paese%', 'mg'), paese);
              console.log(templateCleaned);
              var compiledHTML = $compile(templateCleaned)(scope);
              console.log("test3");//DEBUG
              angular.element.fancybox({
                margin          : [50, 20, 20, 20],
                width		    : '100%',
                height		    : '100%',
                minWidth		: '100%',
                minheight		: '100%',
                type: "html",
                content: compiledHTML
              });
            }, function() {
              console.error("load template error");
            });

          });
        });
      }
    };
  }]);

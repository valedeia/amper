'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:pirect
 * @description
 * # pirect
 */
angular.module('lfsagAgApp')
  //.directive('svgtest', ['$compile', '$templateRequest', '$sce', function ($compile, $templateRequest, $sce) {
  .directive('svgtest', function () {

    //var templateUrl = $sce.getTrustedResourceUrl('files/ampere/template_view.html');
    //var template = "<div>{{ampereData.%paese%.trascrizione}}</div>";

    return {
      restrict: 'C',
      link: function postLink(scope, element) {      //attrs
        element.on("mouseover", function () {
          console.log("mouseover");//DEBUG
          //var elId = element.attr("id") || "";
          var elClass = angular.element(this).attr("class") || "";
          console.log("class: " + elClass);//DEBUG
          angular.element(this).stop().fadeTo(400,1);
          angular.element("svg g.svgtest").not(this).stop().fadeTo(400, 0.2);
          /*
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

           }); */
        });
        element.on("mouseout", function () {
          console.log("mouseover svg");//DEBUG
          angular.element("svg").find("g.svgtest").stop().fadeTo(400,1);
          /*
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

           }); */
        });
      }
    };
  });
  //}]);

'use strict';

/**
 * @ngdoc directive
 * @name lfsagAgApp.directive:imgpopup1
 * @description
 * # imgpopup1
 */
angular.module('lfsagAgApp')
  .directive('imgpopup1', function () {
    return {
      restrict: 'C',
      scope: {
        imgname: '@'
      },
      link: function postLink(scope, element) {      //attrs
        angular.element(element).click(function(){
          console.log("click imgname" + scope.imgname);//DEBUG
          angular.element.fancybox("images/laboratorio/" + scope.imgname);
        });
      }
    };
  });

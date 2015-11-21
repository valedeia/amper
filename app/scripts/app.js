'use strict';

/**
 * @ngdoc overview
 * @name lfsagAgApp
 * @description
 * # lfsagAgApp
 *
 * Main module of the application.
 */
angular
  .module('lfsagAgApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    // uncomment to use the HTML5 History API
    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/equipe', {
        templateUrl: 'views/equipe.html',
        controller: 'EquipeCtrl',
        controllerAs: 'equipe'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

(function($){
  $(document).ready(function(){
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
  });
})(jQuery);

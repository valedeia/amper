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
    'ngTouch',
    'ui.bootstrap',
    'angular-jqcloud'
  ])
  .config(function ($routeProvider) { //$locationProvider
    // uncomment to use the HTML5 History API
    //$locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/guida', {
        templateUrl: 'views/guida.html',
        controller: 'GuidaCtrl',
        controllerAs: 'guida'
      })
      .when('/carte', {
        templateUrl: 'views/carte.html',
        controller: 'CarteCtrl',
        controllerAs: 'carte'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html'
      }).when('/contatti', {
        templateUrl: 'views/contatti.html'
      })
      /*.when('/laboratorio/comitato', {
        templateUrl: 'views/comitato.html',
        controller: 'ComitatoCtrl',
        controllerAs: 'comitato'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html'
      })
      .when('/materiali/didattica', {
        templateUrl: 'views/didattica.html',
        controller: 'DidatticaCtrl',
        controllerAs: 'didattica'
      })
      .when('/materiali/inventari-sonori', {
        templateUrl: 'views/inventari-sonori.html',
        controller: 'InventarisonoriCtrl',
        controllerAs: 'inventarisonori'
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
      })     */
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
})(angular.element);

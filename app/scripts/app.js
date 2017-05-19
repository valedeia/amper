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
    'angular-jqcloud',
    'ui.router',
    'ncy-angular-breadcrumb'
  ])

  .config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
      prefixStateName: 'home',
      template: 'bootstrap2'
    });
  })

  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $locationProvider.hashPrefix('');

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        ncyBreadcrumb: {
          label: 'Home page'
        }
      })
      .state('guida', {
        url: '/guida',
        templateUrl: 'views/guida.html',
        controller: 'GuidaCtrl',
        controllerAs: 'guida',
        ncyBreadcrumb: {
          label: 'Guida'
        }
      })
      .state('sample', {
        url: '/sample',
        templateUrl: 'views/sample.html',
        ncyBreadcrumb: {
          label: 'Sample'
        }
      })
      .state('booking', {
        url: '/booking',
        templateUrl: 'views/booking_list.html',
        controller: 'BookingListCtrl',
        ncyBreadcrumb: {
          label: 'Reservations',
          parent: 'sample'
        }
      })
      .state('booking.day', {
        url: '/:year-:month-:day',
        templateUrl: 'views/booking_day.html',
        controller: 'BookingDayCtrl',
        onExit: function($rootScope) {
          $rootScope.reservationDate = undefined;
        },
        ncyBreadcrumb: {
          label: 'Reservations for {{reservationDate | date:\'mediumDate\'}}'
        }
      })
      .state('booking.day.detail', {
        url: '/{reservationId}',
        onEnter: function($stateParams, $state, $modal) {
          $modal.open({
            templateUrl: "views/booking_detail.html",
            controller: 'BookingDetailCtrl'
          }).result.then(function() {
            return $state.go("^");
          }, function() {
            return $state.go("^");
          });
        },
        ncyBreadcrumb: {
          skip: true
        }
      })
      .state('room', {
        url: '/room',
        templateUrl: 'views/room_list.html',
        controller: 'RoomListCtrl',
        ncyBreadcrumb: {
          label: 'Rooms',
          parent: 'sample'
        }
      })
      .state('room.new', {
        url: '/new',
        views: {
          "@" : {
            templateUrl: 'views/room_form.html',
            controller: 'RoomDetailCtrl'
          }
        },
        ncyBreadcrumb: {
          label: 'New room'
        }
      })
      .state('room.detail', {
        url: '/{roomId}?from',
        views: {
          "@" : {
            templateUrl: 'views/room_detail.html',
            controller: 'RoomDetailCtrl'
          }
        },
        ncyBreadcrumb: {
          label: 'Room {{room.roomNumber}}',
          parent: function ($scope) {
            return $scope.from || 'room';
          }
        }
      })
      .state('room.detail.edit', {
        url: '/edit',
        views: {
          "@" : {
            templateUrl: 'views/room_form.html',
            controller: 'RoomDetailCtrl'
          }
        },
        ncyBreadcrumb: {
          label: 'Editing'
        }
      });

  })
  .value('rooms', [
    {roomId: 1, roomNumber: 101, type: 'Double'},
    {roomId: 2, roomNumber: 102, type: 'Double'},
    {roomId: 3, roomNumber: 103, type: 'Single'},
    {roomId: 4, roomNumber: 104, type: 'Double'}
  ])
  .factory('reservations', function(dateUtils) {
    return [
      {reservationId: 1, guestName: 'Robert Smith', roomId: '2', from: dateUtils.addDays(-1), nights: 3},
      {reservationId: 2, guestName: 'John Doe', roomId: '3', from: dateUtils.addDays(-8), nights: 5},
      {reservationId: 3, guestName: 'William Gordon', roomId: '1', from: dateUtils.addDays(3), nights: 6},
      {reservationId: 4, guestName: 'Michael Robinson', roomId: '2', from: dateUtils.addDays(6), nights: 2},
      {reservationId: 5, guestName: 'Tracy Marschall', roomId: '3', from: dateUtils.addDays(12), nights: 1}
    ];
  })
  .factory('dateUtils', function() {
    return {
      addDays: function(days, date) {
        if(!date) {
          var todayTime = new Date();
          todayTime.setHours(0,0,0,0);
          date = new Date(todayTime);
        }

        var newDate = new Date(date);
        newDate.setDate(date.getDate() + days);
        return newDate;
      }
    };
  })
  .run(function($rootScope, $state) {
    $rootScope.isActive = function(stateName) {
      return $state.includes(stateName);
    };

    $rootScope.getLastStepLabel = function() {
      return 'Angular-Breadcrumb';
    };
  });

  /*.config(function ($routeProvider, $urlRouterProvider,$locationProvider) { //$locationProvider
    // uncomment to use the HTML5 History API
    //$locationProvider.html5Mode(true);

    $locationProvider.hashPrefix('');

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        ncyBreadcrumb: {
          label: 'Home page'
        }
      })
      .when('/guida', {
        templateUrl: 'views/guida.html',
        controller: 'GuidaCtrl',
        controllerAs: 'guida',
        ncyBreadcrumb: {
          label: 'Guida'
        }
      })
      .when('/carte', {
        templateUrl: 'views/carte.html',
        controller: 'CarteCtrl',
        controllerAs: 'carte'
      })
      .when('/carte_old', {
        templateUrl: 'views/carte_old.html',
        controller: 'CarteCtrl',
        controllerAs: 'carteold'
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
      /*.otherwise({
        redirectTo: '/'
      });
  });            */

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

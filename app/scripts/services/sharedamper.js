'use strict';

/**
 * @ngdoc service
 * @name lfsagAgApp.sharedAmper
 * @description
 * # sharedAmper
 * Service in the lfsagAgApp.
 */
angular.module('lfsagAgApp')
  .factory('sharedAmper', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
   /* var nazione = '';
    var objectValue = {
      data: 'test object value'
    };*/

    var promiseNazione;
    var sharedAmper = {
      "getNazione": function (nazione) {
        if (!promiseNazione) {
          promiseNazione = $http.get('files/json/' + nazione + '.json')
            .then(function (response) {
              // The then function here is an opportunity to modify the response
              console.log(response);
              // The return value gets picked up by the then in the controller.
              return response.data;
            }, function (data) {
              console.error("there was an error:", data);
              return {};
            });
        }
        return promiseNazione;
      }, "getArea": function (nazione, area) {
        return $http.get('files/json/' + nazione + '_' + area + '.json')
          .then(function (response) {
            // The then function here is an opportunity to modify the response
            console.log(response);
            // The return value gets picked up by the then in the controller.
            return response.data;
          },function (data) {
            console.error("there was an error:", data);
            return {};
          });
      }
    };

    return sharedAmper;

    /*return {
      getNazione: function() {
        return nazione;
      },
      setNazione: function(value) {
        nazione = value;
      },
      getObject: function() {
        return objectValue;
      }
    };*/

  });

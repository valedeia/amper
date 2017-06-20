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
    var nomeNazione="";
    var promiseArea;
    var promiseGruppoFrasi;
    var nomeArea="";

    var structMap = {
      "414": "pwk",
      "413": "pwt",
      "412": "pwp",
      "4143": "pwg",
      "4142": "pwx",
      "4141": "pwj",
      "4133": "pwd",
      "4132": "pws",
      "4131": "pwz",
      "4123": "pwb",
      "4122": "pwf",
      "4121": "pwv",
      "4314": "bwk",
      "4313": "bwt",
      "4312": "bwp",
      "4214": "fwk",
      "4213": "fwt",
      "4212": "fwp",
      "4114": "vwk",
      "4113": "vwt",
      "4112": "vwp"
    };

    var structMapInverse = {
      "pwk" : {
        "type": "424",
        "val": "414",
        "syntax": "SVO"
      },
      "pwt" : {
        "type": "424",
        "val": "413",
        "syntax": "SVO"
      },
      "pwp" : {
        "type": "424",
        "val": "412",
        "syntax": "SVO"
      },
      "pwg" : {
        "type": "4243",
        "val": "4143",
        "syntax": "SVOO"
      },
      "pwx" : {
        "type": "4243",
        "val": "4142",
        "syntax": "SVOO"
      },
      "pwj" : {
        "type": "4243",
        "val": "4141",
        "syntax": "SVOO"
      },
      "pwd" : {
        "type": "4243",
        "val": "4133",
        "syntax": "SVOO"
      },
      "pws" : {
        "type": "4243",
        "val": "4132",
        "syntax": "SVOO"
      },
      "pwz" : {
        "type": "4243",
        "val": "4131",
        "syntax": "SVOO"
      },
      "pwb" : {
        "type": "4243",
        "val": "4123",
        "syntax": "SVOO"
      },
      "pwf" : {
        "type": "4243",
        "val": "4122",
        "syntax": "SVOO"
      },
      "pwv" : {
        "type": "4243",
        "val": "4121",
        "syntax": "SVOO"
      },
      "bwk" : {
        "type": "4324",
        "val": "4314",
        "syntax": "SSVO"
      },
      "bwt" : {
        "type": "4324",
        "val": "4313",
        "syntax": "SSVO"
      },
      "bwp" : {
        "type": "4324",
        "val": "4312",
        "syntax": "SSVO"
      },
      "fwk" : {
        "type": "4324",
        "val": "4214",
        "syntax": "SSVO"
      },
      "fwt" : {
        "type": "4324",
        "val": "4213",
        "syntax": "SSVO"
      },
      "fwp" : {
        "type": "4324",
        "val": "4212",
        "syntax": "SSVO"
      },
      "vwk" : {
        "type": "4324",
        "val": "4114",
        "syntax": "SSVO"
      },
      "vwt" : {
        "type": "4324",
        "val": "4113",
        "syntax": "SSVO"
      },
      "vwp" : {
        "type": "4324",
        "val": "4112",
        "syntax": "SSVO"
      }
    };

    angular.element.noop(structMap);

    var sharedAmper = {
      "getNazione": function (nazione) {
        if (!promiseNazione || nomeNazione !== nazione) {
          promiseNazione = $http.get('files/json/nazioni/' + nazione + '.json')
            .then(function (response) { // The then function here is an opportunity to modify the response
              //console.log(response); // The return value gets picked up by the then in the controller.
              return response.data;
            }, function (data) {
              console.error("there was an error:", data);
              return {};
            });
        }
        return promiseNazione;
      }, "getArea": function (nazione, area) {
        if (!promiseArea || nomeNazione !== nazione || nomeArea !== area) {
          promiseArea = $http.get('files/json/nazioni/' + nazione + '/' + nazione + '_' + area + '.json')
            .then(function (response) { // The then function here is an opportunity to modify the response
              //console.log(response); // The return value gets picked up by the then in the controller.
              return response.data;
            }, function (data) {
              console.error("there was an error:", data);
              return {};
            });
        }
        return promiseArea;
      }, "getGruppoFrasi": function() {
        if (!promiseGruppoFrasi) {
          promiseGruppoFrasi = $http.get('files/json/mappa_frasi.json')
            .then(function (response) { // The then function here is an opportunity to modify the response
              //console.log(response); // The return value gets picked up by the then in the controller.
              return response.data;
            }, function (data) {
              console.error("there was an error:", data);
              return {};
            });
        }
        return promiseGruppoFrasi;
      }, "getStructData": function(struct){
        return structMapInverse[struct];
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

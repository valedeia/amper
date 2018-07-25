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
      "214": "pwk",
      "213": "pwt",
      "212": "pwp",
      "2143": "pwg",
      "2142": "pwx",
      "2141": "pwj",
      "2133": "pwd",
      "2132": "pws",
      "2131": "pwz",
      "2123": "pwb",
      "2122": "pwf",
      "2121": "pwv",
      "2314": "bwk",
      "2313": "bwt",
      "2312": "bwp",
      "2214": "fwk",
      "2213": "fwt",
      "2212": "fwp",
      "2114": "vwk",
      "2113": "vwt",
      "2112": "vwp",
      "314": "twk",
      "313": "twt",
      "312": "twp",
      "3143": "twg",
      "3142": "twx",
      "3141": "twj",
      "3133": "twd",
      "3132": "tws",
      "3131": "twz",
      "3123": "twb",
      "3122": "twf",
      "3121": "twv",
      "3314": "dwk",
      "3313": "dwt",
      "3312": "dwp",
      "3214": "swk",
      "3213": "swt",
      "3212": "swp",
      "3114": "zwk",
      "3113": "zwt",
      "3112": "zwp",
      "414": "kwk",
      "413": "kwt",
      "412": "kwp",
      "4143": "kwg",
      "4142": "kwx",
      "4141": "kwj",
      "4133": "kwd",
      "4132": "kws",
      "4131": "kwz",
      "4123": "kwb",
      "4122": "kwf",
      "4121": "kwv",
      "4314": "gwk",
      "4313": "gwt",
      "4312": "gwp",
      "4214": "xwk",
      "4213": "xwt",
      "4212": "xwp",
      "4114": "jwk",
      "4113": "jwt",
      "4112": "jwp"
    };

    var structMapInverse = {
      "pwk" : {
        "type": "424",
        "val": "214",
        "syntax": "SVO"
      },
      "pwt" : {
        "type": "424",
        "val": "213",
        "syntax": "SVO"
      },
      "pwp" : {
        "type": "424",
        "val": "212",
        "syntax": "SVO"
      },
      "pwg" : {
        "type": "4243",
        "val": "2143",
        "syntax": "SVOO"
      },
      "pwx" : {
        "type": "4243",
        "val": "2142",
        "syntax": "SVOO"
      },
      "pwj" : {
        "type": "4243",
        "val": "2141",
        "syntax": "SVOO"
      },
      "pwd" : {
        "type": "4243",
        "val": "2133",
        "syntax": "SVOO"
      },
      "pws" : {
        "type": "4243",
        "val": "2132",
        "syntax": "SVOO"
      },
      "pwz" : {
        "type": "4243",
        "val": "2131",
        "syntax": "SVOO"
      },
      "pwb" : {
        "type": "4243",
        "val": "2123",
        "syntax": "SVOO"
      },
      "pwf" : {
        "type": "4243",
        "val": "2122",
        "syntax": "SVOO"
      },
      "pwv" : {
        "type": "4243",
        "val": "2121",
        "syntax": "SVOO"
      },
      "bwk" : {
        "type": "4324",
        "val": "2314",
        "syntax": "SSVO"
      },
      "bwt" : {
        "type": "4324",
        "val": "2313",
        "syntax": "SSVO"
      },
      "bwp" : {
        "type": "4324",
        "val": "2312",
        "syntax": "SSVO"
      },
      "fwk" : {
        "type": "4324",
        "val": "2214",
        "syntax": "SSVO"
      },
      "fwt" : {
        "type": "4324",
        "val": "2213",
        "syntax": "SSVO"
      },
      "fwp" : {
        "type": "4324",
        "val": "2212",
        "syntax": "SSVO"
      },
      "vwk" : {
        "type": "4324",
        "val": "2114",
        "syntax": "SSVO"
      },
      "vwt" : {
        "type": "4324",
        "val": "2113",
        "syntax": "SSVO"
      },
      "vwp" : {
        "type": "4324",
        "val": "2112",
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

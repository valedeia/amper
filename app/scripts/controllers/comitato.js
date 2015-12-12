'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:ComitatoCtrl
 * @description
 * # ComitatoCtrl
 * Controller of the lfsagAgApp
 */

var docenti = [
  {
    "nome": "Monica",
    "cognome": "Cini",
    "afferenza": "Dipartimento di Studi Umanistici - Università di Torino",
    "sito": ""
  },
  {
    "nome": "Carla",
    "cognome": "Marello",
    "afferenza": "Dipartimento di Lingue e Letterature Straniere e Culture Moderne - Università di Torino",
    "sito": "http://www.personalweb.unito.it/carla.marello/"
  }
];

angular.module('lfsagAgApp')
  .controller('ComitatoCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    this.docenti = docenti;
  });

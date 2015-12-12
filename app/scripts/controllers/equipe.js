'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:EquipeCtrl
 * @description
 * # EquipeCtrl
 * Controller of the lfsagAgApp
 */

var personale = [
  {
    "nome": "Valentina",
    "cognome": "De Iacovo",
    "foto": "russo.jpg",
    "email": "v.deiacovo@gmail.com",
    "campi_ricerca": ['fonetica', 'dialettologia', 'intonazione'],
    "cv": "Cv Europass Valentina De Iacovo.pdf",
    "sito": ""
  },
  {
    "nome": "Claudio",
    "cognome": "Russo",
    "foto": "russo.jpg",
    "email": "...",
    "campi_ricerca": ['fonetica2', 'dialettologia2', 'intonazione2'],
    "cv": "cv russo.pdf",
    "sito": "http://www.google.com"
  }
];

angular.module('lfsagAgApp')
  .controller('EquipeCtrl', function () {
    this.personale = personale;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  });

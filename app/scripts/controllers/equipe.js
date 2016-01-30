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
    "posizione": 'dottoranda',
    "sito": ""
  },
  {
    "nome": "Claudio",
    "cognome": "Russo",
    "foto": "russo.jpg",
    "email": "emailnome@email.du",
    "posizione": 'dottorando',
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

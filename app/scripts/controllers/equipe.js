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
    "collaboratore": "",
    "sito": ""
  },
  {
    "nome": "Claudio",
    "cognome": "Russo",
    "foto": "russo.jpg",
    "email": "emailnome@email.du",
    "posizione": 'dottorando',
    "collaboratore": true,
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

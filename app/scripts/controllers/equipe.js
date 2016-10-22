'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:EquipeCtrl
 * @description
 * # EquipeCtrl
 * Controller of the lfsagAgApp
 */

/*var personale = [
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
];      */

var personale = [
  {
    "nome": "Antonio",
    "cognome": "Romano",
    "foto": "romano.jpg",
    "email": "antonio.romano@unito.it",
    "posizione": 'responsabile del laboratorio',
    "collaboratore": "",
    "sito": "http://www.dipartimentolingue.unito.it/OS-ShowTeacherDetails.asp?FromPage=romano/oss-programmi.asp&ProgSrchFld=&Editing=7654321209"
  },
  {
    "nome": "Giulia",
    "cognome": "Bertolotto",
    "foto": "bertolotto.jpg",
    "email": "giuliabertolo@gmail.com",
    "posizione": 'dottoressa di ricerca',
    "collaboratore": "",
    "sito": ""
  },
  {
    "nome": "Lidia",
    "cognome": "Calabrò",
    "foto": "calabro.jpg",
    "email": "lidia.calabro@gmail.com",
    "posizione": '',
    "collaboratore": "",
    "sito": ""
  },
  {
    "nome": "Valentina",
    "cognome": "De Iacovo",
    "foto": "deiacovo.jpg",
    "email": "v.deiacovo@gmail.com",
    "posizione": 'dottoranda',
    "collaboratore": "",
    "sito": ""
  },
  {
    "nome": "Paolo",
    "cognome": "Mairano",
    "foto": "paolo.jpg",
    "email": "paolomairano@gmail.com",
    "posizione": 'Post-doc presso Warwick University',
    "collaboratore": "",
    "sito": "http://sites.google.com/site/paolomairano/"
  },
  {
    "nome": "Riccardo",
    "cognome": "Mura",
    "foto": "mura.jpg",
    "email": "----",
    "posizione": '',
    "collaboratore": "",
    "sito": ""
  },
  {
    "nome": "Claudio",
    "cognome": "Russo",
    "foto": "russo.jpg",
    "email": "claudio.russo@unito.it",
    "posizione": 'dottorando in linguistica computazionale',
    "collaboratore": "",
    "sito": ""
  },
  {
    "nome": "Tarik",
    "cognome": "Salad Heddine",
    "foto": "tarik.jpg",
    "email": "tarik.salaheddine@unito.it ",
    "posizione": 'dottore di ricerca in ',
    "collaboratore": "",
    "sito": ""
  },
  {
    "nome": "Francesca",
    "cognome": "Tini Brunozzi",
    "foto": "tinibrunozzi.jpg",
    "email": "emailnome@email.du",
    "posizione": 'Dottoressa di ricerca',
    "collaboratore": "",
    "sito": ""
  },
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

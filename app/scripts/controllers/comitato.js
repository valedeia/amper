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
    "nome": "Lorenzo",
    "cognome": "Massobrio",
    "afferenza": "Istituto dell'Atlante Linguistico Italiano - Università di Torino",
    "sito": "http://www.storiadellalinguaitaliana.it/content/massobrio-lorenzo"
  },
  {
    "nome": "Monica",
    "cognome": "Cini",
    "afferenza": "Dipartimento di Studi Umanistici - Università di Torino",
    "sito": "http://cdslettere.campusnet.unito.it/do/docenti.pl/Show?_id=mcini"
  },
  {
    "nome": "Carla",
    "cognome": "Marello",
    "afferenza": "Dipartimento di Lingue e Letterature Straniere e Culture Moderne - Università di Torino",
    "sito": "http://www.personalweb.unito.it/carla.marello/"
  },
  {
    "nome": "Marcella",
    "cognome": "Costa",
    "afferenza": "Dipartimento di Lingue e Letterature Straniere e Culture Moderne - Università di Torino",
    "sito": "http://www.dipartimentolingue.unito.it/Costa/oss-home.asp"
  },
  {
    "nome": "Ilario",
    "cognome": "Meandri",
    "afferenza": "Dipartimento di Studi Umanistici - Università di Torino",
    "sito": "http://cinema.campusnet.unito.it/do/docenti.pl/Show?_id=imeandri"
  },
  {
    "nome": "Virginia",
    "cognome": "Pulcini",
    "afferenza": "Dipartimento di Lingue e Letterature Straniere e Culture Moderne - Università di Torino",
    "sito": "http://www.dipartimentolingue.unito.it/pulcini/oss-home.asp"
  },
  {
    "nome": "Giovanni",
    "cognome": "Ronco",
    "afferenza": "Dipartimento di Lingue e Letterature Straniere e Culture Moderne - Università di Torino",
    "sito": "http://www.dipartimentolingue.unito.it/ronco/oss-home.asp"
  },
  {
    "nome": "Davide",
    "cognome": "Ricca",
    "afferenza": "Dipartimento di Studi Umanistici - Università di Torino",
    "sito": "http://linguistica.campusnet.unito.it/do/docenti.pl/Show?_id=dricca"
  },
  {
    "nome": "Matteo",
    "cognome": "Rivoira",
    "afferenza": "Dipartimento di Studi Umanistici - Università di Torino",
    "sito": "http://culturecomparate.campusnet.unito.it/do/docenti.pl/Show?_id=mrivoira"
  },
  {
    "nome": "Pierluigi",
    "cognome": "Salza",
    "afferenza": "Cultore di Fonetica Sperimentale (Ricercatore Senior di Loquendo Tech., in quiescenza), Torino",
    "sito": "http://dblp.uni-trier.de/pers/hd/s/Salza:Pier_Luigi"
  },
  {
    "nome": "Mario",
    "cognome": "Squartini",
    "afferenza": "Dipartimento di Studi Umanistici - Università di Torino",
    "sito": "http://linguistica.campusnet.unito.it/do/docenti.pl/Show?_id=msquarti"
  },
  {
    "nome": "Mauro",
    "cognome": "Tosco",
    "afferenza": "Dipartimento di Studi Umanistici - Università di Torino",
    "sito": "http://www.maurotosco.net/"
  },
  {
    "nome": "Claudia",
    "cognome": "Tresso",
    "afferenza": "Dipartimento di Lingue e Letterature Straniere e Culture Moderne - Università di Torino",
    "sito": "http://www.dipartimentolingue.unito.it/OS-ShowTeacherDetails.asp?FromPage=MediazioneLinguistica/contents/oss-programmicorsi-2012.asp&ProgSrchFld=&Editing=7654321200"
  },
  {
    "nome": "Mauro",
    "cognome": "Uberti",
    "afferenza": "Cultore di Fonetica Fisiologica (Docente di Evoluzione umana e comunicazione fonetica c/o CdL in Scienze biologiche, in quiescenza), Torino",
    "sito": "http://www.maurouberti.it/"
  },
  {
    "nome": "Marie Berthe",
    "cognome": "Vittoz",
    "afferenza": "Dipartimento di Lingue e Letterature Straniere e Culture Moderne - Università di Torino",
    "sito": "http://www.dipartimentolingue.unito.it/vittoz/oss-home.asp"
  },
  {
    "nome": "Manuel",
    "cognome": "Barbera",
    "afferenza": "Facoltà di Lingue e Letterature Straniere - Università di Torino",
    "sito": "http://www.bmanuel.org/",
    "old": true
  },
  {
    "nome": "Gaetano",
    "cognome": "Berruto",
    "afferenza": "Facoltà di Lingue e Letterature Straniere - Università di Torino",
    "sito": "http://linguistica.campusnet.unito.it/do/docenti.pl/Show?_id=gberruto",
    "old": true
  },
  {
    "nome": "Sabina",
    "cognome": "Canobbio",
    "afferenza": "Facoltà di Lettere e Filosofia - Università di Torino",
    "sito": "http://linguistica.campusnet.unito.it/do/docenti.pl/Show?_id=scanobbi",
    "old": true
  },
  {
    "nome": "Massimo",
    "cognome": "Cerruti",
    "afferenza": "Facoltà di Lettere e Filosofia - Università di Torino",
    "sito": "http://comunicazione.campusnet.unito.it/do/docenti.pl/Show?_id=mcerruti",
    "old": true
  },
  {
    "nome": "Tullio",
    "cognome": "Telmon",
    "afferenza": "Facoltà di Lettere e Filosofia - Università di Torino",
    "sito": "http://linguistica.campusnet.unito.it/do/docenti.pl/Show?_id=ttelmon",
    "old": true
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

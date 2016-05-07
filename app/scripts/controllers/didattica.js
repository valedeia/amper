'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:DidatticaCtrl
 * @description
 * # DidatticaCtrl
 * Controller of the lfsagAgApp
 */
angular.module('lfsagAgApp')
  .controller('DidatticaCtrl', function () {

    this.corsi = [
      {
        id: 'LG-T',
        titolo: 'Dynamic Group Header - 1',
        sottotitolo: 'sottotitolo - 1',
        ricevimento: 'Prof X - martedì alle 12:00',
        luogoOrario: 'luogo e orario',
        programma: "programma corso 1",
      },
      {
        titolo: 'Dynamic Group Header - 2',
        luogoOrario: 'luogo e orario 2',
        programma: 'Dynamic Group Body - 2'
      },
      {
        titolo: 'Dynamic Group Header - 3',
        luogoOrario: 'luogo e orario 3',
        programma: 'Dynamic Group Body - 3'
      },
      {
        titolo: 'Dynamic Group Header - 4',
        luogoOrario: 'luogo e orario 4',
        programma: 'Dynamic Group Body - 4'
      }
    ];

    this.materiali = [
      {
        ids: ['LG-T'],
        nome: "nome materiale",
        link: ""
      }
    ];


  });

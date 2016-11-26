'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:CarteCtrl
 * @description
 * # CarteCtrl
 * Controller of the lfsagAgApp
 */

var data = {
  strings : {
    etichettaTa: "aff.",
    etichettaTi: "int."
  },
  italiano : {
    frase: "A papera magna a patata",
    trascrizione: "[a ˈpapera ˈmaɲ:(a) a paˈtata]",
    imgDur: "files/ampere/0655pwt_dur_AI.jpg",
    imgF0: "files/ampere/0655pwt_F0_AI.jpg",
    audioTa: "files/ampere/0655pwta0_ton.wav",
    audioTi: "files/ampere/0655pwti0_ton.wav"
  },
  catalano : {
    frase: "La crítica no polta la caputxa",
    trascrizione: "[la ˈkɾitikɛ no ˈpɔrtɛ la kaˈput͡ʃɛ]",
    imgDur: "files/ampere/je05pwt_dur_AI.jpg",
    imgF0: "files/ampere/je05pwt_F0_AI.jpg",
    audioTa: "files/ampere/je05pwta0_ton.wav",
    audioTi: "files/ampere/je05pwti0_ton.wav"
  },
  rumeno : {
    frase: "Pasărea vede nevasta",
    trascrizione: "[ˈpasǝre̯a ˈvede neˈvasta]",
    imgDur: "files/ampere/9a05pwt_dur_AI.jpg",
    imgF0: "files/ampere/9a05pwt_F0_AI.jpg",
    audioTa: "files/ampere/9a05pwta0_ton.wav",
    audioTi: "files/ampere/9a05pwti0_ton.wav"
  },
  galiziano : {
    frase: "U pássaro toca no Toneca",
    trascrizione: "[(u) ˈpasɐɾ(u) ˈtɔkɐ nu tuˈnɛkɐ]",
    imgDur: "files/ampere/0061pwt_dur_AI.jpg",
    imgF0: "files/ampere/0061pwt_F0_AI.jpg",
    audioTa: "files/ampere/0061pwta0_ton.wav",
    audioTi: "files/ampere/0061pwti0_ton.wav"
  },
  brasiliano : {
    frase: "U pássaro gosta de Renato",
    trascrizione: "[u 'pasaɾu ˈɡɔʃtɐ du ɣe'natu]",
    imgDur: "files/ampere/ba62pwt_dur_AI.jpg",
    imgF0: "files/ampere/ba62pwt_F0_AI.jpg",
    audioTa: "files/ampere/ba62pwta0_ton.wav",
    audioTi: "files/ampere/ba62pwti0_ton.wav"
  },
  spagnolo : {
    frase: "La cítara se toca con paciencia",
    trascrizione: "[la ˈθitaɾa se ˈtoka kom paˈθjenθja]",
    imgDur: "files/ampere/wc91pwt_dur_AI.jpg",
    imgF0: "files/ampere/wc91pwt_F0_AI.jpg",
    audioTa: "files/ampere/wc91pwta0_ton.wav",
    audioTi: "files/ampere/wc91pwti0_ton.wav"
  }
};

angular.module('lfsagAgApp')
  .controller('CarteCtrl', ['$scope', function($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.bubu = "bubu";
    $scope.amperData = data;
    /*$scope.showdiv = function() {

      var compiledeHTML = $compile("<div>{{bubu}}</div>")($scope);
      console.log("test2");//DEBUG
      angular.element.fancybox(compiledeHTML);
    };      */
  }]);
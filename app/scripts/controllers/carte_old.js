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
  roma : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0655pwt_dur_AI.jpg",
    imgF0: "files/ampere/0655pwt_F0_AI.jpg",
    audioTa: "files/ampere/0655pwta0_ton.wav",
    audioTi: "files/ampere/0655pwti0_ton.wav"
  },
  parma : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/06g6pwt_dur_AI.jpg",
    imgF0: "files/ampere/06g6pwt_F0_AI.jpg",
    audioTa: "files/ampere/06g6pwta0_ton.wav",
    audioTi: "files/ampere/06g6pwti0_ton.wav"
  },
  firenze : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0704pwt_dur_AI.jpg",
    imgF0: "files/ampere/0704pwt_F0_AI.jpg",
    audioTa: "files/ampere/0704pwta0_ton.wav",
    audioTi: "files/ampere/0704pwti0_ton.wav"
  },
  milano : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0684pwt_dur_AI.jpg",
    imgF0: "files/ampere/0684pwt_F0_AI.jpg",
    audioTa: "files/ampere/0684pwta0_ton.wav",
    audioTi: "files/ampere/0684pwti0_ton.wav"
  },
  parabita : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0616pwt_dur_AI.jpg",
    imgF0: "files/ampere/0616pwt_F0_AI.jpg",
    audioTa: "files/ampere/0616pwta0_ton.wav",
    audioTi: "files/ampere/0616pwti0_ton.wav"
  },
  parabita2 : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0621pwt_dur_AI.jpg",
    imgF0: "files/ampere/0621pwt_F0_AI.jpg",
    audioTa: "files/ampere/0621pwta0_ton.wav",
    audioTi: "files/ampere/0621pwti0_ton.wav"
  },
  arezzo : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0707pwt_dur_AI.jpg",
    imgF0: "files/ampere/0707pwt_F0_AI.jpg",
    audioTa: "files/ampere/0707pwta0_ton.wav",
    audioTi: "files/ampere/0707pwti0_ton.wav"
  },
  cagliari : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/06j8pwt_dur_AI.jpg",
    imgF0: "files/ampere/06j8pwt_F0_AI.jpg",
    audioTa: "files/ampere/06j8pwta0_ton.wav",
    audioTi: "files/ampere/06j8pwti0_ton.wav"
  },
  melia : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0737pwt_dur_AI.jpg",
    imgF0: "files/ampere/0737pwt_F0_AI.jpg",
    audioTa: "files/ampere/0737pwta0_ton.wav",
    audioTi: "files/ampere/0737pwti0_ton.wav"
  },
  pollina : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/0724pwt_dur_AI.jpg",
    imgF0: "files/ampere/0724pwt_F0_AI.jpg",
    audioTa: "files/ampere/0724pwta0_ton.wav",
    audioTi: "files/ampere/0724pwti0_ton.wav"
  },
  taranto : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/06b6pwt_dur_AI.jpg",
    imgF0: "files/ampere/06b6pwt_F0_AI.jpg",
    audioTa: "files/ampere/06b6pwta0_ton.wav",
    audioTi: "files/ampere/06b6pwti0_ton.wav"
  },
  verona : {
    frase: "La papera mangia la patata",
    trascrizione: "[la ˈpapera ˈmanʤa la paˈtata]",
    imgDur: "files/ampere/06i6pwt_dur_AI.jpg",
    imgF0: "files/ampere/06i6pwt_F0_AI.jpg",
    audioTa: "files/ampere/06i6pwta0_ton.wav",
    audioTi: "files/ampere/06i6pwti0_ton.wav"
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
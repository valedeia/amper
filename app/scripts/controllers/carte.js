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
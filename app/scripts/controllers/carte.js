'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:CarteCtrl
 * @description
 * # CarteCtrl
 * Controller of the lfsagAgApp
 */

var data = {
  italia : {
    frase: "A papera magna a patata",
    trascrizione: "[a ˈpapera ˈmaɲ(a) a paˈtata]",
    imgDur: "0655pwt_dur_AI.jpg",
    imgF0: "0655pwt_F0_AI.jpg",
    audioTa: "0655pwta0_ton.m4a",
    audioTi: "0655pwti0_ton.m4a",
    etichettaTa: "aff.",
    etichettaTi: "int."
  },
  brasile : {
    frase: "brasilero",
    trascrizione: "[a ˈpapera ˈmaɲ(a) a paˈtata]",
    imgDur: "0655pwt_dur_AI.jpg",
    imgF0: "0655pwt_F0_AI.jpg",
    audioTa: "0655pwta0_ton.m4a",
    audioTi: "0655pwti0_ton.m4a",
    etichettaTa: "aff.",
    etichettaTi: "int."
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
    $scope.ampereData = data;
    /*$scope.showdiv = function() {

      var compiledeHTML = $compile("<div>{{bubu}}</div>")($scope);
      console.log("test2");//DEBUG
      angular.element.fancybox(compiledeHTML);
    };      */
  }]);
'use strict';

/**
 * @ngdoc function
 * @name lfsagAgApp.controller:InventarisonoriCtrl
 * @description
 * # InventarisonoriCtrl
 * Controller of the lfsagAgApp
 */

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var words = [
  {text: "Italiano", weight: 13, link: 'files/is/inventari_sonori_IT.pdf'},
  {text: "Albanese", weight: 10.5, link: ''},
  {text: "Arabo", weight: 9.4, link: 'files/is/inventari_sonori_AR.pdf'},
  {text: "Cinese mandarino", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_CN.pdf'},
  {text: "Croato", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_HR.pdf'},
  {text: "Danese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_DN.pdf'},
  {text: "Finlandese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_FI.pdf'},
  {text: "Francese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_FR.pdf'},
  {text: "Franco-canadese", weight: getRandomIntInclusive(2, 30) , link: ''}, //files/is/inventari_sonori_FC.pdf
  {text: "Giapponese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_JP.pdf'},
  {text: "Greco Moderno", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_GR.pdf'},
  {text: "Hindi", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_HI.pdf'},
  {text: "Inglese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_EN.pdf'},
  {text: "Nederlandese", weight: getRandomIntInclusive(2, 30) , link: ''}, //files/is/inventari_sonori_NL.pdf
  {text: "Norvegese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_NR.pdf'},
  {text: "Polacco", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_PL.pdf'},
  {text: "Portoghese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_PT.pdf'},
  {text: "Romeno", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_RO.pdf'},
  {text: "Russo", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_RU.pdf'},
  {text: "Serbo", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_SR.pdf'},
  {text: "Spagnolo castigliano", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_SP.pdf'},
  {text: "Svedese", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_SV.pdf'},
  {text: "Tedesco", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_DE.pdf'},
  {text: "Turco", weight: getRandomIntInclusive(2, 30) , link: 'files/is/inventari_sonori_TK.pdf'}
];

angular.module('lfsagAgApp')
  .controller('InventarisonoriCtrl', function () {
    this.words = words;
  });

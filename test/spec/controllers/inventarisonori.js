'use strict';

describe('Controller: InventarisonoriCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var InventarisonoriCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InventarisonoriCtrl = $controller('InventarisonoriCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(InventarisonoriCtrl.awesomeThings.length).toBe(3);
  });
});

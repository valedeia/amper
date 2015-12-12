'use strict';

describe('Controller: EquipeCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var EquipeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EquipeCtrl = $controller('EquipeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EquipeCtrl.awesomeThings.length).toBe(3);
  });
});

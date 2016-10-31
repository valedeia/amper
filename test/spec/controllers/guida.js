'use strict';

describe('Controller: GuidaCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var GuidaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GuidaCtrl = $controller('GuidaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GuidaCtrl.awesomeThings.length).toBe(3);
  });
});

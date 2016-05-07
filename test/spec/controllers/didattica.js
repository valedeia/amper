'use strict';

describe('Controller: DidatticaCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var DidatticaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DidatticaCtrl = $controller('DidatticaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DidatticaCtrl.awesomeThings.length).toBe(3);
  });
});

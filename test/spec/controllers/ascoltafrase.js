'use strict';

describe('Controller: AscoltafraseCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var AscoltafraseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AscoltafraseCtrl = $controller('AscoltafraseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AscoltafraseCtrl.awesomeThings.length).toBe(3);
  });
});

'use strict';

describe('Controller: SceltafraseCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var SceltafraseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SceltafraseCtrl = $controller('SceltafraseCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SceltafraseCtrl.awesomeThings.length).toBe(3);
  });
});

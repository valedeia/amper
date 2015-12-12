'use strict';

describe('Controller: ComitatoCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var ComitatoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ComitatoCtrl = $controller('ComitatoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ComitatoCtrl.awesomeThings.length).toBe(3);
  });
});

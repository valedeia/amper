'use strict';

describe('Controller: BibliografiaCtrl', function () {

  // load the controller's module
  beforeEach(module('lfsagAgApp'));

  var BibliografiaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BibliografiaCtrl = $controller('BibliografiaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BibliografiaCtrl.awesomeThings.length).toBe(3);
  });
});

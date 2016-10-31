'use strict';

describe('Directive: pirect', function () {

  // load the directive's module
  beforeEach(module('lfsagAgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<pirect></pirect>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pirect directive');
  }));
});
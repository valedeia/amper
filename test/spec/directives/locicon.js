'use strict';

describe('Directive: locicon', function () {

  // load the directive's module
  beforeEach(module('lfsagAgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<locicon></locicon>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the locicon directive');
  }));
});

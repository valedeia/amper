'use strict';

describe('Directive: imgpopup1', function () {

  // load the directive's module
  beforeEach(module('lfsagAgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<imgpopup1></imgpopup1>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the imgpopup1 directive');
  }));
});

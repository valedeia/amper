'use strict';

describe('Directive: codicifrasi', function () {

  // load the directive's module
  beforeEach(module('lfsagAgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<codicifrasi></codicifrasi>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the codicifrasi directive');
  }));
});

'use strict';

describe('Service: sharedAmper', function () {

  // load the service's module
  beforeEach(module('lfsagAgApp'));

  // instantiate service
  var sharedAmper;
  beforeEach(inject(function (_sharedAmper_) {
    sharedAmper = _sharedAmper_;
  }));

  it('should do something', function () {
    expect(!!sharedAmper).toBe(true);
  });

});

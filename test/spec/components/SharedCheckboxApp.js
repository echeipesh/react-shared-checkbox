'use strict';

describe('Main', function () {
  var SharedCheckboxApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    SharedCheckboxApp = require('../../../src/scripts/components/SharedCheckboxApp.jsx');
    component = SharedCheckboxApp();
  });

  it('should create a new instance of SharedCheckboxApp', function () {
    expect(component).toBeDefined();
  });
});

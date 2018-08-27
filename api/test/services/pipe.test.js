const assert = require('assert');
const app = require('../../src/app');

describe('\'pipe\' service', () => {
  it('registered the service', () => {
    const service = app.service('pipe');

    assert.ok(service, 'Registered the service');
  });
});

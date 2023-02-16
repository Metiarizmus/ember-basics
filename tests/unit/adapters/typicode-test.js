import { module, test } from 'qunit';

import { setupTest } from 'ember-users/tests/helpers';

module('Unit | Adapter | typicode', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let adapter = this.owner.lookup('adapter:typicode');
    assert.ok(adapter);
  });
});

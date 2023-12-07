import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-school-услуги', 'Unit | Serializer | i-i-s-school-услуги', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-school-услуги',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-school-п-о-л',
    'transform:i-i-s-school-услуга',

    'model:i-i-s-school-запись',
    'model:i-i-s-school-клиенты',
    'model:i-i-s-school-услуги',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});

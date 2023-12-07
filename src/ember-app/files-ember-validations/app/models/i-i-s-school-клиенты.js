import {
  defineNamespace,
  defineProjections,
  Model as клиентыMixin
} from '../mixins/regenerated/models/i-i-s-school-клиенты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(клиентыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;

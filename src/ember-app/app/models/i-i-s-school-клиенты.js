import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as клиентыMixin
} from '../mixins/regenerated/models/i-i-s-school-клиенты';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(клиентыMixin, Validations, {
});

defineProjections(Model);

export default Model;

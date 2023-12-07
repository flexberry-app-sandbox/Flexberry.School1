import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПОЛEnum from '../enums/i-i-s-school-п-о-л';

export default FlexberryEnum.extend({
  enum: ПОЛEnum,
  sourceType: 'IIS.School.ПОЛ'
});

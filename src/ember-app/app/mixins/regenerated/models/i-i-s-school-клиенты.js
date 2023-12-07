import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  отчетво: DS.attr('string'),
  пол: DS.attr('i-i-s-school-п-о-л'),
  фамилия: DS.attr('string'),
  запись: DS.belongsTo('i-i-s-school-запись', { inverse: 'клиенты', async: false })
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-school-клиенты.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчетво: {
    descriptionKey: 'models.i-i-s-school-клиенты.validations.отчетво.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  пол: {
    descriptionKey: 'models.i-i-s-school-клиенты.validations.пол.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-school-клиенты.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  запись: {
    descriptionKey: 'models.i-i-s-school-клиенты.validations.запись.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('клиентыE', 'i-i-s-school-клиенты', {
    имя: attr('Имя', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    отчетво: attr('Отчетво', { index: 2 }),
    пол: attr('Пол', { index: 3 })
  });
};

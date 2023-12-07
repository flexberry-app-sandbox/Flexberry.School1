import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('number'),
  стоимость: DS.attr('number'),
  услуга: DS.attr('i-i-s-school-услуга')
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-school-услуги.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-school-услуги.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-school-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугиE', 'i-i-s-school-услуги', {
    стоимость: attr('Стоимость', { index: 0 }),
    время: attr('Время', { index: 1 }),
    услуга: attr('Услуга', { index: 2 })
  });

  modelClass.defineProjection('УслугиL', 'i-i-s-school-услуги', {
    стоимость: attr('Стоимость', { index: 0 }),
    время: attr('Время', { index: 1 }),
    услуга: attr('Услуга', { index: 2 })
  });
};

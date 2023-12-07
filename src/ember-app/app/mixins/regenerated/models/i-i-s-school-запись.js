import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  времяконца: DS.attr('number'),
  времяначало: DS.attr('number'),
  услуги: DS.belongsTo('i-i-s-school-услуги', { inverse: null, async: false }),
  клиенты: DS.hasMany('i-i-s-school-клиенты', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  времяконца: {
    descriptionKey: 'models.i-i-s-school-запись.validations.времяконца.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  времяначало: {
    descriptionKey: 'models.i-i-s-school-запись.validations.времяначало.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-school-запись.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-school-запись.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-school-запись', {
    времяначало: attr('Времяначало', { index: 0 }),
    времяконца: attr('Времяконца', { index: 1 }),
    услуги: belongsTo('i-i-s-school-услуги', 'Услуги', {
      стоимость: attr('Стоимость', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'стоимость' }),
    клиенты: hasMany('i-i-s-school-клиенты', 'Клиенты', {
      имя: attr('Имя', { index: 0 }),
      фамилия: attr('Фамилия', { index: 1 }),
      отчетво: attr('Отчетво', { index: 2 }),
      пол: attr('Пол', { index: 3 })
    })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-school-запись', {
    времяначало: attr('Времяначало', { index: 0 }),
    времяконца: attr('Времяконца', { index: 1 }),
    услуги: belongsTo('i-i-s-school-услуги', 'Стоимость', {
      стоимость: attr('Стоимость', { index: 2 })
    }, { index: -1, hidden: true })
  });
};

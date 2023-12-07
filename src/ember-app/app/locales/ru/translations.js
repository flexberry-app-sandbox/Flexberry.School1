import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISSchoolЗаписьLForm from './forms/i-i-s-school-запись-l';
import IISSchoolУслугиLForm from './forms/i-i-s-school-услуги-l';
import IISSchoolЗаписьEForm from './forms/i-i-s-school-запись-e';
import IISSchoolУслугиEForm from './forms/i-i-s-school-услуги-e';
import IISSchoolЗаписьModel from './models/i-i-s-school-запись';
import IISSchoolклиентыModel from './models/i-i-s-school-клиенты';
import IISSchoolУслугиModel from './models/i-i-s-school-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-school-запись': IISSchoolЗаписьModel,
    'i-i-s-school-клиенты': IISSchoolклиентыModel,
    'i-i-s-school-услуги': IISSchoolУслугиModel
  },

  'application-name': 'School',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'School',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'School',
          title: 'School'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        school: {
          caption: 'School',
          title: 'School',
          'i-i-s-school-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-school-услуги-l': {
            caption: 'Услуги',
            title: ''
          }
        },
        'справочники-клиенты': {
          caption: 'Справочники клиенты',
          title: 'Справочники клиенты',
          'i-i-s-school-услуги-l': {
            caption: 'Услуги',
            title: 'Услуги'
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-school-запись-l': IISSchoolЗаписьLForm,
    'i-i-s-school-услуги-l': IISSchoolУслугиLForm,
    'i-i-s-school-запись-e': IISSchoolЗаписьEForm,
    'i-i-s-school-услуги-e': IISSchoolУслугиEForm
  },

});

export default translations;

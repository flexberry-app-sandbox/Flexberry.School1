import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'School',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'School',
          title: 'School'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-school-запись-l': IISSchoolЗаписьLForm,
    'i-i-s-school-услуги-l': IISSchoolУслугиLForm,
    'i-i-s-school-запись-e': IISSchoolЗаписьEForm,
    'i-i-s-school-услуги-e': IISSchoolУслугиEForm
  },

});

export default translations;

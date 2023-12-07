import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.school.caption'),
          title: i18n.t('forms.application.sitemap.school.title'),
          children: [{
            link: 'i-i-s-school-запись-l',
            caption: i18n.t('forms.application.sitemap.school.i-i-s-school-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.school.i-i-s-school-запись-l.title'),
            icon: 'chart bar',
            children: null
          }, {
            link: 'i-i-s-school-услуги-l',
            caption: i18n.t('forms.application.sitemap.school.i-i-s-school-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.school.i-i-s-school-услуги-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники-клиенты.caption'),
          title: i18n.t('forms.application.sitemap.справочники-клиенты.title'),
          children: [{
            link: 'i-i-s-school-услуги-l',
            caption: i18n.t('forms.application.sitemap.справочники-клиенты.i-i-s-school-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники-клиенты.i-i-s-school-услуги-l.title'),
            icon: 'briefcase',
            children: null
          }]
        }
      ]
    };
  }),
})
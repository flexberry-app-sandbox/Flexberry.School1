import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-school-запись-l');
  this.route('i-i-s-school-запись-e',
  { path: 'i-i-s-school-запись-e/:id' });
  this.route('i-i-s-school-запись-e.new',
  { path: 'i-i-s-school-запись-e/new' });
  this.route('i-i-s-school-услуги-l');
  this.route('i-i-s-school-услуги-e',
  { path: 'i-i-s-school-услуги-e/:id' });
  this.route('i-i-s-school-услуги-e.new',
  { path: 'i-i-s-school-услуги-e/new' });
});

export default Router;

import angular from 'angular';
import account from './account';

export default angular
  .module('account', [])
  .component('account', account)
  .name;

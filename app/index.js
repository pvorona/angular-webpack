import angular from 'angular';
import router from 'angular-ui-router';
import example from './src/views/example';
import account from './src/views/account';

angular.module('smg.app', [router, example, account]);

import angular from 'angular';
import router from 'angular-ui-router';
import example from './src/views/example';

import 'angular-mocks/angular-mocks';

angular.module('smg.app', [router, example]);

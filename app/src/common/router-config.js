angular
  .module('spectrum.console.layout', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      abstract: true,
      // redirectTo: 'app.analytics',
      views: {
        root: {
          templateUrl: 'console/layout/layout.tpl.html'
        }
      },
      resolve: {
        test: function () {
          console.log('called state resolver');
          return true;
        }
      }
    });

  $urlRouterProvider.otherwise('/');

});
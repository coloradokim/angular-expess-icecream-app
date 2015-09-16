var app = angular.module("iceCreamApp", ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl:'views/icecreams/index.html',
      controller: 'CreamController'
    });
});

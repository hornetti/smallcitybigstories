var app = angular.module('MyApp', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/home', { 
      controller: 'HomeController', 
      templateUrl: 'js/angularjs/views/Home.html' 
    })
    .when('/map', {
      controller: 'MapController',
      templateUrl: 'js/angularjs/views/Map.html'
    })
    .when('/credits', {
      controller: 'CreditsController',
      templateUrl: 'js/angularjs/views/Credits.html'
    })
    .when('/contact', {
      controller: 'ContactController',
      templateUrl: 'js/angularjs/views/Contact.html'
    })
    .when('/profile', {
      controller: 'MapController',
      templateUrl: 'js/angularjs/views/Profile.html'
    })
    .otherwise({ 
      redirectTo: '/map' 
    }); 
});
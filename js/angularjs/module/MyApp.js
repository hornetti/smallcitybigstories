var app = angular.module('MyApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
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
    .when('/map/:id/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Profile.html'
    })
    .when('/map/:id/service', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Service.html'
    })
    .when('/map/:id/employees', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Employees.html'
    })
    .when('/map/:id/foundation', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Foundation.html'
    })
    .when('/map/:id/revenue', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Revenue.html'
    })
    .when('/map/:id/economic_growth', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Economic_growth.html'
    })
    .when('/map/:id/type', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Type.html'
    })
    .when('/map/:id/reference_market', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Reference_market.html'
    })
    .when('/map/:id/motivations', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/Motivations.html'
    })
    .otherwise({ 
      redirectTo: '/home' 
    });
    $locationProvider.html5Mode(true);
}]);
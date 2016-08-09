var app = angular.module('MyApp', ['ngRoute']);

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
    .when('/map/marcotamba/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MarcoTamba.html'
    })
    .when('/map/fabriziomantovani/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/FabrizioMantovani.html'
    })
    .when('/map/raffaeleborgini/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/RaffaeleBorgini.html'
    })
    .when('/map/paolorava/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/PaoloRava.html'
    })
    .when('/map/ivanovalmori/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/IvanoValmori.html'
    })
    .when('/map/andreasalvatori/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AndreaSalvatori.html'
    })
    .when('/map/marcoperoni/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MarcoPeroni.html'
    })
    .when('/map/andreamartelli/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AndreaMartelli.html'
    })
    .when('/map/robertobertoni/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/RobertoBertoni.html'
    })
    .when('/map/barbarasavorani/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/BarbaraSavorani.html'
    })
    .when('/map/gabrielebandini/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/GabrieleBandini.html'
    })
    .when('/map/giuliaruta/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/GiuliaRuta.html'
    })
    .when('/map/annatampieri/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AnnaTampieri.html'
    })
    .when('/map/stefanozauli/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/StefanoZauli.html'
    })
    .when('/map/mauriziofionda/', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MaurizioFionda.html'
    })
    .when('/map/service', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Service.html'
    })
    .when('/map/employees', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Employees.html'
    })
    .when('/map/foundation', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Foundation.html'
    })
    .when('/map/revenue', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Revenue.html'
    })
    .when('/map/economic_growth', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Economic_growth.html'
    })
    .when('/map/type', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Type.html'
    })
    .when('/map/reference_market', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Reference_market.html'
    })
    .when('/map/motivations', {
      controller: 'DatavizController',
      templateUrl: 'js/angularjs/views/dataviz/Motivations.html'
    })
    .otherwise({ 
      redirectTo: '/map' 
    });
    $locationProvider.html5Mode(true);
}]);
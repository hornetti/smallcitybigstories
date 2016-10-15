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

    .when('/manifesto', {
      controller: 'ManifestoController',
      templateUrl: 'js/angularjs/views/Manifesto.html'
    })

    .when('/map/marco_tamba', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MarcoTamba.html'
    })

    .when('/map/fabrizio_mantovani', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/FabrizioMantovani.html'
    })

    .when('/map/raffaele_borgini', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/RaffaeleBorgini.html'
    })

    .when('/map/paolo_rava', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/PaoloRava.html'
    })

    .when('/map/ivano_valmori', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/IvanoValmori.html'
    })

    .when('/map/andrea_salvatori', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AndreaSalvatori.html'
    })

    .when('/map/marco_peroni', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MarcoPeroni.html'
    })

    .when('/map/andrea_martelli', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AndreaMartelli.html'
    })
    .when('/map/andrea_martelli/intervista', {
      controller: 'InterviewController',
      templateUrl: 'js/angularjs/views/Interview.html'
    })

    .when('/map/roberto_bertoni', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/RobertoBertoni.html'
    })

    .when('/map/barbara_savorani', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/BarbaraSavorani.html'
    })

    .when('/map/gabriele_bandini', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/GabrieleBandini.html'
    })

    .when('/map/giulia_ruta', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/GiuliaRuta.html'
    })

    .when('/map/anna_tampieri', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AnnaTampieri.html'
    })

    .when('/map/stefano_zauli', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/StefanoZauli.html'
    })

    .when('/map/maurizio_fionda', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MaurizioFionda.html'
    })

    .when('/map/employees', {
      controller: 'EmployeesController',
      templateUrl: 'js/angularjs/views/datavisualization/Employees.html'
    })

    .when('/map/foundation', {
      controller: 'FoundationController',
      templateUrl: 'js/angularjs/views/datavisualization/Foundation.html'
    })

    .when('/map/revenue', {
      controller: 'RevenueController',
      templateUrl: 'js/angularjs/views/datavisualization/Revenue.html'
    })

    .when('/map/economic_growth', {
      controller: 'EcgrowthController',
      templateUrl: 'js/angularjs/views/datavisualization/Economic_growth.html'
    })

    .when('/map/type_market', {
      controller: 'TypemarketController',
      templateUrl: 'js/angularjs/views/datavisualization/Type_market.html'
    })

    .when('/map/reference_market', {
      controller: 'RefmarketController',
      templateUrl: 'js/angularjs/views/datavisualization/Reference_market.html'
    })

    .when('/map/motivations', {
      controller: 'MotivationsController',
      templateUrl: 'js/angularjs/views/datavisualization/Motivations.html'
    })

    .otherwise({ 
      redirectTo: '/home'
    });
    $locationProvider.html5Mode(true);
}]);
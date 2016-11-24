var app = angular.module('MyApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', function($routeProvider, $locationProvider, $sceDelegateProvider) {
  
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://www.smallcitybigstories.com/',
    'https://hornetti.github.io/smallcitybigstories/'
  ]);
/*
  // The blacklist overrides the whitelist so the open redirect here is blocked.
  $sceDelegateProvider.resourceUrlBlacklist([
    'https://hornetti.github.io/smallcitybigstories/'
  ]);
*/
  $routeProvider
  
    .when('/home', {
      controller: 'HomeController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Home.html'
    })

    .when('/map', {
      controller: 'MapController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Map.html'
    })

    .when('/credits', {
      controller: 'CreditsController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Credits.html'
    })

    .when('/contact', {
      controller: 'ContactController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Contact.html'
    })

    .when('/manifesto', {
      controller: 'ManifestoController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Manifesto.html'
    })

    .when('/map/marco_tamba', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/MarcoTamba.html'
    })
    .when('/map/marco_tamba/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/fabrizio_mantovani', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/FabrizioMantovani.html'
    })
    .when('/map/fabrizio_mantovani/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/raffaele_borgini', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/RaffaeleBorgini.html'
    })
    .when('/map/raffaele_borgini/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/paolo_rava', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/PaoloRava.html'
    })
    .when('/map/paolo_rava/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/ivano_valmori', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/IvanoValmori.html'
    })
    .when('/map/ivano_valmori/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/andrea_salvatori', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/AndreaSalvatori.html'
    })
    .when('/map/andrea_salvatori/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/marco_peroni', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/MarcoPeroni.html'
    })
    .when('/map/marco_peroni/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/andrea_martelli', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/AndreaMartelli.html'
    })
    .when('/map/andrea_martelli/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/roberto_bertoni', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/RobertoBertoni.html'
    })
    .when('/map/roberto_bertoni/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/barbara_savorani', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/BarbaraSavorani.html'
    })
    .when('/map/barbara_savorani/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/gabriele_bandini', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/GabrieleBandini.html'
    })
    .when('/map/gabriele_bandini/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/giulia_ruta', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/GiuliaRuta.html'
    })
    .when('/map/giulia_ruta/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/anna_tampieri', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/AnnaTampieri.html'
    })
    .when('/map/anna_tampieri/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/stefano_zauli', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/StefanoZauli.html'
    })
    .when('/map/stefano_zauli/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/maurizio_fionda', {
      controller: 'ProfileController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/interviewed/MaurizioFionda.html'
    })
    .when('/map/maurizio_fionda/intervista', {
      controller: 'InterviewController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/Interview.html'
    })

    .when('/map/employees', {
      controller: 'EmployeesController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/datavisualization/Employees.html'
    })

    .when('/map/foundation', {
      controller: 'FoundationController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/datavisualization/Foundation.html'
    })

    .when('/map/revenue', {
      controller: 'RevenueController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/datavisualization/Revenue.html'
    })

    .when('/map/economic_growth', {
      controller: 'EcgrowthController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/datavisualization/Economic_growth.html'
    })

    .when('/map/type_market', {
      controller: 'TypemarketController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/datavisualization/Type_market.html'
    })

    .when('/map/reference_market', {
      controller: 'RefmarketController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/datavisualization/Reference_market.html'
    })

    .when('/map/motivations', {
      controller: 'MotivationsController',
      templateUrl: 'https://hornetti.github.io/smallcitybigstories/js/angularjs/views/datavisualization/Motivations.html'
    })

    .otherwise({ 
      redirectTo: '/home'
    });
    $locationProvider.html5Mode(true);
}]);
var app = angular.module('MyApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', function($routeProvider, $locationProvider, $sceDelegateProvider) {
  
  $sceDelegateProvider.resourceUrlWhitelist([
    // Allow same origin resource loads.
    'self',
    // Allow loading from our assets domain.  Notice the difference between * and **.
    'http://www.smallcitybigstories.com/**',
    'http://hornetti.github.io/smallcitybigstories/**'
  ]);
/*
  // The blacklist overrides the whitelist so the open redirect here is blocked.
  $sceDelegateProvider.resourceUrlBlacklist([
    'https://hornetti.github.io/smallcitybigstories/'
  ]);
*/
  $routeProvider
  
    .when('/offline', {
      templateUrl: 'js/angularjs/views/Offline.html'
    })

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
    .when('/map/marco_tamba/intervista', {
      controller: 'InterviewController_marco_tamba' 'InterviewController',
      templateUrl: 'js/angularjs/views/interview/Interview_B_food.html'
    })

    .when('/map/fabrizio_mantovani', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/FabrizioMantovani.html'
    })
    .when('/map/fabrizio_mantovani/intervista', {
      controller: 'InterviewController_fabrizio_mantovani',
      templateUrl: 'js/angularjs/views/interview/Interview_A_food.html'
    })

    .when('/map/raffaele_borgini', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/RaffaeleBorgini.html'
    })
    .when('/map/raffaele_borgini/intervista', {
      controller: 'InterviewController_raffaele_borgini',
      templateUrl: 'js/angularjs/views/interview/Interview_A_ptek.html'
    })

    .when('/map/paolo_rava', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/PaoloRava.html'
    })
    .when('/map/paolo_rava/intervista', {
      controller: 'InterviewController_paolo_rava',
      templateUrl: 'js/angularjs/views/interview/Interview_A_ptek.html'
    })

    .when('/map/ivano_valmori', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/IvanoValmori.html'
    })
    .when('/map/ivano_valmori/intervista', {
      controller: 'InterviewController_ivano_valmori',
      templateUrl: 'js/angularjs/views/interview/Interview_A_it.html'
    })

    .when('/map/andrea_salvatori', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AndreaSalvatori.html'
    })
    .when('/map/andrea_salvatori/intervista', {
      controller: 'InterviewController_andrea_salvatori',
      templateUrl: 'js/angularjs/views/interview/Interview_D_ptek.html'
    })

    .when('/map/marco_peroni', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MarcoPeroni.html'
    })
    .when('/map/marco_peroni/intervista', {
      controller: 'InterviewController_marco_peroni',
      templateUrl: 'js/angularjs/views/interview/Interview_C_ptek.html'
    })

    .when('/map/andrea_martelli', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AndreaMartelli.html'
    })
    .when('/map/andrea_martelli/intervista', {
      controller: 'InterviewController_andrea_martelli',
      templateUrl: 'js/angularjs/views/interview/Interview_B_ptek.html'
    })

    .when('/map/roberto_bertoni', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/RobertoBertoni.html'
    })
    .when('/map/roberto_bertoni/intervista', {
      controller: 'InterviewController_roberto_bertoni',
      templateUrl: 'js/angularjs/views/interview/Interview_A_ptek.html'
    })

    .when('/map/barbara_savorani', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/BarbaraSavorani.html'
    })
    .when('/map/barbara_savorani/intervista', {
      controller: 'InterviewController_barbara_savorani',
      templateUrl: 'js/angularjs/views/interview/Interview_D_mav.html'
    })

    .when('/map/gabriele_bandini', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/GabrieleBandini.html'
    })
    .when('/map/gabriele_bandini/intervista', {
      controller: 'InterviewController_gabriele_bandini',
      templateUrl: 'js/angularjs/views/interview/Interview_B_mav.html'
    })

    .when('/map/giulia_ruta', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/GiuliaRuta.html'
    })
    .when('/map/giulia_ruta/intervista', {
      controller: 'InterviewController_giulia_ruta',
      templateUrl: 'js/angularjs/views/interview/Interview_B_mav.html'
    })

    .when('/map/anna_tampieri', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/AnnaTampieri.html'
    })
    .when('/map/anna_tampieri/intervista', {
      controller: 'InterviewController_anna_tampieri',
      templateUrl: 'js/angularjs/views/interview/Interview_A_mav.html'
    })

    .when('/map/stefano_zauli', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/StefanoZauli.html'
    })
    .when('/map/stefano_zauli/intervista', {
      controller: 'InterviewController_stefano_zauli',
      templateUrl: 'js/angularjs/views/interview/Interview_A_it.html'
    })

    .when('/map/maurizio_fionda', {
      controller: 'ProfileController',
      templateUrl: 'js/angularjs/views/interviewed/MaurizioFionda.html'
    })
    .when('/map/maurizio_fionda/intervista', {
      controller: 'InterviewController_maurizio_fionda',
      templateUrl: 'js/angularjs/views/interview/Interview_A_it.html'
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
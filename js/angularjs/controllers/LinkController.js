app.controller('LinkController', ['$scope', function($scope) {

	$scope.Link_Home = {
		name : 'Small city, big stories',
		direct : 'home'
	};

	$scope.Link_Map = {
		name : 'Faenza',
		namealt : 'Torna alla mappa',
		nameshow : '',
		direct : 'map'
	};

	$scope.Link_Credits = {
		name : 'Credits',
		direct : 'credits'
	};

	$scope.Link_Contact = {
		name : 'Contact us',
		direct : 'contact'
	};

	$scope.Link_Manifesto = {
		name : 'Manifesto',
		direct : 'manifesto'
	};

	//  DATAVIZ

	$scope.Link_Revenue = 'map/revenue';

	$scope.Link_Employees = 'map/employees';

	$scope.Link_Foundation = 'map/foundation';

	$scope.Link_Motivation = 'map/motivations';

	$scope.Link_Market = 'map/reference_market';

	$scope.Link_Growth = 'map/economic_growth';

	$scope.Link_Type = 'map/type_market';

	//  INTERVIEWED 
/*
	$scope.barbara_savorani = '#/map/barbara_savorani';
	
	$scope.stefano_zauli = '#/map/stefano_zauli';
	
	$scope.maurizio_fionda = '#/map/maurizio_fionda';
	
	$scope.gabriele_bandini = '#/map/gabriele_bandini';
	
	$scope.anna_tampieri = '#/map/anna_tampieri';
	
	$scope.giulia_ruta = '#/map/giulia_ruta';
	
	$scope.roberto_bertoni = '#/map/roberto_bertoni';
	
	$scope.andrea_martelli = '#/map/andrea_martelli';
	
	$scope.marco_peroni = '#/map/marco_peroni';
	
	$scope.andrea_salvatori = '#/map/andrea_salvatori';
	
	$scope.raffaele_borgini = '#/map/raffaele_borgini';
	
	$scope.ivano_valmori = '#/map/ivano_valmori';
	
	$scope.paolo_rava = '#/map/paolo_rava';
	
	$scope.marco_tamba = '#/map/marco_tamba';
	
	$scope.fabrizio_mantovani = '#/map/fabrizio_mantovani';
*/
    $scope.hoverIn = function() {
        $scope.Link_Map.nameshow = $scope.Link_Map.name;
        $scope.Link_Map.name = $scope.Link_Map.namealt;
    };

    $scope.hoverOut = function() {
        $scope.Link_Map.name = $scope.Link_Map.nameshow;
    };
    /*
	$scope.Link_Share = [
		{
			name : "Facebook",
			link : ""
		},
		{
			name : "Twitter",
			link : ""
		}
	];
	*/
	$scope.Toggle_Share = "Share";

	$scope.Toggle_Fullscreen = "Fullscreen";

	$scope.Toggle_Music = "Music";

}]);
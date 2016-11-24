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


    $scope.hoverIn = function(){
        $scope.Link_Map.nameshow = $scope.Link_Map.name;
        $scope.Link_Map.name = $scope.Link_Map.namealt;
    };

    $scope.hoverOut = function(){
        $scope.Link_Map.name = $scope.Link_Map.nameshow;
    };

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

	$scope.Toggle_Share = "Share";

	$scope.Toggle_Fullscreen = "Fullscreen";

	$scope.Toggle_Music = "Music";

}]);
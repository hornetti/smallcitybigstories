app.controller('LinkController', ['$scope', function($scope) {
	$scope.Link_Home = { 
		name : 'Small city, big stories',
		direct : 'home'
	};
	$scope.Link_Map = {	
		name : 'Faenza',
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
	$scope.Toggle_Share = "Share";
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
	$scope.Toggle_Fullscreen = "Fullscreen";
	$scope.Toggle_Music = "Music";
}]);
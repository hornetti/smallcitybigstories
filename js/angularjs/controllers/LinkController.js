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

	//  DATAVIZ

	$scope.Link_Revenue = 'map/revenue';

	$scope.Link_Employees = 'map/employees';

	$scope.Link_Foundation = 'map/foundation';

	$scope.Link_Motivation = 'map/motivations';

	$scope.Link_Market = 'map/reference_market';

	$scope.Link_Growth = 'map/economic_growth';

	$scope.Link_Type = 'map/type_market';

	$scope.Link_Share = [
		{
			name : "Facebook",
			link : "http://www.facebook.com/share.php?u=www.smallcitybigstories.com"
		},
		{
			name : "Twitter",
			link : "http://twitter.com/share?text=Il+visual+journalism+si+fa+local:+se+la+provincia+ingrana+la+quarta.:&+url=www.smallcitybigstories.com"
		}
	];

	$scope.Toggle_Share = "Share";

	$scope.Toggle_Fullscreen = "Fullscreen";

	$scope.Toggle_Music = "Music";

}]);
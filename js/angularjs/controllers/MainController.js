app.controller('MainController', ['$scope', function($scope) {
	$scope.Link_Home = { 
		name : 'Small city, big stories',
		direct : 'home'
	};
	$scope.Link_Map = {	
		name : 'Faenza Metro Map',
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
}]);
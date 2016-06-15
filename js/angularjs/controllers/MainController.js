app.controller('MainController', ['$scope', function($scope) {
	$scope.Link_Home = { 
		name : 'Small city, big stories',
		direct : '/smallcitybigstories/home'
	};
	$scope.Link_Map = {	
		name : 'Faenza Metro Map',
		direct : '/smallcitybigstories/map'
	};
	$scope.Link_Credits = {
		name : 'Credits',
		direct : '/smallcitybigstories/credits'
	};
	$scope.Link_Contact = {
		name : 'Contact us',
		direct : '/smallcitybigstories/contact'
	};
}]);
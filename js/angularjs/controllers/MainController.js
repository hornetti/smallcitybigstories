app.controller('MainController', ['$scope', function($scope) {
	$scope.Link_Home = { 
		name : 'Small city, big stories',
		direct : 'http://localhost/websiteprojects/LOCALESCBS/#/home'
	};
	$scope.Link_Map = {	
		name : 'Faenza Metro Map',
		direct : 'http://localhost/websiteprojects/LOCALESCBS/#/map'
	};
	$scope.Link_Credits = {
		name : 'Credits',
		direct : 'http://localhost/websiteprojects/LOCALESCBS/#/credits'
	};
	$scope.Link_Contact = {
		name : 'Contact us',
		direct : 'http://localhost/websiteprojects/LOCALESCBS/#/contact'
	};
}]);
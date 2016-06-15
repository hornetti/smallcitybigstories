app.controller('MainController', ['$scope', function($scope) {
	$scope.Link_Home = { 
		name : 'Small city, big stories',
		direct : '/smallcitybigstories/Index.html/home'
	};
	$scope.Link_Map = {	
		name : 'Faenza Metro Map',
		direct : '/smallcitybigstories/Index.html/map'
	};
	$scope.Link_Credits = {
		name : 'Credits',
		direct : '/smallcitybigstories/Index.html/credits'
	};
	$scope.Link_Contact = {
		name : 'Contact us',
		direct : '/smallcitybigstories/Index.html/contact'
	};
}]);
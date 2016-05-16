app.controller('MainController', ['$scope', function($scope) {
	$scope.Link_Home = { 
		name : 'Small city, big stories',
		direct : 'http://hornetti.github.io/smallcitybigstories/Index.html/#/home'
	};
	$scope.Link_Map = {	
		name : 'Faenza Metro Map',
		direct : 'http://hornetti.github.io/smallcitybigstories/Index.html/#/map'
	};
	$scope.Link_Credits = {
		name : 'Credits',
		direct : 'http://hornetti.github.io/smallcitybigstories/Index.html/#/credits'
	};
	$scope.Link_Contact = {
		name : 'Contact us',
		direct : 'http://hornetti.github.io/smallcitybigstories/Index.html/#/contact'
	};
}]);
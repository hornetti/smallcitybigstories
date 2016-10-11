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

	angular.element(document).ready(function() {
		/*

		TOOGLE ON/OFF MUSIC & FULSCREEN

		var TXT = ['.Bold32', '.Regular32', '.Bold21', '.Regular21', '.Bold15', '.Regular15', '.Bold12', '.Regular12'];
				
		TweenMax.staggerFrom(TXT, 1, {
		    opacity: 0,
		    x: '-10px',
		    ease: Expo.easeOut,
		    force3D: true,
		    delay: 1
		}, 0.25);
		*/
	});

}]);
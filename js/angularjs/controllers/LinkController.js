app.controller('LinkController', ['$scope', function($scope) {
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
	$scope.Share = "Share";
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
	var myAudio = document.getElementById("Music");
	angular.element(document).ready(function toggleMusic() {
	  	if (myAudio.paused) {
	  		myAudio.play(); 
	  	} else {
	    	myAudio.pause(); 
	  	}		
	});
}]);
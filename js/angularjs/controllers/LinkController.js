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
	/*
	angular.element(document).ready(function toggleMusic() {
		var myAudio = document.getElementById("ambientMusic");
	  	if (myAudio = !myAudio.play()) {
	  		myAudio.play(); 
	  	} else {
	    	myAudio.pause(); 
	  	}		
	});	
	*/
	angular.element(document).ready(function() {
		TweenMax.set('.UnderLine', {
			drawSVG: "0%"
		});
		$('#MetroMappa').mouseover(function() {
			TweenMax.from('.UnderLine', 1, {
				drawSVG: "0%",
				ease: Expo.easeIn
			});
			TweenMax.to('.UnderLine', 1, {
				drawSVG: "100%",
				ease: Expo.easeIn
			});
		});
		$('#MetroMappa').mouseleave(function() {
			TweenMax.from('.UnderLine', 1, {
				drawSVG: "100%",
				ease: Expo.easeIn
			});
			TweenMax.to('.UnderLine', 1, {
				drawSVG: "0%",
				ease: Expo.easeIn
			});
		});
	});
}]);
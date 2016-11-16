app.controller('ContactController', ['$scope', function($scope) {

	$scope.EmailAddress = "Contatta Scbs";

	$scope.EmailSubmit = "Invia";

	$scope.master = {};

	$scope.update = function(user) {
		$scope.master = angular.copy(user);
	};

	angular.element(document).ready(function() {

	    $('.ButtonSubmit').mouseover(function() {

	        $('.ButtonSubmit > p').css({
	            "opacity": "0",
	            "transform": "translate3d(180px, 0px, 0px)",
	            "transition": "all linear 0.2s"
	        });

	        $('.ButtonSubmit > svg').css({
	            "opacity": "1",
	            "transform": "translate3d(100px, 0px, 0px)",
	            "transition": "all linear 0.2s"
	        });

	    });

	    $('.ButtonSubmit').mouseleave(function() {

	        $('.ButtonSubmit > p').css({
	            "opacity": "1",
	            "transform": "translate3d(100px, 0px, 0px)",
	            "transition": "all linear 0.2s"
	        });

	        $('.ButtonSubmit > svg').css({
	            "opacity": "0",
	            "transform": "translate3d(0px, 0px, 0px)",
	            "transition": "all linear 0.2s"
	        });

	    });
	    /*
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
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
	    
	});
	
}]);
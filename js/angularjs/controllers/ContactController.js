app.controller('ContactController', ['$scope', '$location', function($scope, $location) {
	$scope.currentPath = $location.path();
	$scope.EmailAddress = "Contact Scbs";
	$scope.EmailSubmit = "Submit";
	angular.element(document).ready(function() {
	    $('.ButtonSubmit').mouseover(function() {
	        $('.ButtonSubmit > p').css({
	            "opacity": "0",
	            "transform": "translate3d(160px, 0px, 0px)",
	            "transition": "all linear 0.2s"
	        });
	        $('.ButtonSubmit > svg').css({
	            "opacity": "1",
	            "transform": "translate3d(80px, 0px, 0px)",
	            "transition": "all linear 0.2s"
	        });
	    });
	    $('.ButtonSubmit').mouseleave(function() {
	        $('.ButtonSubmit > p').css({
	            "opacity": "1",
	            "transform": "translate3d(80px, 0px, 0px)",
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
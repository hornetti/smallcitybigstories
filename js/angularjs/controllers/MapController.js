app.controller('MapController', ['$scope', 'characters', function($scope, characters) {
  	characters.success(function(data) {
    	$scope.interv = data;
	});
	angular.element(document).ready(function() {
		TweenMax.from('#lineBlue', 1, {
		    drawSVG: "0%",
		    ease: Expo.easeOut,
		    delay: 2
		});
		TweenMax.from('#lineRed', 1, {
		    drawSVG: "0%",
		    ease: Expo.easeOut,
		    delay: 2
		});
		TweenMax.from('#lineGreen', 1, {
		    drawSVG: "0%",
		    ease: Expo.easeOut,
		    delay: 2
		});
		TweenMax.from('#lineYellow', 2, {
		    drawSVG: "0%",
		    ease: Expo.easeOut,
		    delay: 2
		});
	});
}]);
app.controller('MapController', ['$scope', 'characters', function($scope, characters) {
  	characters.success(function(data) {
    	$scope.interv = data;
	});
	angular.element(document).ready(function() {
		TweenLite.from('#lineBlue', 5, {
	        drawSVG: "50% 50%",
	        delay: 1
	    });
	    TweenLite.from('#lineRed', 4, {
	        drawSVG: "50% 50%",
	        delay: 2
	    });
	    TweenLite.from('#lineGreen', 3, {
	        drawSVG: "50% 50%",
	        delay: 3
	    });
	    TweenLite.from('#lineYellow', 2, {
	        drawSVG: "50% 50%",
	        delay: 4
	    });
	});
}]);
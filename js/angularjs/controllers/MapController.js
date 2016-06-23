app.controller('MapController', ['$scope', 'characters', function($scope, characters) {
  	characters.success(function(data) {
    	$scope.interv = data;
	});
	angular.element(document).ready(function() {
		TweenLite.from('path', 5, {
	        drawSVG: "50% 50%",
	        delay: 0.2
	    });
		TweenLite.from('circle', 5, {
	        drawSVG: "50% 50%",
	        delay: 0.2
	    });
	});
}]);
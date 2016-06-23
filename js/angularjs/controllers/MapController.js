app.controller('MapController', ['$scope', 'characters', function($scope, characters) {
  	characters.success(function(data) {
    	$scope.interv = data;
	});
	angular.element(document).ready(function() {
		TweenLite.from('.st0', 5, {
	        drawSVG: 0,
	        delay: 0.2
	    });
	    TweenLite.from('.st9', 5, {
	        drawSVG: 0,
	        delay: 0.3
	    });
	    TweenLite.from('.st10', 5, {
	        drawSVG: 0,
	        delay: 0.4
	    });
	    TweenLite.from('.st12', 5, {
	        drawSVG: 0,
	        delay: 0.5
	    });
	    TweenLite.from('.st1', 5, {
	        drawSVG: 0,
	        delay: 0.2
	    });
	    TweenLite.from('.st2', 5, {
	        drawSVG: 0,
	        delay: 0.3
	    });
	    TweenLite.from('.st3', 5, {
	        drawSVG: 0,
	        delay: 0.4
	    });
	    TweenLite.from('.st4', 5, {
	        drawSVG: 0,
	        delay: 0.5
	    });
	    TweenLite.from('.st5', 5, {
	        drawSVG: 0,
	        delay: 0.2
	    });
	    TweenLite.from('.st6', 5, {
	        drawSVG: 0,
	        delay: 0.3
	    });
	    TweenLite.from('.st7', 5, {
	        drawSVG: 0,
	        delay: 0.4
	    });
	    TweenLite.from('.st8', 5, {
	        drawSVG: 0,
	        delay: 0.5
	    });
	    TweenLite.from('.st11', 5, {
	        drawSVG: 0,
	        delay: 0.2
	    });
	});
}]);
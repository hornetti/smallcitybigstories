app.directive('backtoMap', ['$window', function($window) {
	return {
		restrict: 'E',
		templateUrl: 'js/angularjs/directives/backto-map.html',
	    link: function(scope, element, attr) {
	    	angular.element(document).ready(function() {
	    		
	    		var effettoClick = document.getElementById("effectClick");
				effettoClick.volume = 0.03;

	    		element.on('click', function() {
					effettoClick.play();
			    });

				$('#Backto').mouseover(function() {
				    TweenLite.to('.stroke', 1, {
						drawSVG: "50% 50%",
						ease: Expo.easeOut
				    });
				});
				$('#Backto').mouseleave(function() {
				    TweenLite.to('.stroke', 1, {
						drawSVG: "100%",
						ease: Expo.easeOut
				    });
				});
				TweenLite.from('.stroke', 2, {
					drawSVG: "0%",
					ease: Expo.easeOut,
					delay: 2
				});
				TweenLite.from('.txt', 2, {
					opacity: 0,
					ease: Expo.easeOut,
					delay: 1
				});
     
			});
	    }
	};
}]);
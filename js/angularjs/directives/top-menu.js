app.directive('topMenu', function() { 
  	return { 
	    restrict: 'E', 
	    templateUrl: 'js/angularjs/directives/top-menu.html',
	    link: function(scope, element, attr) {
	    	angular.element(document).ready(function() {
				TweenMax.set('.UnderLine', {
					drawSVG: "0%"
				});
				$('.Faenza').mouseover(function() {
					TweenMax.from('.UnderLine', 0.4, {
						drawSVG: "0%",
						ease: Expo.easeOut
					});
					TweenMax.to('.UnderLine', 0.4, {
						drawSVG: "100%",
						ease: Expo.easeOut
					});
				});
				$('.Faenza').mouseleave(function() {
					TweenMax.from('.UnderLine', 0.25, {
						drawSVG: "100%",
						ease: Expo.easeOut
					});
					TweenMax.to('.UnderLine', 0.25, {
						drawSVG: "0%",
						ease: Expo.easeOut
					});
				});
				
			});
	    }
  	};
});

app.directive('legendaMetro', function() {
	return {
		restrict: 'E',
		templateUrl: 'js/angularjs/directives/legenda-metro.html',
	    link: function(scope, element, attr) {
	    	angular.element(document).ready(function() {
				var Legenda = ['#Food','#Mav','#Ptek','#It',]
				TweenMax.staggerFrom(Legenda, 1, {
				    opacity: 0,
				    x: '-10px',
				    ease: Expo.easeOut,
				    force3D: true,
				    delay: 1
				}, 0.25);
			});
	    }
	};
});
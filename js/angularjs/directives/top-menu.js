app.directive('topMenu', function() { 
  	return { 
	    restrict: 'E', 
	    templateUrl: 'js/angularjs/directives/top-menu.html',
	    link: function(scope, element, attr) {
	    	angular.element(document).ready(function() {
	    		
				$('#BacktoFaenza').mouseover(function() {

					TweenMax.to('#Testo1', 0.25, {
						opacity: 0,
						ease: Expo.easeOut
					});

					TweenMax.to('#Testo2', 0.25, {
						opacity: 1,
						ease: Expo.easeIn
					});

				});

				$('#BacktoFaenza').mouseleave(function() {

					TweenMax.to('#Testo1', 0.25, {
						opacity: 1,
						ease: Expo.easeIn
					});

					TweenMax.to('#Testo2', 0.25, {
						opacity: 0,
						ease: Expo.easeOut
					});

				});
				
			});
	    }
  	};
});

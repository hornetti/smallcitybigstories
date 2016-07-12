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
	angular.element(document).ready(function() {
		$('#XBtnTesto').mouseover(function() {
		    TweenLite.to('.stroke', 1, {
				drawSVG: "50% 50%",
				ease: Expo.easeOut
		    });
		});
		$('#XBtnTesto').mouseleave(function() {
		    TweenLite.to('.stroke', 1, {
				drawSVG: "100%",
				ease: Expo.easeOut
		    });
		});
		TweenLite.from('.stroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 3
		});
		TweenLite.from('.txt', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2
		});
	});
}]);
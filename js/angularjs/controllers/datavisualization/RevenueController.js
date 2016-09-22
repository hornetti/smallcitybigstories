app.controller('RevenueController', ['$scope', '$location', function($scope, $location) {
	$scope.currentPath = $location.path();
  	/*** Close Button ***/
	angular.element(document).ready(function() {
		$('#Backto').mouseover(function() {
		    TweenMax.to('.stroke', 1, {
				drawSVG: "50% 50%",
				ease: Expo.easeOut
		    });
		});
		$('#Backto').mouseleave(function() {
		    TweenMax.to('.stroke', 1, {
				drawSVG: "100%",
				ease: Expo.easeOut
		    });
		});
		TweenMax.from('.stroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 3
		});
		TweenMax.from('.txt', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2
		});
		var bars=['.PTEKstatLine', '.ITstatLine', '.MAVstatLine', '.FOODstatLine',];
		TweenMax.from('.GstatLine', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.staggerFrom(bars, 2, {
			drawSVG:0, 
			delay:2, 
			ease:Expo.easeOut, 
			force3D:true
		}, 0.2);
		TweenMax.from(['#DV1NoDataTampieri', '#DV1NoDataBorgini'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2.7
		});
		TweenMax.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.from('.BstatLine', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 2
		});
	});
}]);
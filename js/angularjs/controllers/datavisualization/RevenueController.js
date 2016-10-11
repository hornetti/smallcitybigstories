app.controller('RevenueController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		TweenMax.from('.GstatLine', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});

		var Bars = ['.PTEKstatLine', '.ITstatLine', '.MAVstatLine', '.FOODstatLine'];

		TweenMax.staggerFrom(Bars, 2, {
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
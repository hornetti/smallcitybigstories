app.controller('FoundationController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		TweenMax.from('.GStroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		var Bars = ['.PTEKBars', '.ITBars', '.MAVBars', '.FOODBars'];

		TweenMax.staggerFrom(Bars, 2, {
			drawSVG: 0, 
			delay: 2, 
			ease: Expo.easeOut, 
			force3D: true
		}, 0.2);

		var BarsReading = ['.PTEKLines', '.ITLines', '.MAVLines', '.FOODLines'];

		TweenMax.staggerFrom(BarsReading, 2, {
			drawSVG: 0,
			delay: 1,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);

		TweenMax.from('.Dates', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});

	});
}]);
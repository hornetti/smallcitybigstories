app.controller('FoundationController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		TweenMax.from('.GStroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});

		var Bars = ['.PTEKStroke', '.ITStroke', '.MAVStroke', '.FOODStroke'];

		TweenMax.staggerFrom(Bars, 2, {
			drawSVG: 0, 
			delay: 2, 
			ease: Expo.easeOut, 
			force3D: true
		}, 0.2);


		TweenMax.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		var BarsReading = ['.PTEKStroke', '.ITStroke', '.MAVStroke', '.FOODStroke'];

		TweenMax.staggerFrom(BarsReading, 2, {
			drawSVG: 0,
			delay: 1,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);

		var Dates = ['#DV3DatesPTEK','#DV3DatesIT', '#DV3DatesMAV', '#DV3DatesFOOD'];

		TweenMax.from(Dates, 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});

	});
}]);
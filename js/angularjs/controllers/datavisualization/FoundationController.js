app.controller('FoundationController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		var Bars = ['.PTEKlabel',  '.ITlabel',  '.MAVlabel',  '.FOODlabel'];

		TweenMax.staggerFrom(Bars, 2, {
			drawSVG: 0,
			delay: 1,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);

		var BarsReading = [ '.PTEKreadingLine', '.ITreadingLine', '.MAVreadingLine', '.FOODreadingLine'];

		TweenMax.staggerFrom(BarsReading, 2, {
			drawSVG: 0,
			delay: 1,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);

		var Dates = ['#DV3DatesPTEK','#DV3DatesIT', '#DV3DatesMAV', '#DV3DatesFOOD'];

		TweenLite.from(Dates, 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});

		TweenLite.from('.GstatLine', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0
		});

		TweenLite.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0
		});

	});
}]);
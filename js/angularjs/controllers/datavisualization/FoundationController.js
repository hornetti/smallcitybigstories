app.controller('FoundationController', ['$scope', function($scope) {
	angular.element(document).ready(function() {
		TweenLite.from('.GstatLine', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0
		});
		var bars = ['.PTEKlabel',  '.ITlabel',  '.MAVlabel',  '.FOODlabel'];
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 1,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		var bars_dates = [ '.PTEKreadingLine', '.ITreadingLine', '.MAVreadingLine', '.FOODreadingLine'];
		TweenMax.staggerFrom(bars_dates, 2, {
			drawSVG: 0,
			delay: 1,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		var dates = ['#DV3DatesPTEK','#DV3DatesIT', '#DV3DatesMAV', '#DV3DatesFOOD'];
		TweenLite.from(dates, 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});
		TweenLite.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0
		});
	});
	/**/
}]);
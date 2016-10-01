app.controller('EmployeesController', ['$scope', function($scope) {
	angular.element(document).ready(function() {
		var bars = ['.PTEKstatLine', '.ITstatLine', '.MAVstatLine', '.FOODstatLine', ];
		TweenLite.from('.GstatLine', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenLite.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
		TweenLite.from('.BstatLine', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 2
		});
	});
	/**/
}]);
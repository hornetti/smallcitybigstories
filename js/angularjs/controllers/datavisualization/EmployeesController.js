app.controller('EmployeesController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		TweenMax.from('.GStroke', 2, {
			drawSVG: "0%",
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

		TweenMax.from('.GColor', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

	});
}]);
app.controller('HomeController', ['$scope', function($scope) {
	$scope.ProjectName = "Small city, big stories";
	angular.element(document).ready(function() {
		TweenLite.from('.logo0', 1, {
		  drawSVG: "0%",
		  ease: Expo.easeOut,
		  delay: 1.25
		});
		TweenLite.from('.logo4', 1, {
		  drawSVG: "50% 50%",
		  ease: Expo.easeInOut
		});
		TweenLite.from('.logo6', 1, {
		  drawSVG: "0%",
		  ease: Expo.easeInOut,
		  delay: 0.75
		});
		TweenLite.from('.logo7', 1, {
		  drawSVG: "0%",
		  ease: Expo.easeOut,
		  delay: 1.3
		});
		TweenLite.from('.logo2', 1, {
		  opacity: 0,
		  ease: Expo.easeOut,
		  delay: 1.3
		});
		TweenLite.from('.logo5', 2, {
		  opacity: 0,
		  ease: Expo.easeOut,
		  delay: .5
		});
	});
}]);
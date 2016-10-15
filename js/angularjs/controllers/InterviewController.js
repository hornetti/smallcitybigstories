app.controller('InterviewController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		TweenLite.from('.PTEKreadingLine', 1, {
		  drawSVG: "50% 50%",
		  opacity: 0,
		  ease: Expo.easeOut,
		  delay: 1
		});

		TweenLite.from('.Regular15', 1, {
		  opacity: "0",
		  ease: Expo.easeOut,
		  delay: 2
		});

		TweenMax.set('#pause', {
		  opacity: 0
		});

		$("#structure").accordion({
		    collapsible: true
		});

		$('circle.PTEKreadingLine').mouseover(function() {
		  $(this).css({'fill': '#fff'});
		});

		$('circle.PTEKreadingLine').mouseleave(function() {
		  $(this).css({'fill': 'none'});
		});

	});
}]);
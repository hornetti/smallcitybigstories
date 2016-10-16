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

		/*

		STRUCTURE

		*/

		$("#Structure > circle").click(function() {
			$("#Structure > circle.ActiveCircle").next().removeClass("ActiveEl");
			$("#Structure > circle.ActiveCircle").removeClass("ActiveCircle");
			$(this).next().addClass('ActiveEl');
			$(this).addClass('ActiveCircle');
		});

		$('#Structure > circle').mouseover( function() {
			$("#Structure > circle.ActiveCircle").next().removeClass("ActiveEl");
			$("#Structure > circle.ActiveCircle").removeClass("ActiveCircle");
			$(this).next().addClass('ActiveEl');
			$(this).addClass('ActiveCircle');
		});
		$('#Structure > circle').mouseleave( function() {
			$("#Structure > circle.ActiveCircle").next().removeClass("ActiveEl");
			$("#Structure > circle.ActiveCircle").removeClass("ActiveCircle");
			$(this).next().addClass('ActiveEl');
			$(this).addClass('ActiveCircle');
		});

	});
}]);
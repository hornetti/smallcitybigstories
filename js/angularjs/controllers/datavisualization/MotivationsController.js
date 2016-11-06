app.controller('MotivationsController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

	    var Circles = ['.PTEKCircles', '.ITCircles', '.MAVCircles', '.FOODCircles'];

		TweenMax.from(Circles, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		
		TweenMax.from('.Letters', 2.5, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenMax.from('.Grid' , 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenMax.from('.WLines' , 1, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1.5
		});

		TweenLite.from('#DV6Answers', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenMax.from('#DV6Names', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});
	    /*

		Motivation Data A
		
		*/
		TweenMax.set('#DV6Data1PTEK', {
			opacity: '0'
		});
		TweenMax.set('#DV6Data1MAV', {
			opacity: '0'
		});
		$('#DV6Circ1PTEK').mouseover(function() {
	        $('#DV6Data1PTEK').css({
	          opacity: '1',
	        });
	    });
	    $('#DV6Circ1PTEK').mouseleave(function() {
	        $('#DV6Data1PTEK').css({
	          opacity: '0'
	        });
	    });
	    $('#DV6Circ1MAV').mouseover(function() {
	        $('#DV6Data1MAV').css({
	          opacity: '1'
	        });
	    });
	    $('#DV6Circ1MAV').mouseleave(function() {
	        $('#DV6Data1MAV').css({
	          opacity: '0'
	        });
	    });
	    /*

		Motivation Data B
		
		*/
		TweenMax.set('#DV6Data2PTEK', {
			opacity: '0'
		});
		TweenMax.set('#DV6Data2IT', {
			opacity: '0'
		});
	    $('#DV6Circ2PTEK').mouseover(function() {
	        $('#DV6Data2PTEK').css({
	          opacity: '1'
	        });
	    });
	    $('#DV6Circ2PTEK').mouseleave(function() {
	        $('#DV6Data2PTEK').css({
	          opacity: '0'
	        });
	    });
	    $('#DV6Circ2IT').mouseover(function() {
	        $('#DV6Data2IT').css({
	          opacity: '1'
	        });
	    });
	    $('#DV6Circ2IT').mouseleave(function() {
	        $('#DV6Data2IT').css({
	          opacity: '0'
	        });
	    });
	    /*

		Motivation Data C
		
		*/
		TweenMax.set('#DV6Data3IT', {
			opacity: '0'
		});
	    $('#DV6Circ3IT').mouseover(function() {
	        $('#DV6Data3IT').css({
	          opacity: '1'
	        });
	    });
	    $('#DV6Circ3IT').mouseleave(function() {
	        $('#DV6Data3IT').css({
	          opacity: '0'
	        });
	    });
	    /*

		Motivation Data D

		*/
		TweenMax.set('#DV6Data4PTEK', {
			opacity: '0'
		});
		TweenMax.set('#DV6Data4FOOD', {
			opacity: '0'
		});
		TweenMax.set('#DV6Data4IT', {
			opacity: '0'
		});
	    $('#DV6Circ4PTEK').mouseover(function() {
	        $('#DV6Data4PTEK').css({
	          opacity: '1'
	        });
	    });
	    $('#DV6Circ4PTEK').mouseleave(function() {
	        $('#DV6Data4PTEK').css({
	          opacity: '0'
	        });
	    });
	    $('#DV6Circ4FOOD').mouseover(function() {
	        $('#DV6Data4FOOD').css({
	          opacity: '1'
	        });
	    });
	    $('#DV6Circ4FOOD').mouseleave(function() {
	        $('#DV6Data4FOOD').css({
	          opacity: '0'
	        });
	    });
	    $('#DV6Circ4IT').mouseover(function() {
	        $('#DV6Data4IT').css({
	          opacity: '1'
	        });
	    });
	    $('#DV6Circ4IT').mouseleave(function() {
	        $('#DV6Data4IT').css({
	          opacity: '0'
	        });
	    });

	});
}]);
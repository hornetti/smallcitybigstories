app.controller('MotivationsController', ['$scope', function($scope) {
	angular.element(document).ready(function() {
	    /*

		Data A
		
		*/
		TweenMax.set('#DV4Data1PTEK', {
			opacity: '0'
		});
		TweenMax.set('#DV4Data1MAV', {
			opacity: '0'
		});
		$('#DV4Circ1PTEK').mouseover(function() {
	        $('#DV4Data1PTEK').css({
	          opacity: '1',
	        });
	    });
	    $('#DV4Circ1PTEK').mouseleave(function() {
	        $('#DV4Data1PTEK').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ1MAV').mouseover(function() {
	        $('#DV4Data1MAV').css({
	          opacity: '1'
	        });
	    });
	    $('#DV4Circ1MAV').mouseleave(function() {
	        $('#DV4Data1MAV').css({
	          opacity: '0'
	        });
	    });
	    /*

		Data B
		
		*/
		TweenMax.set('#DV4Data2PTEK', {
			opacity: '0'
		});
		TweenMax.set('#DV4Data2IT', {
			opacity: '0'
		});
	    $('#DV4Circ2PTEK').mouseover(function() {
	        $('#DV4Data2PTEK').css({
	          opacity: '1'
	        });
	    });
	    $('#DV4Circ2PTEK').mouseleave(function() {
	        $('#DV4Data2PTEK').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ2IT').mouseover(function() {
	        $('#DV4Data2IT').css({
	          opacity: '1'
	        });
	    });
	    $('#DV4Circ2IT').mouseleave(function() {
	        $('#DV4Data2IT').css({
	          opacity: '0'
	        });
	    });
	    /*

		Data C
		
		*/
		TweenMax.set('#DV4Data3IT', {
			opacity: '0'
		});
	    $('#DV4Circ3IT').mouseover(function() {
	        $('#DV4Data3IT').css({
	          opacity: '1'
	        });
	    });
	    $('#DV4Circ3IT').mouseleave(function() {
	        $('#DV4Data3IT').css({
	          opacity: '0'
	        });
	    });
	    /*

		Data D

		*/
		TweenMax.set('#DV4Data4PTEK', {
			opacity: '0'
		});
		TweenMax.set('#DV4Data4FOOD', {
			opacity: '0'
		});
		TweenMax.set('#DV4Data4IT', {
			opacity: '0'
		});
	    $('#DV4Circ4PTEK').mouseover(function() {
	        $('#DV4Data4PTEK').css({
	          opacity: '1'
	        });
	    });
	    $('#DV4Circ4PTEK').mouseleave(function() {
	        $('#DV4Data4PTEK').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ4FOOD').mouseover(function() {
	        $('#DV4Data4FOOD').css({
	          opacity: '1'
	        });
	    });
	    $('#DV4Circ4FOOD').mouseleave(function() {
	        $('#DV4Data4FOOD').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ4IT').mouseover(function() {
	        $('#DV4Data4IT').css({
	          opacity: '1'
	        });
	    });
	    $('#DV4Circ4IT').mouseleave(function() {
	        $('#DV4Data4IT').css({
	          opacity: '0'
	        });
	    });
	    /*

		SVG Animation

		*/
	    var Circles = ['.PTEKStroke', '.ITStroke', '.MAVStroke', '.FOODStroke'];

		var Letters = ['#DV4LetterA', '#DV4LetterB', '#DV4LetterC', '#DV4LetterD'];

		TweenMax.from(Circles, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		
		TweenMax.from(Letters, 2.5, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenMax.from('.WStroke' , 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenMax.from('.WStroke' , 1, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1.5
		});

		TweenLite.from('#DV4Answers', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('#DV4Names', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});

	});
}]);
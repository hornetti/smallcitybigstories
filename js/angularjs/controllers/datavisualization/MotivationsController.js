app.controller('MotivationsController', ['$scope', '$location', function($scope, $location) {
	$scope.currentPath = $location.path();
  	/*** Close Button ***/
	angular.element(document).ready(function() {
		$('#Backto').mouseover(function() {
		    TweenLite.to('.stroke', 1, {
				drawSVG: "50% 50%",
				ease: Expo.easeOut
		    });
		});
		$('#Backto').mouseleave(function() {
		    TweenLite.to('.stroke', 1, {
				drawSVG: "100%",
				ease: Expo.easeOut
		    });
		});
		TweenLite.from('.stroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 3
		});
		TweenLite.from('.txt', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2
		});
		/* ptek */
		TweenMax.set('#DV4Data1PTEK', {
			opacity: '0'
		});
	    $('#DV4Circ1PTEK').mouseover(function() {
	        $('#DV4Data1PTEK').css({
	          opacity: '1',
	        });
	        $('#DV4LetterA').css({
	          opacity: '0'
	          
	        });
	    });
	    $('#DV4Circ1PTEK').mouseleave(function() {
	        $('#DV4Data1PTEK').css({
	          opacity: '0'
	        });
	        $('#DV4LetterA').css({
	          opacity: '1'
	        });
	    });
	  	/* food */
		TweenMax.set('#DV4Data1FOOD', {
			opacity: '0'
		});
	    $('#DV4Circ1FOOD').mouseover(function() {
	        $('#DV4Data1FOOD').css({
	          opacity: '1'
	        });
	        $('#DV4LetterA').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ1FOOD').mouseleave(function() {
	        $('#DV4Data1FOOD').css({
	          opacity: '0'
	        });
	        $('#DV4LetterA').css({
	          opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV4Data1IT', {
			opacity: '0'
		});
	    $('#DV4Circ1IT').mouseover(function() {
	        $('#DV4Data1IT').css({
	          opacity: '1'
	        });
	        $('#DV4LetterA').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ1IT').mouseleave(function() {
	        $('#DV4Data1IT').css({
	          opacity: '0'
	        });
	        $('#DV4LetterA').css({
	          opacity: '1'
	        });
	    });
	  	/* mav */
		TweenMax.set('#DV4Data1MAV', {
			opacity: '0'
		});
	    $('#DV4Circ1MAV').mouseover(function() {
	        $('#DV4Data1MAV').css({
	          opacity: '1'
	        });
	        $('#DV4LetterA').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ1MAV').mouseleave(function() {
	        $('#DV4Data1MAV').css({
	          opacity: '0'
	        });
	        $('#DV4LetterA').css({
	          opacity: '1'
	        });
	    });
	  	/* ptek */
		TweenMax.set('#DV4Data2PTEK', {
			opacity: '0'
		});
	    $('#DV4Circ2PTEK').mouseover(function() {
	        $('#DV4Data2PTEK').css({
	          opacity: '1'
	        });
	        $('#DV4LetterB').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ2PTEK').mouseleave(function() {
	        $('#DV4Data2PTEK').css({
	          opacity: '0'
	        });
	        $('#DV4LetterB').css({
	          opacity: '1'
	        });
	    });
	 	 /* food */
		TweenMax.set('#DV4Data2FOOD', {
			opacity: '0'
		});
	    $('#DV4Circ2FOOD').mouseover(function() {
	        $('#DV4Data2FOOD').css({
	          opacity: '1'
	        });
	        $('#DV4LetterB').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ2FOOD').mouseleave(function() {
	        $('#DV4Data2FOOD').css({
	          opacity: '0'
	        });
	        $('#DV4LetterB').css({
	          opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV4Data2IT', {
			opacity: '0'
		});
	    $('#DV4Circ2IT').mouseover(function() {
	        $('#DV4Data2IT').css({
	          opacity: '1'
	        });
	        $('#DV4LetterB').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ2IT').mouseleave(function() {
	        $('#DV4Data2IT').css({
	          opacity: '0'
	        });
	        $('#DV4LetterB').css({
	          opacity: '1'
	        });
	    });
	  	/* mav */
		TweenMax.set('#DV4Data2MAV', {
			opacity: '0'
		});
	    $('#DV4Circ2MAV').mouseover(function() {
	        $('#DV4Data2MAV').css({
	          opacity: '1'
	        });
	        $('#DV4LetterB').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ2MAV').mouseleave(function() {
	        $('#DV4Data2MAV').css({
	          opacity: '0'
	        });
	        $('#DV4LetterB').css({
	          opacity: '1'
	        });
	    });
	  	/* ptek */
		TweenMax.set('#DV4Data3PTEK', {
			opacity: '0'
		});
	    $('#DV4Circ3PTEK').mouseover(function() {
	        $('#DV4Data3PTEK').css({
	          opacity: '1'
	        });
	        $('#DV4LetterC').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ3PTEK').mouseleave(function() {
	        $('#DV4Data3PTEK').css({
	          opacity: '0'
	        });
	        $('#DV4LetterC').css({
	          opacity: '1'
	        });
	    });
	  	/* food */
		TweenMax.set('#DV4Data3FOOD', {
			opacity: '0'
		});
	    $('#DV4Circ3FOOD').mouseover(function() {
	        $('#DV4Data3FOOD').css({
	          opacity: '1'
	        });
	        $('#DV4LetterC').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ3FOOD').mouseleave(function() {
	        $('#DV4Data3FOOD').css({
	          opacity: '0'
	        });
	        $('#DV4LetterC').css({
	          opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV4Data3IT', {
			opacity: '0'
		});
	    $('#DV4Circ3IT').mouseover(function() {
	        $('#DV4Data3IT').css({
	          opacity: '1'
	        });
	        $('#DV4LetterC').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ3IT').mouseleave(function() {
	        $('#DV4Data3IT').css({
	          opacity: '0'
	        });
	        $('#DV4LetterC').css({
	          opacity: '1'
	        });
	    });
	 	 /* mav */
		TweenMax.set('#DV4Data3MAV', {
			opacity: '0'
		});
	    $('#DV4Circ3MAV').mouseover(function() {
	        $('#DV4Data3MAV').css({
	          opacity: '1'
	        });
	        $('#DV4LetterC').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ3MAV').mouseleave(function() {
	        $('#DV4Data3MAV').css({
	          opacity: '0'
	        });
	        $('#DV4LetterC').css({
	          opacity: '1'
	        });
	    });
	 	 /* ptek */
		TweenMax.set('#DV4Data4PTEK', {
			opacity: '0'
		});
	    $('#DV4Circ4PTEK').mouseover(function() {
	        $('#DV4Data4PTEK').css({
	          opacity: '1'
	        });
	        $('#DV4LetterD').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ4PTEK').mouseleave(function() {
	        $('#DV4Data4PTEK').css({
	          opacity: '0'
	        });
	        $('#DV4LetterD').css({
	          opacity: '1'
	        });
	    });
	  	/* food */
		TweenMax.set('#DV4Data4FOOD', {
			opacity: '0'
		});
	    $('#DV4Circ4FOOD').mouseover(function() {
	        $('#DV4Data4FOOD').css({
	          opacity: '1'
	        });
	        $('#DV4LetterD').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ4FOOD').mouseleave(function() {
	        $('#DV4Data4FOOD').css({
	          opacity: '0'
	        });
	        $('#DV4LetterD').css({
	          opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV4Data4IT', {
			opacity: '0'
		});
	    $('#DV4Circ4IT').mouseover(function() {
	        $('#DV4Data4IT').css({
	          opacity: '1'
	        });
	        $('#DV4LetterD').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ4IT').mouseleave(function() {
	        $('#DV4Data4IT').css({
	          opacity: '0'
	        });
	        $('#DV4LetterD').css({
	          opacity: '1'
	        });
	    });
	  	/* mav */
		TweenMax.set('#DV4Data4MAV', {
			opacity: '0'
		});
	    $('#DV4Circ4MAV').mouseover(function() {
	        $('#DV4Data4MAV').css({
	          opacity: '1'
	        });
	        $('#DV4LetterD').css({
	          opacity: '0'
	        });
	    });
	    $('#DV4Circ4MAV').mouseleave(function() {
	        $('#DV4Data4MAV').css({
	          opacity: '0'
	        });
	        $('#DV4LetterD').css({
	          opacity: '1'
	        });
	    });    
		/* */
		var circles = ['.PTEKCircle', '.FOODCircle', '.ITCircle', '.MAVCircle'];
		var letters = ['#DV4LetterA', '#DV4LetterB', '#DV4LetterC', '#DV4LetterD'];
		var stats = ['.PTEKstatLine', '.ITstatLine', '.PTEKstatLineAux', '.ITstatLineAux','.MAVstatLine', '.FOODstatLine'];
		TweenMax.from(circles, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenMax.from(stats, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1.5
		});
		TweenMax.from('.Grid2' , 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenMax.from(letters, 2.5, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenLite.from('#DV4Answers', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenMax.from(['#DV4Names', '#DV4LegendLeft'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});
	});
}]);
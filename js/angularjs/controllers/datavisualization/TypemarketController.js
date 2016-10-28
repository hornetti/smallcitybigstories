app.controller('TypemarketController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

		TweenMax.from('.GStroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenLite.from('.GColor', 2, {
			opacity: 0,
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

	    var Circles = ['.PTEKCircles', '.ITCircles', '.MAVCircles', '.FOODCircles'];

		TweenMax.from(Circles, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});

		var Letters = ['#DV7Letter1', '#DV7Letter2', '#DV7Letter3'];

		TweenMax.from(Letters, 2.5, {
		  opacity: 0,
		  ease: Expo.easeOut,
		  delay: 0.5
		});
		
		TweenLite.from('#DV7Answers', 2, {
		  opacity: 0,
		  ease: Expo.easeOut,
		  delay: 0.5
		});
		
		TweenMax.from(['#DV7Names', '#DV7LegendLeft'], 2, {
		  opacity: 0,
		  ease: Expo.easeOut,
		  delay: 1.5
		});


		/* ptek */
		TweenMax.set('#DV7Data3PTEK', {
			opacity: '0'
		});
	    $('#DV7Circ1PTEK').mouseover(function() {
	        $('#DV7Data3PTEK').css({
	          opacity: '1'
	        });
	        $('#DV7Letter3').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ1PTEK').mouseleave(function() {
	        $('#DV7Data3PTEK').css({
	          opacity: '0'
	        });
	        $('#DV7Letter3').css({
	          opacity: '1'
	        });
	    });
	  	/* food */
		TweenMax.set('#DV7Data3FOOD', {
				opacity: '0'
			});
	    $('#DV7Circ1FOOD').mouseover(function() {
	        $('#DV7Data3FOOD').css({
	          opacity: '1'
	        });
	        $('#DV7Letter3').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ1FOOD').mouseleave(function() {
	        $('#DV7Data3FOOD').css({
	          opacity: '0'
	        });
	        $('#DV7Letter3').css({
	          opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV7Data3IT', {
				opacity: '0'
			});
	    $('#DV7Circ1IT').mouseover(function() {
	        $('#DV7Data3IT').css({
	          opacity: '1'
	        });
	        $('#DV7Letter3').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ1IT').mouseleave(function() {
	        $('#DV7Data3IT').css({
	          opacity: '0'
	        });
	        $('#DV7Letter3').css({
	          opacity: '1'
	        });
	    });
	  	/* mav */
		TweenMax.set('#DV7Data3MAV', {
				opacity: '0'
			});
	    $('#DV7Circ1MAV').mouseover(function() {
	        $('#DV7Data3MAV').css({
	          opacity: '1'
	        });
	        $('#DV7Letter3').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ1MAV').mouseleave(function() {
	        $('#DV7Data3MAV').css({
	          opacity: '0'
	        });
	        $('#DV7Letter3').css({
	          opacity: '1'
	        });
	    });
	  	/* ptek */
		TweenMax.set('#DV7Data2PTEK', {
				opacity: '0'
			});
	    $('#DV7Circ2PTEK').mouseover(function() {
	        $('#DV7Data2PTEK').css({
	          opacity: '1'
	        });
	        $('#DV7Letter2').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ2PTEK').mouseleave(function() {
	        $('#DV7Data2PTEK').css({
	          opacity: '0'
	        });
	        $('#DV7Letter2').css({
	          opacity: '1'
	        });
	    });
		/* food */
		TweenMax.set('#DV7Data2FOOD', {
				opacity: '0'
			});
	    $('#DV7Circ2FOOD').mouseover(function() {
	        $('#DV7Data2FOOD').css({
	          opacity: '1'
	        });
	        $('#DV7Letter2').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ2FOOD').mouseleave(function() {
	        $('#DV7Data2FOOD').css({
	          opacity: '0'
	        });
	        $('#DV7Letter2').css({
	          opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV7Data2IT', {
				opacity: '0'
			});
	    $('#DV7Circ2IT').mouseover(function() {
	        $('#DV7Data2IT').css({
	          opacity: '1'
	        });
	        $('#DV7Letter2').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ2IT').mouseleave(function() {
	        $('#DV7Data2IT').css({
	          opacity: '0'
	        });
	        $('#DV7Letter2').css({
	          opacity: '1'
	        });
	    });
	  	/* mav */
		TweenMax.set('#DV7Data2MAV', {
				opacity: '0'
			});
	    $('#DV7Circ2MAV').mouseover(function() {
	        $('#DV7Data2MAV').css({
	          opacity: '1'
	        });
	        $('#DV7Letter2').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ2MAV').mouseleave(function() {
	        $('#DV7Data2MAV').css({
	          opacity: '0'
	        });
	        $('#DV7Letter2').css({
	          opacity: '1'
	        });
	    });
	  	/* ptek */
		TweenMax.set('#DV7Data1PTEK', {
				opacity: '0'
			});
	    $('#DV7Circ3PTEK').mouseover(function() {
	        $('#DV7Data1PTEK').css({
	          opacity: '1'
	        });
	        $('#DV7Letter1').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ3PTEK').mouseleave(function() {
	        $('#DV7Data1PTEK').css({
	          opacity: '0'
	        });
	        $('#DV7Letter1').css({
	          opacity: '1'
	        });
	    });
	  	/* food */
		TweenMax.set('#DV7Data1FOOD', {
				opacity: '0'
			});
	    $('#DV7Circ3FOOD').mouseover(function() {
	        $('#DV7Data1FOOD').css({
	          opacity: '1'
	        });
	        $('#DV7Letter1').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ3FOOD').mouseleave(function() {
	        $('#DV7Data1FOOD').css({
	          opacity: '0'
	        });
	        $('#DV7Letter1').css({
	          opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV7Data1IT', {
				opacity: '0'
			});
	    $('#DV7Circ3IT').mouseover(function() {
	        $('#DV7Data1IT').css({
	          opacity: '1'
	        });
	        $('#DV7Letter1').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ3IT').mouseleave(function() {
	        $('#DV7Data1IT').css({
	          opacity: '0'
	        });
	        $('#DV7Letter1').css({
	          opacity: '1'
	        });
	    });
	  	/* mav */
		TweenMax.set('#DV7Data1MAV', {
				opacity: '0'
			});
	    $('#DV7Circ3MAV').mouseover(function() {
	        $('#DV7Data1MAV').css({
	          opacity: '1'
	        });
	        $('#DV7Letter1').css({
	          opacity: '0'
	        });
	    });
	    $('#DV7Circ3MAV').mouseleave(function() {
	        $('#DV7Data1MAV').css({
	          opacity: '0'
	        });
	        $('#DV7Letter1').css({
	          opacity: '1'
	        });
	    });

	});
}]);
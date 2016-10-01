app.controller('RefmarketController', ['$scope', function($scope) {
	angular.element(document).ready(function() {
		/* ptek */
		TweenMax.set('#DV5Data1PTEK', {
			opacity: '0'
		});
	    $('#DV5Circ1PTEK').mouseover(function() {
	        $('#DV5Data1PTEK').css({
				opacity: '1'
	        });
	        $('#italia').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ1PTEK').mouseleave(function() {
	        $('#DV5Data1PTEK').css({
				opacity: '0'
	        });
	        $('#italia').css({
				opacity: '1'
	        });
	    });
	  	/* food */
		TweenMax.set('#DV5Data1FOOD', {
			opacity: '0'
		});
	    $('#DV5Circ1FOOD').mouseover(function() {
	        $('#DV5Data1FOOD').css({
				opacity: '1'
	        });
	        $('#italia').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ1FOOD').mouseleave(function() {
	        $('#DV5Data1FOOD').css({
				opacity: '0'
	        });
	        $('#italia').css({
				opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV5Data1IT', {
			opacity: '0'
		});
	    $('#DV5Circ1IT').mouseover(function() {
	        $('#DV5Data1IT').css({
				opacity: '1'
	        });
	        $('#italia').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ1IT').mouseleave(function() {
	        $('#DV5Data1IT').css({
				opacity: '0'
	        });
	        $('#italia').css({
				opacity: '1'
	        });
	    });
	 	 /* mav */
		TweenMax.set('#DV5Data1MAV', {
			opacity: '0'
		});
	    $('#DV5Circ1MAV').mouseover(function() {
	        $('#DV5Data1MAV').css({
				opacity: '1'
	        });
	        $('#italia').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ1MAV').mouseleave(function() {
	        $('#DV5Data1MAV').css({
				opacity: '0'
	        });
	        $('#italia').css({
				opacity: '1'
	        });
	    });
	  	/* ptek */
		TweenMax.set('#DV5Data2PTEK', {
			opacity: '0'
		});
	    $('#DV5Circ2PTEK').mouseover(function() {
	        $('#DV5Data2PTEK').css({
				opacity: '1'
	        });
	        $('#estero').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ2PTEK').mouseleave(function() {
	        $('#DV5Data2PTEK').css({
				opacity: '0'
	        });
	        $('#estero').css({
				opacity: '1'
	        });
	    });
	  	/* food */
		TweenMax.set('#DV5Data2FOOD', {
			opacity: '0'
		});
	    $('#DV5Circ2FOOD').mouseover(function() {
	        $('#DV5Data2FOOD').css({
				opacity: '1'
	        });
	        $('#estero').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ2FOOD').mouseleave(function() {
	        $('#DV5Data2FOOD').css({
				opacity: '0'
	        });
	        $('#estero').css({
				opacity: '1'
	        });
	    });
	  	/* it */
		TweenMax.set('#DV5Data2IT', {
			opacity: '0'
		});
	    $('#DV5Circ2IT').mouseover(function() {
	        $('#DV5Data2IT').css({
				opacity: '1'
	        });
	        $('#estero').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ2IT').mouseleave(function() {
	        $('#DV5Data2IT').css({
				opacity: '0'
	        });
	        $('#estero').css({
				opacity: '1'
	        });
	    });
	 	 /* mav */
		TweenMax.set('#DV5Data2MAV', {
			opacity: '0'
		});
	    $('#DV5Circ2MAV').mouseover(function() {
	        $('#DV5Data2MAV').css({
				opacity: '1'
	        });
	        $('#estero').css({
				opacity: '0'
	        });
	    });
	    $('#DV5Circ2MAV').mouseleave(function() {
	        $('#DV5Data2MAV').css({
				opacity: '0'
	        });
	        $('#estero').css({
				opacity: '1'
	        });
	    });
	    var circles = ['.PTEKCircle', '.FOODCircle', '.ITCircle', '.MAVCircle','.GlobalLocal'];
		TweenMax.from(circles, 3, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenMax.from(['.PTEKstatLine', '.PTEKstatLineAux', '.ITstatLine', '.ITstatLineAux', '.MAVstatLine', '.MAVstatLineAux', '.FOODstatLine'], 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1.5
		});
		TweenMax.from('.Grid2' , 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenMax.from(['#DV5Answers'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenMax.from(['#DV5Names', '#DV5LegendLeft'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});
	});
}]);
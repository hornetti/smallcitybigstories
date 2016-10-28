app.controller('RefmarketController', ['$scope', function($scope) {
	angular.element(document).ready(function() {

	    var Circles = ['.PTEKCircles', '.ITCircles', '.MAVCircles', '.FOODCircles'];

		TweenMax.from(Circles, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenMax.from('.GStroke', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('.GColor', 2, {
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

		TweenMax.from('.WLines' , 1, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1.5
		});

		TweenMax.from('#DV5Answers', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.5
		});

		TweenMax.from(['#DV5Names', '#DV5LegendLeft'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1.5
		});
		/*

		Data Italy
		
		*/
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
	    /*

		Data World
		
		*/
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

	});
}]);
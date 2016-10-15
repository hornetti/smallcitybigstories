app.controller('ProfileController', ['$scope', function($scope) {

	$scope.Link_Revenue = 'map/revenue';
	
	$scope.Link_Employees = 'map/employees';
	
	$scope.Link_Foundation = 'map/foundation';
	
	$scope.Link_Motivation = 'map/motivations';
	
	$scope.Link_Market = 'map/reference_market';
	
	$scope.Link_Growth = 'map/economic_growth';
	
	$scope.Link_Type = 'map/type_market';
	
	$scope.legends = [
    	{
    		element : " A — C'erano occasioni che andavano colte"
    	},
    	{
    		element : "B — È frutto di un'idea personale"
    	},
    	{
    		element : "C — A seguito di una competenza specifica"
    	},
    	{
    		element : "D — A seguito di una passione da coltivare"
    	}
    ];

    $scope.Startup = "* startup non soggetta a fatturazione diretta";

    $scope.Artigiano = "* artigiano non soggetto a fatturazione diretta";

  	/*
  	
  	Counter Number Profile

  	*/

	angular.element(document).ready(function() {

		$('.count').each(function () {
		    $(this).prop('Counter', 0).animate({
		        Counter: $(this).text()
		    }, {
		        duration: 2000,
		        easing: 'swing',
		        delay: 1.5,
		        step: function (now) {
		            $(this).text(Math.ceil(now));
		        }
		    });
		});

		/*

		ANIMATION SERVICE

		*/

		var Stroke = ['.Stroke5px', '.Stroke2px','.Stroke5pxLinejoinbevel', '.Stroke5pxLinejoinround', '.Stroke5pxLinecap'];

		TweenMax.staggerFrom(Stroke, 2, {
		    drawSVG: 0, 
		    delay: 0,
		    ease: Expo.easeOut,
		    force3D: true
		}, 0.5);

		/*

		COMING SOON

		*/
		
	    TweenMax.fromTo('.ITstatLine', 2, {
	        drawSVG:"100% 100%"
	    }, {
        	drawSVG:"0% 100%",
        	ease: Expo.easeOut,
        	delay: 0.1
	    });

		TweenMax.fromTo('.ITstatLine', 2, {
			drawSVG:"0% 0%"
		}, {
			drawSVG:"0% 100% ", 
			ease: Expo.easeOut, 
			delay: 0.1
		});

		TweenMax.from('.Regular21', 1.5, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 0.4 
		});
		/*
		
		MORPHSVG
	
		*/
		TweenLite.from('#frame', 2, {
			drawSVG: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('#testo', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('#img', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('#pre', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.set('#circle', {
			drawSVG: 0,
			opacity: 0
		});

		$('.Poster').mouseover(function() {
		    TweenMax.to("#pre", 0.5, {
		        morphSVG: "#hover",
		        ease: Expo.easeInOut
		    });
		    TweenMax.to("#testo", 0.5, {
		        opacity: 0,
		        ease: Expo.easeInOut
		    });
		    TweenMax.to("#circle", 0.5, {
		        drawSVG: '100%',
		        opacity: 1,
		        delay: 0.5
		    });
		});
		$('.Poster').mouseleave(function() {
		    TweenMax.to("#pre", 0.5, {
				morphSVG: "#pre",
				ease: Expo.easeInOut
		    });
		    TweenMax.to("#testo", 1, {
				opacity: 1,
				ease: Expo.easeInOut
		    });
		    TweenMax.to("#circle", 0.2, {
				drawSVG: 0
		    });
		});

	});
}]);
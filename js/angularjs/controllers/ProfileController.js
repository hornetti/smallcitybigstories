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

		ANIMATION SVG

		*/
		
		TweenMax.from('.ElemSVG', 2, {
		    drawSVG: 0, 
		    delay: 0,
		    ease: "Expo.easeOut",
		    force3D: true
		}, 0.5);

		/*

		ANIMATION PTEK

		*/

		$('.ServicePTEK').mouseover(function() {
			$('.ServicePTEK > div > p').text('Progettazione tecnologica');
		});
		$('.ServicePTEK').mouseleave(function() {
			$('.ServicePTEK > div > p').text('Tipologia di servizio prodotto');
		});

		/*

		ANIMATION MAV

		*/

		$('.ServiceMAV').mouseover(function() {
			$('.ServiceMAV > div > p').text('Materiali avanzati');
		});
		$('.ServiceMAV').mouseleave(function() {
			$('.ServiceMAV > div > p').text('Tipologia di servizio prodotto');
		});

		/*

		ANIMATION FOOD

		*/

		$('.ServiceFOOD').mouseover(function() {
			$('.ServiceFOOD > div > p').text('Food');
		});
		$('.ServiceFOOD').mouseleave(function() {
			$('.ServiceFOOD > div > p').text('Tipologia di servizio prodotto');
		});

		/*

		ANIMATION IT

		*/

		$('.ServiceIT').mouseover(function() {
			$('.ServiceIT > div > p').text('Servizi digitali');
		});
		$('.ServiceIT').mouseleave(function() {
			$('.ServiceIT > div > p').text('Tipologia di servizio prodotto');
		});

		/*
		
		PREVIEW INTERVIEW
	
		*/

		TweenMax.from('.PrewBorder', 2, {
	    	drawSVG: "0%",
	    	ease: Expo.easeOut,
	    	delay: 1
		});

		TweenMax.from('.PrewTesto', 2, {
			opacity: "0",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('#PrewImg', 2, {
			opacity: "0",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.from('.PrewBorderTesto', 2, {
			opacity: "0",
			ease: Expo.easeOut,
			delay: 1
		});

		TweenMax.set('.PrewCircle', {
			drawSVG: "0%"
		});

		$('#Poster').mouseover(function() {

			TweenMax.to('.PrewBorderTesto', 0.5, {
				morphSVG: ".PrewPlay",
				ease: Expo.easeInOut
			});

			TweenMax.to('.PrewTesto', 0.5, {
				opacity: 0,
				ease: Expo.easeInOut,
			});

			TweenMax.to('.PrewCircle', 0.7, {
				drawSVG: "100%",
				opacity: 1,
				delay: 0.1
			});

		});

		$('#Poster').mouseleave(function() {

			TweenMax.to('.PrewBorderTesto', 0.5, {
				morphSVG: ".PrewBorderTesto",
				ease: Expo.easeInOut
			});

			TweenMax.to('.PrewTesto', 0.5, {
				opacity: 1,
				ease: Expo.easeInOut
			});

			TweenMax.to('.PrewCircle', 0.3, {
				drawSVG: '0%',
				opacity: 0,
				delay: 0.1    
			});

		});

	});
}]);
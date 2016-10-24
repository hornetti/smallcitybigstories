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

		var Stroke = ['.Stroke5px', '.Stroke2px', '.Stroke5pxLinejoinbevel', '.Stroke5pxLinejoinround', '.Stroke5pxLinecap'];

		TweenMax.staggerFrom(Stroke, 2, {
		    drawSVG: 0, 
		    delay: 0,
		    ease: "Expo.easeOut",
		    force3D: true
		}, 0.5);

		/*

		COMING SOON

		*/
		
	    TweenMax.fromTo('.ITstatLine', 2, {
	        drawSVG:"100% 100%"
	    }, {
        	drawSVG:"0% 100%",
        	ease: "Expo.easeOut",
        	delay: 0.1
	    });

		TweenMax.fromTo('.ITstatLine', 2, {
			drawSVG:"0% 0%"
		}, {
			drawSVG:"0% 100% ", 
			ease: "Expo.easeOut", 
			delay: 0.1
		});

		TweenMax.from('.Regular21', 1.5, {
			opacity: 0,
			ease: "Expo.easeOut",
			delay: 0.4 
		});

		/*
		
		PREVIEW INTERVIEW
	
		*/

		TweenMax.from('#BorderVideo', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.from('#TestoVideo', 2, {
			opacity: "0",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.from('#PreviewVideo', 2, {
			opacity: "0",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.from('#BorderTestoVideo', 2, {
			opacity: "0",
			ease: Expo.easeOut,
			delay: 1
		});
		$('#Poster').mouseover(function() {
			$('#ContainerOver').html('<circle id="CircleVideo" class="Stroke2pxInherit" cx="285" cy="161" r="44.9"/>');
			$('#ContainerOver').html('<path id="PlayVideo" class="PTEKColor" d="M270,184.3l1-23.6l-1-22.9l40.3,23.3L270,184.3z M275,146.4l1,14.4l-1,14.9l25.3-14.6L275,146.4z" />');
			$('#BorderTestoVideo').remove();
			$('#TestoVideo').remove();
		});
		$('#Poster').mouseleave(function() {
			$('#CircleVideo').remove();
			$('#PlayVideo').remove();
			$('#ContainerStand').html('<path id="BorderTestoVideo" class="PTEKColor" d="M358,187H212v-53h146V187z M214,185h142v-49H214V185z"/>');
			$('#ContainerStand').html('<text id="TestoVideo" transform="matrix(1 0 0 1 220.6211 156.6826)"><tspan x="0" y="0" class="PTEKColor Bold15">Clicca per vedere</tspan><tspan x="24.7" y="18" class="PTEKColor Bold15">l’intervista</tspan></text>');
		});

	});
}]);
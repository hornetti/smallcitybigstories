app.controller('MapController', ['$scope', function($scope) {

	angular.element(document).ready(function() {

		TweenMax.from('#Metro', 1, {
		    opacity: 0,
		    delay: 0.5
		});

		TweenMax.from('#MetroMap', 1, {
		    opacity: 0,
		    delay: 0.5
		});

		TweenMax.from('#lineYellow', 1.5, {
		    opacity: 0,
		    delay: 1.25
		});

		TweenMax.from('#lineGreen', 1.5, {
		    opacity: 0,
		    delay: 1.50
		});

		TweenMax.from('#lineBlue', 1.5, {
		    opacity: 0,
		    delay: 1.75
		});

		TweenMax.from('#lineRed', 1.5, {
		    opacity: 0,
		    delay: 2
		});

		/*  Mouseover & mouseleave on #interviewed  */
		
		var effettoHover = document.getElementById("effectHover");
		effettoHover.volume = 0.2;
		var effettoClickMetro = document.getElementById("effectClickMetro");
		effettoClickMetro.volume = 0.08;

	    $("#fillSavorani").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<path class='Round10px MAVStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>	<path class='Round10px MAVStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Savorani'>	<polygon class='G33Color' points='60.9,116 137,116 137,142.4 128.7,150.8 119.5,146.1 77.3,146.3 67.9,150.8 60.7,143.4 	'/>	<g>		<path class='Gb3Color' d='M123.3,124.6l-22.3-2.9l-22.6,2.9l1.8,26.2L49.5,164c13.1,12.7,30.9,20.5,50.5,20.5c19.8,0,37.8-8,50.9-21			l-29.6-12.8L123.3,124.6z'/>	</g>	<g>		<path class='G33Color' d='M48.1,162.5c8.2,8.4,18.5,14.9,29.9,18.6V151L48.1,162.5z'/>		<path class='G33Color' d='M123.8,180.5c11-3.2,20.5-9.5,28.5-18.4l-28.7-11.2L123.8,180.5z'/>	</g>	<polygon class='GccColor' points='69.7,112.6 67.5,114.6 65,113.8 64.1,111.6 66.2,102.7 68.3,99.6 	'/>	<polygon class='GccColor' points='129.6,112.6 131.8,114.6 134.4,113.8 135.2,111.6 133.1,102.7 131,99.6 	'/>	<polygon class='GccColor' points='101.1,40 103.2,40 110.9,41.5 119.3,45.6 129.7,56.5 133,71.1 131.9,112.7 128.2,121.7 118.5,132.2 		110.6,137.6 101.2,140 98.9,140 89.6,137.6 81.6,132.2 72,121.7 70.1,114.6 64.1,74.1 70.4,56.5 80.8,45.7 89.2,41.5 96.9,40 		99,40 	'/>	<polygon class='G3dColor' points='157.8,118.1 168,107.8 168,99.8 162,93.6 162,67 151,56.6 151,44.4 141.6,34 134.8,34 130.6,31 		126,31 118.7,23 101.1,23 99.8,24.5 98.4,23 80.7,23 73.5,31 68.8,31 64.7,34 57.9,34 48,44.4 48,56.6 38,67 38,93.6 32,99.8 		32,107.8 42.2,118.1 31,129.3 31,147.4 36.3,154 59.5,154 71,142.8 71,113.9 68,110.7 68,99.8 68,79.5 67.7,77.1 67.9,66.2 		70,64.3 70,57.9 84.4,43 95,43 105,43 115,43 130,57.9 130,64.3 131.9,66.2 132.4,77.1 132,79.5 132,99.8 132,111.4 129,114.6 		129,142.8 140,154 163.2,154 169,147.4 169,129.3 	'/>	<polygon class='G3dColor' points='84.2,113.3 86,116 99,116 99,117 85.9,117 	'/>	<polygon class='G3dColor' points='113,113.3 111.2,116 99,116 99,117 111.4,117 	'/>	<polygon class='G3dColor' points='72.2,84 74,84.4 75.8,82.5 78.2,80.6 81.5,80 84,80.1 86.4,80.9 89,81.6 91,83 90.2,83.4 92.4,83.2 		89.3,81.3 86.7,80.5 84.1,79.5 81.5,79.5 78.1,80.1 75.4,82.3 74,83.8 	'/>	<polygon class='G8eColor' points='75.4,80.5 77,78.9 80,77.3 81.6,76.9 83.9,76.9 86.1,77.4 87.5,77.9 89.3,79.4 87.3,78.4 86,77.8 		83.8,77.2 81.5,77.2 80.1,77.5 77,79.2 	'/>	<polygon class='G8eColor' points='73.8,88 76.3,86.9 78.6,87 82.5,87.6 86.6,86.3 89.6,85.1 86.7,86.9 82.6,88.4 78.6,87.6 76.2,87.4 			'/>	<circle class='G3dColor' cx='82.2' cy='82.2' r='2.5'/>	<polygon class='G3dColor' points='91.8,69.4 93.1,71.1 92.3,72.6 87.1,72.5 81.4,71.8 77.9,72.2 74.6,72.8 70.6,75.3 74.4,70.3 		79.1,68.9 83,68.5 	'/>	<polygon class='G8eColor' points='98.3,104 96.6,104 96.1,102.4 95.5,100.9 94.1,100.5 93,101 93,102.1 94,102.6 94,103.2 93.2,103.3 		91.9,103.3 91,102.5 90.2,100.7 90.3,99.3 91,97.8 92,96.7 93.6,96.1 94.2,95.2 95,92.7 94.8,95.2 93.8,96.4 92.2,97.1 91.3,98.1 		90.8,99.3 90.7,100.6 91.5,102.2 91.9,102.8 93.4,102.9 93,102.6 92.3,102.3 92.5,100.7 94,100 95.7,100.4 96.5,102.2 96.9,103.5 			'/>	<polygon class='G3dColor' points='124.8,84 122.9,84.4 121.1,82.5 118.7,80.6 115.4,80 112.9,80.1 110.5,80.9 108,81.6 105.9,83 		106.7,83.4 104.5,83.2 107.6,81.3 110.2,80.5 112.9,79.5 115.4,79.5 118.8,80.1 121.5,82.3 122.9,83.8 	'/>	<polygon class='G8eColor' points='123.1,88 120.6,86.9 118.3,87 114.4,87.6 110.3,86.3 107.3,85.1 110.2,86.9 114.3,88.4 118.3,87.6 		120.7,87.4 	'/>	<circle class='G3dColor' cx='114.7' cy='82.2' r='2.5'/>	<polygon class='G3dColor' points='105.2,69.4 103.8,71.1 104.6,72.6 109.8,72.5 115.5,71.8 119.1,72.2 122.3,72.8 126.3,75.3 		122.5,70.3 117.8,68.9 113.9,68.5 	'/>	<polygon class='G8eColor' points='121.3,80.5 119.8,78.9 116.7,77.3 115.2,76.9 112.9,76.9 110.6,77.4 109.3,77.9 107.4,79.4 		109.4,78.4 110.7,77.8 112.9,77.2 115.2,77.2 116.7,77.5 119.8,79.2 	'/>	<polygon class='G8eColor' points='99.2,104 101,104 101.4,102.4 102,100.9 103.7,100.5 105,101 105,102.1 104,102.6 104,103.2 		104.5,103.3 105.8,103.3 106.6,102.5 107.4,100.7 107.2,99.3 106.6,97.8 105.5,96.7 104,96.1 103.3,95.2 102.6,92.7 102.7,95.2 		103.8,96.4 105.3,97.1 106.3,98.1 106.8,99.3 106.8,100.6 106.1,102.2 105.7,102.8 105.1,102.9 104.6,102.6 105.2,102.3 		105.3,100.7 103.5,100 101.8,100.4 101,102.2 100.6,103.5 	'/></g></svg><p class='biointerviewed'>Ha vissuto in diverse città, tra cui Brighton, Milano e Genova, poi è tornata a Faenza, dove gestisce il mercato spagnolo e sud americano di <span class='MAVColor'>Gigacer</span>. Ha tre figli, ama la letteratura e lo sci.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Savorani', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillSavorani").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillSavorani").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillBandini").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<g>		<path class='MAVStroke Round10px' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='MAVStroke Round10px' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g></g><g id='Bandini'>	<g>	</g>	<path class='G3dColor' d='M-472,289'/>	<g>		<g>			<path class='GccColor' d='M128,126.5l-28,0.8l-28-0.8v11.8l-30.4,13.3c13,19.4,34.3,23.2,59.4,23.2c25.1,0,44.1-4.2,57.1-23.6				l-30.1-13V126.5z'/>		</g>		<polygon class='Ge6Color' points='100.4,43 66,43 66,65 66.3,116.5 72.5,127 91.5,141 100.4,141 108.9,141 127.9,127 134.2,116.6 			135,65 135,43 		'/>		<polygon class='G99Color' points='66.6,101.4 68.4,76.2 66.1,71 71.5,54.2 73.3,52 78.9,52 85.1,45 110.4,45 117.7,47.9 126.8,53.4 			133,67.5 133,95.4 133,109.8 138.5,95.1 145,83.9 145,81.1 147,78.8 147,67.4 144.1,52.5 142,50.6 142,46 139.1,46 138,47.1 			138,41.9 129.1,33.2 122.2,31.4 119.7,28.6 106.5,22 87.3,22 84.2,25.1 74.5,30 69.8,30 66.3,33.6 62.1,39.2 57.8,51 56.1,51 			57.2,63.6 53.9,64.9 57.8,92.3 66.8,111.4 		'/>		<circle class='G3dColor' cx='85.7' cy='83.5' r='2.5'/>		<polygon class='G3dColor' points='88.8,81.8 91.5,83.9 90.3,85.2 93.2,84.1 88.8,81 84.1,81 79.8,83.2 78.5,84.3 78.5,85.5 80.2,84 			84.4,81.8 		'/>		<polygon class='Gb3Color' points='93.9,82.4 89.8,79 84.1,79 81.7,79.4 77.9,81.8 76.6,84.9 78.4,82.5 82,80.2 84.2,79.6 89.7,79.7 					'/>		<polygon class='G99Color' points='94.7,76 91.5,72.8 82,71.5 76,75 76,78.3 82.2,75.1 91.3,74.9 		'/>		<polygon class='Gb3Color' points='94.2,97.6 92.4,99.6 92.5,101.7 94.1,103.4 95.1,103.7 94,102.9 94,101.7 96.3,100.7 99.4,102 			98.8,103 99.7,103.6 99.9,104 98.1,104 97.8,103.2 98.5,102.2 96.4,101.4 95,102.2 95,102.8 96.4,104 93.9,104 92,101.9 92,99.3 			94.2,96.8 96.5,89.1 96.7,89.5 		'/>		<circle class='G3dColor' cx='114.7' cy='83.5' r='2.5'/>		<polygon class='G3dColor' points='111.6,81.8 108.9,83.9 110.1,85.2 107.3,84.1 111.6,81 116.3,81 120.6,83.2 121.9,84.3 121.9,85.5 			120.3,84 116.1,81.8 		'/>		<polygon class='G3dColor' points='110,116 90.1,116 88.8,115 90,118 110,118 111.2,115 		'/>		<polygon class='Gb3Color' points='106.5,82.4 110.7,79 116.3,79 118.8,79.4 122.5,81.8 123.8,84.9 122,82.5 118.4,80.2 116.2,79.6 			110.8,79.7 		'/>		<polygon class='G99Color' points='105.7,76 109,72.8 118.7,71.5 125,75 125,78.3 118.5,75.1 109.3,74.9 		'/>		<polygon class='Gb3Color' points='106.7,97.6 108.6,99.6 108.7,101.7 106.8,103.4 105.9,103.7 107,102.9 107,101.7 104.5,100.7 			101.4,102 102,103 101.1,103.5 100.9,104 102.7,104 103,103.2 102.3,102.2 104.5,101.4 106,102.2 106,102.8 104.4,104 106.9,104 			109,101.9 109,99.3 106.7,96.8 104.3,89.1 104.1,89.5 		'/>		<polygon class='GdaColor' points='65.9,96.3 59.9,90.3 58,92.3 58,101.3 64.3,113.9 66.5,115 		'/>		<polygon class='G8eColor' points='63.1,101 64,101 64,104.2 65,105.3 65,108 63.8,108 62,105.8 62,102.8 		'/>		<polygon class='G8eColor' points='61.4,104.9 59,100.8 59,93.3 59.6,92.5 60,93.2 60,94 60,93.5 60,94.7 61.4,96.3 		'/>		<polygon class='GdaColor' points='133.9,96.3 139.9,90.3 142,92.3 142,101.3 135.5,113.9 133.9,114 		'/>		<polygon class='G8eColor' points='136.6,101 136,101 136,104.2 135,105.3 135,108 135.9,108 138,105.8 138,102.8 		'/>		<polygon class='G8eColor' points='138.5,104.9 141,100.8 141,93.3 140.4,92.5 140,93.2 140,94 140,93.5 140,94.7 138.6,96.3 		'/>		<polygon class='GccColor' points='86.7,97.6 80.3,115.5 80.6,120.5 80.9,115.3 		'/>		<polygon class='GccColor' points='113.9,97.6 120.3,115.5 120,120.5 119.7,115.3 		'/>	</g>	<path class='GColor' d='M140.6,142.1l-8.1-3.1c-5.2,12.9-25,32.7-32.5,32.7c-7.8,0-27.1-19.6-32.4-32.3l-8.1,3.1l-20.9,8.1		c12.9,20.3,35.5,33.9,61.3,33.9c25.9,0,48.7-13.7,61.5-34.2L140.6,142.1z'/>	<g>		<path class='G4dColor' d='M100,178.1c8.6,0,31.2-22.5,37.2-37.3l-4.7-1.8c-5.2,12.9-25,32.7-32.5,32.7c-7.8,0-27.1-19.6-32.4-32.3			l-4.7,1.8C69,155.8,91,178.1,100,178.1z'/>	</g></g></svg><p class='biointerviewed'>Nato e cresciuto a Faenza, è co-fondatore di <span class='MAVColor'>Blacks Composites</span>, dove si occupa della parte commerciale e manageriale. Padre di cinque figli, non lo vedrete «mai fare shopping all'Ikea», dice.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Bandini', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillBandini").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillBandini").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillTampieri").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<g>		<path class='Round10px MAVStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='Round10px MAVStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g></g><g id='Tampieri'>	<g>	</g>	<g>		<polygon class='Gb3Color' points='51.7,140 59,150 91.6,150 123.5,145.3 135,143.2 139.2,91.8 128,76.8 83.9,83.8 63.6,85.9 			61.5,101.6 		'/>		<g>			<path class='G99Color' d='M122.5,121.7l-22.3,1l-22.5-1l-1.1,16.8l-39.7,9.2c12.5,22,36.1,36.9,63.1,36.9c27,0,50.6-14.9,63.1-36.9				l-39.6-9.1L122.5,121.7z'/>		</g>		<g>			<path class='GColor' d='M122.9,130.8l-23.7,6.5l-22.1-6.8l-0.6,7.9l-39.7,9.2c12.5,22,36.1,36.9,63.1,36.9c27,0,50.6-14.9,63.1-36.9				l-39.6-9.1L122.9,130.8z'/>		</g>		<polygon class='Gb3Color' points='130,89.1 130,101 135,101 135,88.4 		'/>		<polygon class='Gb3Color' points='65,86.3 65,101 70,101 70,85.4 		'/>		<polygon class='GccColor' points='124.5,37 99.5,37 74.1,37 65.8,68.1 66.5,88.6 68.6,97.9 72.9,120.8 93.5,137 99.5,137 105.2,137 			125.8,120.7 130.1,98 132.2,88.6 133,68.1 		'/>		<polygon class='G99Color' points='92.5,98.7 88.7,104.7 92.7,99.1 		'/>		<polygon class='G80Color' points='92,66 94.2,68.2 84.2,67.9 81.5,68.4 84.2,66 		'/>		<circle class='G99Color' cx='86.5' cy='77.1' r='2.4'/>		<polygon class='G3dColor' points='78.6,79.2 81.5,76.5 84.9,75 86.9,74.7 90.4,75.5 93.9,78.1 93.2,78.8 93.1,78.3 90.2,76.2 			86.9,75.4 84.8,75.6 81.6,77.3 		'/>		<polygon class='G3dColor' points='109.1,111 91.2,111 90,109.6 91.1,112 109.2,112 110.3,109.6 		'/>		<polyline class='GColor' points='105.6,90 107.5,92.7 107.6,95.3 106.4,96.2 104.9,97.3 104,97.1 104,96.1 104.1,95.6 103.8,95.1 			102.7,95 102.4,96 101.5,97 101,97 101.4,96.7 102.1,96 102.5,94.8 103.9,94.8 104.3,95.3 104.4,96.8 104.8,97 106.2,95.9 			107,95.2 107,93 		'/>		<polygon class='G99Color' points='107.8,98.7 111.6,104.7 107.6,99.1 		'/>		<polygon class='G80Color' points='108.3,66 106.1,68.2 116.1,67.9 118.8,68.4 116.1,66 		'/>		<circle class='G99Color' cx='113.8' cy='77.1' r='2.4'/>		<polygon class='G3dColor' points='121.7,79.2 118.8,76.5 115.4,75 113.4,74.7 109.9,75.5 106.4,78.1 107.1,78.8 107.2,78.3 110.1,76.2 			113.4,75.4 115.5,75.6 118.7,77.3 		'/>		<g>			<path class='G99Color' d='M86,84.8l-14.3-2.7l-2.4-8.7l6.6-2.4l0.1,0l20.7,1.1l-0.8,8L86,84.8z M72.3,81.5L86,84.1l9.3-4.4l0.6-6.8				L76,71.7l-5.8,2.1L72.3,81.5z'/>		</g>		<g>			<path class='G99Color' d='M114.6,84.8l-0.1,0l-9.7-4.6l-0.8-8l20.8-1.1l6.6,2.4l-2.4,8.7L114.6,84.8z M105.4,79.7l9.3,4.4l13.7-2.6				l2.1-7.6l-5.8-2.1l-19.9,1.1L105.4,79.7z'/>		</g>		<polygon class='G3dColor' points='133.9,73.9 124.8,70.6 107,71.1 102.6,72.8 100.5,72.9 98.2,72.8 93.6,71.1 75.8,70.6 66.7,73.9 			66.7,75.2 75.8,72.1 93.6,72.7 98.1,74.1 100.5,74.4 102.7,74.1 107.1,72.7 124.9,72.1 134,75.2 		'/>		<g>			<path class='Ge6Color' d='M146.7,80.7l-2.6-10.4l-6.4-18.6l-9.2-13.3l-8.2-5.1l-7.8-3.2l-4.8-5l-4.5-2.2l-7.5-0.1l-13.3,4.7l-7,7.6				l-11,14.3l-5.9,20.9L57,76.1l-0.7,13.8l-0.1,13.8l-0.8,12.2l-6.5,19.2l-2.1,3.5L35,143.9l1.9,3.8c0,0,0,0,0,0l0.6-0.1l9-1.5				l1.7-1h5.7l3-2l10-6.7l6.8-17L71,105.5l-3.3-16.7L68.9,76h2.8l2.9-10H80l3.2-2.1l7.3-6.4l11.2-14l3.1-5.5l4.6-1l4.2,4.2l0.9-0.9				l3.6,3.8l7.1,20.9h1l1.1-1.2l3.1,6.1l2.5,2.4V80v14.4v0.8c0,0,0,3.4,0,3.8c0,0.3-2,2-2,2v17.2l-1,1.2v2l-2.4,2.7l-1.5,15.2				l-1.3,13l-1,18.5l2.7,8.7c5.6-2.2,10.8-5.1,15.6-8.5l-0.8-7.8l2.9-19.9l2.5-17.3l2-29.3L146.7,80.7z'/>		</g>		<polygon class='GColor' points='94.2,90 92.2,92.7 92,95.3 93.3,96.2 94.9,97.3 96.1,97 95.6,95.4 96,95.1 96.9,95 97.3,96 98.1,97 			98.6,97 98.2,96.7 97.5,96 97.1,94.8 95.7,94.8 95.3,95.3 95.7,96.8 94.8,97 93.6,95.9 92.6,95.1 92.7,93 		'/>	</g></g></svg><p class='biointerviewed'>È l'idea maker di <span class='MAVColor'>GreenBone</span> e direttrice dell'Istituto di Scienza e Tecnologia dei Materiali Ceramici. Vive a Faenza, ha due figli, un gatto e un cane. Adora l’antiquariato.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Tampieri', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillTampieri").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillTampieri").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillRuta").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<path class='Round10px MAVStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>	<path class='Round10px MAVStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Ruta'>	<g>		<g>			<path class='Ge6Color' d='M123,124l-23-1.4L77,124v23H36.5c12.4,22.3,36.2,37.5,63.5,37.5c27.3,0,51.1-15.2,63.5-37.5H123V124z'/>		</g>		<polygon class='Gf2Color' points='117.7,41.8 100,37.2 100,36.9 83.1,41.4 67.2,63.1 67.5,86.7 69.7,114.4 72.7,121.9 89.6,137 			96.2,140 100.3,140 105.7,140 112.2,137.2 129.1,122.3 132,114.8 134,87.1 134,63.5 		'/>		<g>			<path class='G80Color' d='M75.3,180.2L69,170l2.5-10l-8.5-4v-9H36.5C45,162.2,58.7,174.1,75.3,180.2z'/>			<path class='GColor' d='M63,147v9l8.5,4L69,170l6.3,10.2c3.6,1.3,7.4,2.3,11.2,3.1L77,147H63z'/>			<path class='G80Color' d='M137,156l-8.4,4l2.6,10l-6.2,10c16.4-6.1,30-17.9,38.4-33H137V156z'/>			<path class='GColor' d='M128.6,160l8.4-4v-9h-13.7l-9.5,36.2c3.9-0.7,7.6-1.8,11.2-3.1l6.2-10L128.6,160z'/>		</g>		<path class='GccColor' d='M96.3,43.5l-6.7,1.6l-5.6,5L77.7,60l-7.4,18l-1.8,22.1l-6.9,2.3l-0.1,1.5l8.2,9.9l3,7.8l9.4,8.8l0.1,14.5			l-5.2,2.5l-2.7,13.7l-8.4,3.9h-7.4l-4.1,3.2c0,0-6.6-5.7-8.7-8.2c-1.6-1.9-6.7-9.1-6.7-9.1l-2.7-4.5l7.3-24.1l2.2-22.6l5.2-24.5			l9.4-22.8L67.9,39l7.5-5.2l6.8-3.7l9.4-1.2l21.7,0.3l10.3,4.3l7.2,6.1l6.8,9.6l4.7,11l5.4,18.5l0.7,12.6l1.1,20.1l-2.3,10.5			l6.4,25.1l-30.9,0l-2.8-1.7v-5.2l0.5-10.4l8.6-7.5l2.9-8.9l2.1-30.8l-1.7-11l-4-10.2l-5.6-9.8l-7.2-6.1l-8.9-1.7L96.3,43.5z'/>		<path class='G3dColor' d='M94.7,84.8'/>		<polygon class='G99Color' points='74.3,75.9 75.7,73.2 79,70.9 84.3,69.6 88.4,70.4 91,72.7 87.6,71.5 84.5,71.2 79.1,72.2 76.1,74.1 					'/>		<polygon class='G99Color' points='94.8,77.3 91.9,75.1 89.2,74.1 86,73.6 84,73.6 81.4,74.7 79.2,76.1 76.8,78.5 79.5,76.5 81.5,75.2 			84.1,74.1 86,74.1 89,74.7 91.8,75.7 		'/>		<polygon class='G99Color' points='98.4,104 97.7,103.3 97.2,102.6 96.1,102.6 96,103 96.7,103 96.1,104 94.6,104 93.6,103.2 			92.7,101.7 93.1,98.8 93.9,97.7 96.5,95.4 97.6,90 97,95.7 94.4,98 93.6,99.1 93.3,101.6 93.9,102.9 94.6,103.7 95.8,103.7 			96,103.2 95.4,103.2 95.9,102 97.4,102 98,102.7 98.1,103.2 		'/>		<g>			<polygon class='G3dColor' points='93.4,82.7 91.1,80.4 90.2,79.7 87.4,78.1 84.8,77.9 82.3,78.5 80.3,79.9 78.8,81.1 78,83.2 				78.5,82.7 80.1,80.8 82.4,79.1 84.6,78.7 87.2,79 90.2,80.6 90.8,81.2 92.5,82.8 92,83.7 			'/>		</g>		<circle class='GColor' cx='85.1' cy='81.1' r='2.5'/>		<polygon class='G3dColor' points='108,115 100.6,115 100.3,115 92.3,115 91.2,114.3 92.2,117 100.3,117 100.6,117 108.1,117 			109.1,114.3 		'/>		<polygon class='G99Color' points='126,75.9 124.6,73.2 121.3,70.9 116,69.6 111.9,70.4 109.3,72.7 112.7,71.5 115.9,71.2 121.2,72.2 			124.2,74.1 		'/>		<polygon class='G99Color' points='105.6,77.3 108.4,75.1 111.1,74.1 114.3,73.6 116.4,73.6 118.9,74.7 121.1,76.1 123.5,78.5 			120.9,76.5 118.8,75.2 116.2,74.1 114.3,74.1 111.3,74.7 108.5,75.7 		'/>		<g>			<polygon class='G3dColor' points='106.9,82.7 109.2,80.4 110.1,79.7 112.9,78.1 115.5,77.9 118.1,78.5 120,79.9 121.5,81.1 				122.3,83.2 121.8,82.7 120.2,80.8 117.9,79.1 115.7,78.7 113.1,79 110.1,80.6 109.5,81.2 107.8,82.8 108.3,83.7 			'/>		</g>		<circle class='GColor' cx='115.2' cy='81.1' r='2.5'/>		<polygon class='Gf2Color' points='61.6,102.4 61.3,107.2 63.5,111.2 65.6,114.9 67.4,115.5 68.8,115.1 70,113.3 68.9,100 		'/>		<polygon class='Gf2Color' points='140,102.4 140.4,107.2 138.1,111.2 136,114.9 134.2,115.5 132.8,115.1 131.6,113.3 132.8,100 		'/>		<polygon class='G99Color' points='101.7,104 102.3,103.3 102.9,102.6 104,102.6 104.1,103 103.4,103 103.9,104 105.5,104 106.5,103.2 			107.4,101.7 106.9,98.8 106.1,97.7 103.6,95.4 102.7,90 103,95.7 105.7,98 106.4,99.1 106.8,101.6 106.2,102.9 105.4,103.7 			104.2,103.7 104.1,103.2 104.7,103.2 104.2,102 102.7,102 102.1,102.7 102,103.2 		'/>	</g>	<g>		<path class='GccColor' d='M124.5,142h-1c0,6-10.3,11-23,11c-12.7,0-23-5-23-11h-1c0,7,10.8,12,24,12S124.5,149,124.5,142z'/>		<path class='GccColor' d='M100,155.5c-1,0.3-1.8,1.2-1.8,2.3c0,1.3,1.1,2.4,2.4,2.4s2.4-1.1,2.4-2.4c0-1.2-0.9-2.2-2-2.4V154h-0.5H100			V155.5z M102,157.8c0,0.8-0.6,1.4-1.4,1.4s-1.4-0.6-1.4-1.4s0.6-1.4,1.4-1.4S102,157,102,157.8z'/>	</g></g></svg><p class='biointerviewed'>Faentina, si occupa di marketing strategico e innovazione digitale all'interno di <span class='MAVColor'>Certimac</span>. Adora Franco Battiato e i Chemical Brothers («hanno più cose in comune di quanto si creda», dice).</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Ruta', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillRuta").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillRuta").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillBertoni").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>		<path class='PTEKStroke Round10px' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='PTEKStroke Round10px' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>		<path class='PTEKStroke Round10px' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='PTEKStroke Round10px' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Bertoni'>			<path class='Gb3Color' d='M130.3,116.2l-27.3-1.6v0.6l-33.2,1.6l0.3,21.2L37.1,148c12.5,21.8,36,36.5,62.9,36.5c27,0,50.6-14.9,63.1-36.9l-33.2-10.1L130.3,116.2z'/>			<path d='M134.6,163l-34.5,15l-35.3-16.8l5.3-23.3L37.1,148c12.5,21.8,36,36.5,62.9,36.5c27,0,50.6-14.9,63.1-36.9l-33.2-10.1L134.6,163z'/>			<polygon class='Gd6Color' points='100,37 68.2,37 65,41.5 65,103.7 67.6,113.5 84.4,136.6 100,139.4 115.6,136.6 132.2,113.5 135,103.7 135,45 129.2,37'/>			<path class='GccColor' d='M119,121.6l-5.8-14.4l-8.7-2.3l-4.5,1.6l-4.5-1.6l-8.7,2.3L81,121.6l-2.4,7l6,8.1l15.7,2.8l15.6-2.8l5.7-7.9L119,121.6z M112.4,128.2l-3.3,4.5l-6.5,2.4l0-0.2H100h-3.3l0,0.1l-6.3-2.4l-3.3-4.5l-4.7-4.4l5.2-13.8l7.8-2.3l4.3,2.1l0.3-0.1l4.1-2l7.9,2.3l5.2,13.8L112.4,128.2z'/>			<circle class='G3dColor' cx='84.9' cy='81.7' r='2.5'/>			<polygon class='G3dColor' points='76,83 77.8,83 81.6,80.4 87,80.1 89.5,81.4 90.5,83.4 91.4,82.8 91,82.6 90.1,80.6 87.5,79.2 81.3,79.5'/>			<polygon class='G99Color' points='93.2,76 90.2,73 84.1,73 79.5,74.1 74.3,76.8 83.6,74.9'/>			<polygon class='G99Color' points='95.2,93.9 93,95.6 91.3,97.7 91.6,100.8 93.4,102.1 94.6,101 96.1,101 97.7,102.4 98.4,101.9 96.3,100 94.2,100 93.1,101.3 92.1,100.4 92,97.8 93.2,96.2 95.5,94.5 97.1,83.1'/>			<polygon class='G99Color' points='104.3,93.9 106.4,95.6 108.2,97.7 107.9,100.8 106.1,102.1 104.9,101 103.3,101 101.9,102.4 101.2,101.9 103.2,100 105.3,100 106.4,101.3 107.4,100.4 107.5,97.8 106.3,96.2 103.9,94.5 101.8,83.5'/>			<polygon class='Gb3Color' points='99,123 91.8,123 92.4,124 99,124'/>			<polygon class='GccColor' points='86.4,105.9 90.5,98.3 90.6,99.7'/>			<polygon class='G3dColor' points='110,114 88.2,114 86.8,112.2 88.1,115 110.1,115 111.5,112.2'/>			<polygon class='Gb3Color' points='99,123 106.5,123 105.8,124 99,124'/>			<circle class='G3dColor' cx='113.3' cy='81.7' r='2.5'/>			<polygon class='G3dColor' points='122.2,83 120.5,83 116.7,80.4 111.2,80.1 108.7,81.4 107.8,83.4 106.8,82.8 107.2,82.6 108.2,80.6 110.8,79.2 117,79.5'/>			<polygon class='G99Color' points='105.1,76 108.1,73 114.2,73 118.8,74.1 124,76.8 114.7,74.9'/>			<polygon class='GccColor' points='113.3,105.9 109.2,98.3 109.1,99.7'/>			<polygon class='Gd6Color' points='64.8,85.9 59.7,79.9 58.1,79.1 57,80 57,89.7 57.8,93.2 59.2,100.5 61.4,104.1 65.6,104.9'/>			<polygon class='Gb3Color' points='60.8,84.5 58.5,82.1 58.3,90.9 59,91.6 60.4,87.2'/><polygon class='Gb3Color' points='63.8,89.5 62.9,87.9 61.3,89.3 60.7,92.6 60.9,94.8 62.4,96.1 63.5,95.6 63.7,94.5 63.1,91.3'/><polygon class='Gb3Color' points='60.7,99.2 63.9,96.4 63.9,97.4'/><polygon class='Gd6Color' points='134.5,85.7 139.2,79.9 141.4,79.1 143,80 143,89.7 141.6,93.2 140,100.5 137.7,104.1 133.4,104.9'/><polygon class='Gb3Color' points='138.1,84.5 140.4,82.1 140.6,90.9 139.9,91.6 138.5,87.2'/><polygon class='Gb3Color' points='135.2,89.5 136,87.9 137.7,89.3 138.2,92.6 138,94.8 136.5,96.1 135.4,95.6 135.2,94.5 135.8,91.3'/><polygon class='Gb3Color' points='138.2,99.2 135,96.4 135,97.4'/><polygon class='G99Color' points='64,89.1 67,92.4 67.9,79.8 69.8,72.4 67.7,60 73.9,46.1 89.3,43.9 101,45.8 110.9,44.2 122,45.1 128.3,53 132.1,67.8 130.1,71.6 132.4,77.7 131.5,90.2 134.6,88.5 135.4,84.7 138.1,81.3 139.4,65.9 138.5,65 140.1,63.5 140.4,58.6 139,57.3 139,51.2 138,47.8 138,45.3 136,43.9 136,41.4 122.2,30 117.7,28.1 115.7,24.8 113,24.6 113,22.5 109,23.6 109,21.8 99,23.2 99,21.8 97.7,23 94.6,23 93.9,22.4 91.6,24.7 80.9,28.9 79.6,27.8 74,31 74,29.9 69,34.6 69,33.4 61.8,43.4 58.7,62.2 60.2,80.5 63.9,84.9'/><path class='G1aColor' d='M61,156v-15.3L37.1,148c6.6,11.5,16.2,21,27.8,27.4l-3.9-7.9V156z'/><path class='G1aColor' d='M139,156v11.5l-3.9,7.9c11.7-6.5,21.5-16.2,28.1-27.9L139,140V156z'/><path class='G4dColor' d='M126.9,179.3l5.1-10.6l-0.2-20.8l-31.4,19l-31.8-20.2l-0.6,21.9l5,10.5c8.4,3.4,17.5,5.2,27,5.2C109.5,184.5,118.5,182.7,126.9,179.3z'/><polygon class='GColor' points='100.3,167 70,137.8 70,134.6 70,134.2 64.1,140.5 64.3,171.3 75.6,151.3'/><polygon class='GColor' points='100.3,167 130,137.8 130,134.6 130.1,134.2 136.1,140.5 136,171.3 125,152.3'/><polygon class='GColor' points='100.3,167 70,137.8 70,134.6 70,134.2 64.1,140.5 64.3,171.3 75.6,151.3'/><polygon class='GColor' points='100.3,167 130,137.8 130,134.6 130.1,134.2 136.1,140.5 136,171.3 125,152.3'/></g></svg><p class='biointerviewed'>Vive a Castel Bolognese ed è il co-fondatore di <span class='PTEKColor'>Bertoni Srl – Green Technology</span>. È timido e introverso ma non sul campo di gioco: palleggiatore, non riesce a dire di no a una partita di pallavolo con gli amici.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Bertoni', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillBertoni").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillBertoni").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillMartelli").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<g>		<path class='Round10px PTEKStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='Round10px PTEKStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g>	<g>		<path class='Round10px MAVStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='Round10px PTEKStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g></g><g id='Martelli'>	<g>		<g>			<path class='Gb3Color' d='M123.2,129.1l-23.2,1.9l-23.2-1.9l-1.2,11l-37,10.4c12.8,20.5,35.6,34.1,61.5,34.1				c25.9,0,48.6-13.6,61.4-34.1L124.3,140L123.2,129.1z'/>		</g>		<polygon class='GccColor' points='98.8,41 70.4,41 66.7,81 65.5,107.8 66.7,116.7 71.4,126.7 78.4,134.7 89.8,142.8 98.9,144 			100.8,144 109.9,142.8 121.3,134.6 128.3,126.7 133,116.7 134.1,107.8 133,80.9 129.2,41 100.9,41 		'/>		<polygon class='G3dColor' points='99,29.5 94.6,27.6 88.9,27.7 83,29.3 75,35.4 71.3,36.9 69.6,40.4 66.2,42.3 57.8,53 55.8,60.5 			53,63.1 53,66 55,64.6 55,67.4 53,68.8 53,76.5 56,74.1 56,77.5 51.8,85.9 53,87.1 53,92.2 56,88.8 56,92.9 47.2,97.3 49,99.1 			49,102.7 47.4,104.6 49.9,107 47.3,107 53.3,113 51.2,113 56.1,118.1 54.4,120 58.2,120 60.7,117.2 63,119.4 60.3,122 64.8,122 			69,122 67.5,117 65.8,102.7 66.9,75.2 69.6,56.3 80.6,44.3 83,45 98.8,41.4 100.9,44 104.4,44 107.5,47 114.4,48.6 125.6,53.5 			131.7,63.9 132.2,77.5 133.1,85.6 133.8,96.9 134,109.3 129.6,123 132,125.6 135.9,123.6 141.7,114 143.9,114 147,117.4 147,114 			150.6,114 148,111 151.6,111 148.9,108 154.8,108 147.3,100.7 146.4,86.7 149,89.4 149,76.5 148,75 148,65.6 150,67.6 150,63.9 			146.3,60.3 143.1,51.3 137.3,40.4 128,32 125.9,31.7 117.9,24.7 113.7,23.1 109.6,24.1 103.8,25.2 		'/>		<path class='G3dColor' d='M87.2,82.7c0,1.5-1.3,2.8-2.8,2.8c-1.5,0-2.8-1.3-2.8-2.8c0-1.5,1.2-1.8,2.7-1.8			C85.8,80.9,87.2,81.2,87.2,82.7z'/>		<polygon class='G3dColor' points='76.7,84.1 78.9,82.1 80.2,81.4 81.8,80.7 84.3,80.5 87.2,81 89.5,82.1 90.9,83.6 92,85.5 90.7,84 			89.2,82.7 87,81.7 84.3,81.1 81.9,81.4 80.3,82 78.9,82.8 		'/>		<polygon class='G3dColor' points='71.6,78.6 76.2,73.4 81.6,73 85.8,73.3 90.4,75.3 90.7,77.6 87.6,77.9 83.7,75.9 77.7,75.8 			74.4,77.5 		'/>		<polygon class='GColor' points='95.3,105.4 94.8,104.6 94.3,104 92.8,104 92.3,105 90.7,105 90,103.3 90,101 90.3,99.6 93.7,94.8 			91.1,99.9 90.7,101.1 90.9,103.3 91.3,104 91.8,104 92.8,103 94.2,103 94.8,103.6 95.9,104.8 97.7,106 		'/>		<path class='G3dColor' d='M112.5,82.7c0,1.5,1.3,2.8,2.8,2.8c1.5,0,2.8-1.3,2.8-2.8c0-1.5-1.2-1.8-2.7-1.8			C113.8,80.9,112.5,81.2,112.5,82.7z'/>		<polygon class='G3dColor' points='123,84.1 120.8,82.1 119.5,81.4 117.8,80.7 115.4,80.5 112.4,81 110.2,82.1 108.8,83.6 107.7,85.5 			109,84 110.5,82.7 112.7,81.7 115.4,81.1 117.8,81.4 119.4,82 120.8,82.8 		'/>		<polygon class='G3dColor' points='128.1,78.6 123.5,73.4 118.1,73 113.9,73.3 109.3,75.3 108.9,77.6 112.1,77.9 116,75.9 122,75.8 			125.3,77.5 		'/>		<polygon class='G3dColor' points='109.7,118 90,118 88.6,116.3 89.8,119 109.8,119 111.1,116.3 		'/>		<polygon class='GColor' points='104.4,105.4 104.9,104.6 105.4,104 106.8,104 107.4,105 108.9,105 110,103.3 110,101 109.6,99.6 			106.1,94.8 108.6,99.9 109,101.1 108.8,103.3 108.4,104 107.9,104 106.9,103 105.4,103 104.9,103.6 103.8,104.8 101.9,106 		'/>		<polygon class='GColor' points='96.7,125 100,127.7 103,125 		'/>		<polygon class='GccColor' points='63.9,85.9 61.2,83 59,82.8 59,84.5 61.4,89.1 61.8,93.1 63.5,95.5 63.8,99.2 66.2,103.5 66.2,95 			65.9,95 		'/>		<polygon class='GccColor' points='135.8,85.9 138.7,83 141,82.8 141,84.5 138.4,89.1 138,93.1 136.2,95.5 135.9,99.2 133.6,103.4 			133.4,95 133.8,95 		'/>		<g>			<g>				<path class='G1aColor' d='M134.8,138.5l-10.6,9.3l0.3,12.1l-18.4,5.6l-5.4,7.1l-6.2-7.1l-13.8-5.7l-10.3-21.1l-36.9,2.2					c11.5,26.1,36.8,43.6,66.6,43.6c29.3,0,54.9-17.5,65.9-42.6l0.8-1.6L134.8,138.5z'/>			</g>			<g>				<path d='M123.6,132.8l0.4,15l-18,17.7l19.7-4.8l20.5,7.4c2.6-2.1,5.1-4.5,7.4-7l-18.4-22.6L123.6,132.8z'/>				<path d='M94.4,165.5L76,147.8l0.1-14.2l-10.8,4.9L47,161.2c2.3,2.5,4.7,4.8,7.3,6.9l20.5-7.4L94.4,165.5z'/>			</g>		</g>	</g></g></svg><p class='biointerviewed'>Ha fondato <span class='PTEKColor'>Garvan Acoustic</span> insieme all'amico e collega Roberto Gaudenzi, entrambi faentini. La sua passione? I motori.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Martelli', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillMartelli").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillMartelli").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillPeroni").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'><path class='Round10px PTEKStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>	<path class='Round10px PTEKStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Peroni'>	<g>		<path class='GccColor' d='M100,184.5c25.3,0,47.7-13.1,60.7-32.9l-35.7-14v-14l-24-1.3v-0.1l-0.5,0l-0.5,0v0.1l-24,1.3v14L39.6,152			C52.6,171.6,74.8,184.5,100,184.5z'/>	</g>	<path class='G33Color' d='M140.6,142.1l-8.1-3.1c-5.2,12.9-17.8,22-32.5,22c-14.6,0-27.1-8.9-32.4-21.7l-8.1,3.1l-20.9,8.1		c12.9,20.3,35.5,33.9,61.3,33.9c25.9,0,48.7-13.7,61.5-34.2L140.6,142.1z'/>	<polygon class='Ge6Color' points='123.3,40 100,40 77.4,40 66,53.3 66,85.9 67.4,106.2 69.2,112.6 79.4,129.4 93.9,141 100,141 		106.8,141 121.4,129.4 131.5,112.6 133.5,106.2 135,85.9 135,53.3 	'/>	<polygon class='GColor' points='61.2,77.6 60.9,68.9 61,62.8 62,61.7 62,56.8 65,52.3 65,51.5 67,49.4 67,44.7 69.1,40.4 74.8,35.3 		80.4,31.8 85.2,26.7 89,25.4 95.3,25.2 97.8,24.1 99.4,24.5 103.5,24.1 113.7,26 120.4,30.1 125.8,34.2 129.8,40.5 132.6,46.7 		134.4,50.9 136.8,61.5 137.4,66.9 137.5,81.1 134.9,85.7 134.1,82.7 131.9,80.5 131.8,69.8 130.6,64.6 132.4,60.3 129.1,54 		127.9,49.6 123.8,45.9 119.5,43 116.8,43 114.6,46 111.5,46 109.7,44 105.1,44 103.7,45.5 103.1,45 99.1,45 96.3,45 95,43.2 		94,43.9 94,46.2 90.1,49.9 85.4,45.3 80.7,43.1 75.9,47.5 72.4,48.4 69.1,51.9 67.6,59.4 69,64.3 69,69.5 68,70.8 68,82.5 		65.8,85.5 63.5,84.1 	'/>	<ellipse class='GColor' cx='86.3' cy='83.7' rx='2.4' ry='2.3'/>	<polygon class='GColor' points='92,84.8 93,83.6 91,82.2 88.6,81.3 85.3,81.1 82.4,82.1 79.2,84 82.4,82.7 85.4,81.9 88.2,81.8 		90.7,82.9 92.4,83.8 	'/>	<polygon class='GColor' points='94.1,77.7 90.1,74.8 88.5,74.5 81.5,74.8 77.2,78.3 81.8,77.5 88.4,76.7 90.3,76.9 	'/>	<polygon class='G3dColor' points='88.7,115.4 90,117 101,117 101,118 89.9,118 	'/>	<polygon class='G99Color' points='100,104 98.8,104 97.9,103.3 97.7,102.3 96,102.2 95.2,103.2 95.3,103.7 94.7,104.6 93.9,104.4 		92.9,103.1 92.6,99.9 93.4,98.3 95.9,96.1 96.8,94 96.3,96.3 93.6,98.8 93,100 93.2,102.9 94,104 94.6,104.2 94.9,103.7 94.7,103 		95.8,101.8 97.8,101.9 98.3,103.4 98.9,103.7 100,104 	'/>	<path d='M101.9,104.9'/>	<polygon class='GccColor' points='90.9,102.8 87.6,106.4 84.4,111.5 	'/>	<polygon class='GccColor' points='65.8,85.9 64.2,82.9 62.2,80 61,80 59,80.7 59,89.7 60,90.5 60,97.4 61,98.4 61,104.1 62,106.2 		63.8,108.4 67.6,107.7 	'/>	<polygon class='G99Color' points='60.7,83.9 62,85.4 62,86.7 61,89.6 	'/>	<polygon class='G99Color' points='64.6,91.5 64,92.7 64,95.8 65.4,98.9 64.5,99.6 63,97.9 63,97 62,97 62,92 62,91.1 62,89 63.4,89 		64.6,90 	'/>	<polygon class='G99Color' points='64,102.4 65.9,100.2 65.8,101.7 65,102.6 	'/>	<ellipse class='GColor' cx='114.8' cy='83.7' rx='2.4' ry='2.3'/>	<polygon class='GColor' points='109.1,84.8 108.1,83.6 110.1,82.2 112.5,81.3 115.8,81.1 118.7,82.1 121.9,84 118.7,82.7 115.7,81.9 		112.9,81.8 110.4,82.9 108.7,83.8 	'/>	<polygon class='GColor' points='107,77.7 111,74.8 112.6,74.5 119.6,74.8 123.9,78.3 119.3,77.5 112.7,76.7 110.8,76.9 	'/>	<polygon class='G3dColor' points='112.4,115.4 111.1,117 101,117 101,118 111.2,118 	'/>	<polygon class='G99Color' points='101,104 102.3,104 103.2,103.3 103.4,102.3 105.1,102.2 105.9,103.2 105.8,103.7 106.4,104.6 		107.2,104.4 108.2,103.1 108.5,99.9 107.7,98.3 105.2,96.1 104.3,94 104.8,96.3 107.5,98.8 108.1,100 107.9,102.9 107.1,104 		106.5,104.2 106.1,103.7 106.4,103 105.3,101.8 103.3,101.9 102.8,103.4 102,103.8 101,104 	'/>	<polygon class='GccColor' points='110.2,102.8 113.5,106.4 116.7,111.5 	'/>	<polygon class='GccColor' points='134.9,85.9 136.6,82.9 138.6,80 139.7,80 141,80.7 141,89.7 141,90.5 141,97.4 140,98.4 140,104.1 		138.9,106.2 137.1,108.4 133.2,107.7 	'/>	<polygon class='G99Color' points='140.2,83.9 139,85.4 139,86.7 139.9,89.6 	'/>	<polygon class='G99Color' points='136.3,91.3 137,92.5 137,95.7 135.5,98.7 136.4,99.5 138,97.7 138,97 139,97 139,91.8 139,91 139,89 		137.3,89 136.2,89.9 	'/>	<polygon class='G99Color' points='136.7,102.4 134.8,100.2 134.9,101.7 135.7,102.6 	'/>	<path class='G1aColor' d='M100,161c-14.6,0-27.1-8.9-32.4-21.7l-8.1,3.1c6.5,15.9,22.2,27.2,40.4,27.2c18.4,0,34.1-11.4,40.6-27.5		l-8.1-3.1C127.3,151.9,114.7,161,100,161z'/></g></svg><p class='biointerviewed'>Dirige lo studio <span class='PTEKColor'>Marco Peroni Ingegneria</span>, fra le mura di una chiesa sconsacrata del Quattrocento, a Faenza. Ha due figli, con cui condivide la passione per le mostre d’arte.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Peroni', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillPeroni").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillPeroni").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillSalvatori").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<path class='Round10px MAVStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>	<path class='Round10px PTEKStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Salvatori'>	<g>		<g>			<path class='Gb3Color' d='M129,123L129,123l0.1,0.2l-0.1,0.2v0l-28.9-1.8L71,123.5v15.4l-37.7,1.5c11,26,36.8,44.2,66.7,44.2				c29.9,0,55.7-18.2,66.7-44.2l-37.7-1.5V123z'/>		</g>		<polygon class='Ge6Color' points='142.8,81 145.5,80.5 147.3,81.7 148.5,87.6 147.3,92.6 143.9,98.1 141,103 138.5,104.9 136.8,105.2 			139.3,81.4 		'/>		<polygon class='G99Color' points='141.8,86.3 143.3,84.2 144.9,83.3 146.1,83.1 146.6,84.8 146.9,87.2 145.8,85 145.1,84.3 143.9,85.4 			142.5,87 141.8,88.7 		'/>		<path class='G99Color' d='M146.3,90.8l-1.6,3c0,0-1.4,2-1.6,2.4c-0.2,0.4,2-4.5,2-4.5l1.2-3.7L146.3,90.8z'/>		<polygon class='Ge6Color' points='56.7,81 54,80.5 52.3,81.7 51,87.6 52.3,92.6 55.7,98.1 58.6,103 61,104.9 62.8,105.2 60.2,81.4 					'/>		<polygon class='G99Color' points='57.7,86.3 56.2,84.2 54.7,83.3 53.4,83.1 52.9,84.8 52.6,87.2 53.8,85 54.5,84.3 55.6,85.4 57,87 			57.8,88.7 		'/>		<path class='G99Color' d='M53.3,90.8l1.6,3c0,0,1.4,2,1.6,2.4c0.2,0.4-2-4.5-2-4.5L53.2,88L53.3,90.8z'/>		<polygon class='Ge6Color' points='100.7,40 131.2,40 137,60.4 137,105.2 134.3,116.3 119.5,136.4 110.7,142.9 100.7,144 98.6,144 			88.6,142.9 79.9,136.4 65.4,116.3 63,105.2 63,60.4 68.2,40 98.6,40 		'/>		<polygon class='G80Color' points='130.6,69.1 135.5,77.7 136.3,96.8 133.9,115.6 135.2,117.1 139,101.2 139,98.2 141,96.8 141,83.9 			144,80.9 145,76 147.8,68.7 145.9,58 147.6,58 145.9,56.2 151.3,50.6 148,47.4 148,40.8 150,43 150,37.7 148.6,36 143,36 			143,30.3 129.9,20 124.3,20 121.3,16.1 118.2,16.4 115.5,12 103.9,12 97.2,14.3 88.6,13.3 72,13.7 61.3,22 63.6,22 48.9,28.3 			57.3,29.9 45.9,34.4 41,43 44,43 44,48 45.8,48 42,52 46.8,52 48.6,53.4 45.8,56 53.6,56.8 52.5,62.6 56,72 56,80.7 59,82 			59.5,96.5 61.3,98 61.9,102.2 64.6,117.2 65.8,115.6 64,98.8 63.6,88.6 64.7,84.6 63.4,80.2 64.1,68.3 64.3,57.8 67,55 67,51 			73.5,45 70.7,54.1 81.4,50.6 85.3,49.9 92,43.1 92,48.5 97.2,43.4 101.1,50.9 108.4,44 111.6,42.9 115.9,45.1 124.7,42.4 			131.7,50.3 132,62.4 		'/>		<polygon class='G3dColor' points='83.7,120.1 85.5,122 100,122 100,124 85.4,124 		'/>		<circle class='G3dColor' cx='83.6' cy='81.6' r='2.8'/>		<polygon class='G3dColor' points='74.8,84.1 76.9,81 80.6,79 84.3,78.4 87.6,79.5 89.9,80.9 92,83.3 90,84.8 90.9,83.4 89.5,81.8 			86.8,80.4 84.1,79.7 81.3,79.9 77.1,81.7 		'/>		<polygon class='G80Color' points='90.7,71.5 91.5,74.7 78,71.6 73.5,73 69.4,77.5 71.5,71.3 77,68.6 		'/>		<polygon class='G99Color' points='73.5,79.4 78.5,76.3 82.4,75.5 88.2,76.1 91.6,77.4 93.4,80.8 91.2,77.9 88.1,76.9 82.5,76.2 			78.6,77 		'/>		<polygon class='G80Color' points='100,110 91.6,110 79.7,115 72.4,123.5 70.5,123.5 66.8,120 68.4,119.2 65.3,119.5 69.9,129.9 			74.6,129.7 82.2,119.8 89.7,117 100,117 		'/>		<polygon class='GccColor' points='92.3,97.9 82.8,110.6 88.3,104.8 		'/>		<polygon class='GColor' points='97.3,107.9 95.2,107.8 94.4,105.9 93.5,104.9 92.9,105.5 94,106.6 93,106.8 91.1,106.2 90.7,103.8 			91.8,101.1 93.6,100.4 95.7,97.1 96.2,94.2 96.1,97.2 93.8,101 92,101.7 91.3,103.8 91.6,105.8 92.8,106.1 92.4,105.1 93.4,104.3 			94.8,105.5 95.5,107.3 97.9,107.6 		'/>		<polygon class='G3dColor' points='115.6,120.1 113.8,122 100,122 100,124 113.9,124 		'/>		<circle class='G3dColor' cx='115.8' cy='81.6' r='2.8'/>		<polygon class='G3dColor' points='124.6,84.1 122.4,81 118.7,79 115.1,78.4 111.7,79.5 109.4,80.9 107.3,83.3 109.3,84.8 108.5,83.4 			109.8,81.8 112.6,80.4 115.2,79.7 118,79.9 122.2,81.7 		'/>		<polygon class='G80Color' points='108.6,71.5 107.8,74.7 121.4,71.6 125.8,73 129.9,77.5 127.8,71.3 122.3,68.6 		'/>		<polygon class='G99Color' points='125.8,79.4 120.8,76.3 116.9,75.5 111.1,76.1 107.7,77.4 106,80.8 108.1,77.9 111.3,76.9 116.9,76.2 			120.7,77 		'/>		<polygon class='G80Color' points='100,110 107.7,110 119.6,115 127,123.5 128.8,123.5 132.6,120 130.9,119.2 134,119.5 129.4,129.9 			124.7,129.7 117.2,119.8 109.6,117 100,117 		'/>		<polygon class='GccColor' points='107,97.9 116.5,110.6 111,104.8 		'/>		<polygon class='GColor' points='102,107.9 104.1,107.8 104.9,105.9 105.8,104.9 106.4,105.5 105.3,106.6 106.3,106.8 108.2,106.2 			108.6,103.8 107.5,101.1 105.7,100.4 103.6,97.1 103.2,94.2 103.2,97.2 105.5,101 107.4,101.7 108.1,103.8 107.8,105.8 			106.6,106.1 107,105.1 105.9,104.3 104.5,105.5 103.8,107.3 101.4,107.6 		'/>		<polygon class='GccColor' points='92.3,85.2 89.4,90.4 85,93.7 80,93.6 77.1,91 74.6,87.7 77.7,90.8 80.2,93.2 85,93 89.1,90 		'/>		<polygon class='GccColor' points='107.2,85.2 110.1,90.4 114.5,93.7 119.5,93.6 122.4,91 124.9,87.7 121.8,90.8 119.3,93.2 114.5,93 			110.4,90 		'/>	</g>	<g>		<g>			<path class='G1aColor' d='M134.6,138.5l-5.6,9.3l-4.8,12.1l-18.4,5.6l-5.5,7.1l-6.2-7.1l-18.8-5.7l-10.3-21.1l-31.7,2				c11.2,25.7,36.8,43.7,66.5,43.7c29.3,0,54.6-17.5,66-42.6v-1.6L134.6,138.5z'/>		</g>		<g>			<path d='M129,132.2l0,0.4v15.2l-23.2,17.7l19.7-4.8l20.4,7.4c2.6-2.1,5.1-4.5,7.4-7L135,138.5L129,132.2z'/>			<path d='M94.2,165.5L71,147.8v-15.2l0-0.4l-5.9,6.3l-18.4,22.7c2.3,2.5,4.7,4.8,7.3,6.9l20.5-7.4L94.2,165.5z'/>		</g>	</g></g></svg><p class='biointerviewed'>Artista, scultore, ceramista, dj, creativo. Classe 1975, vive a Solarolo. Dicono di lui: «Squisita tecnica artigianale al servizio di una grande ironia».</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Salvatori', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillSalvatori").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillSalvatori").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillBorgini").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%'	 height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<g>		<path class='Round10px PTEKStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='Round10px PTEKStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g>	<g>		<path class='Round10px FOODStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='Round10px PTEKStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g></g><g id='Borgini'>	<g>	</g>	<g>		<g>			<path class='G3dColor' d='M-335.5,437c1.9,0,1.9-3,0-3S-337.4,437-335.5,437L-335.5,437z'/>		</g>	</g>	<g>		<g>			<path class='GccColor' d='M131.3,116.4L99,115.2v0l-0.5,0l-0.5,0v0l-31.2,1.3l1.8,31.8l-28,5.1c13.1,18.8,34.9,31.1,59.4,31.1				c24.5,0,46.1-12.2,59.3-30.8l-29-5.4L131.3,116.4z'/>		</g>		<polygon class='Gd6Color' points='137.3,39.9 99,32.3 99,32.2 99,32.3 99,32.2 99,32.3 60.8,39.9 59.4,98 72.6,135.3 81.2,140 			86.1,145 99.1,145 99.5,145 112.1,145 117.1,140 125.7,135.3 138.8,98.1 		'/>		<circle class='G3dColor' cx='83.4' cy='81.4' r='2.4'/>		<polygon class='G3dColor' points='91.8,82.5 88.2,79.9 83.4,78.9 78,80.1 76,82.1 76,83 78.1,80.8 83.5,79.6 88.2,80.5 90.5,82.1 			88.4,81.9 91.2,82.9 		'/>		<polygon class='G3dColor' points='86.9,70 89.5,72.4 87.8,74 78.7,74 70.1,76.5 70.1,76.5 77.1,71.2 		'/>		<polygon class='G8eColor' points='91.8,80.4 89.2,77.8 85.1,76.7 78.5,78 75.2,80.2 72.6,83.6 75.7,80.5 79,78.3 84.9,77.2 89,78.2 					'/>		<polygon class='Gb3Color' points='94.8,84.2 93.3,90.7 89.2,95.9 88,98.6 90.6,102 93.7,102 94.3,101.6 93.7,100.5 94.4,100 96.4,100 			98.1,102 99,102 99,101 98.3,101 96.6,99 94.4,99 92.7,100.7 93.2,101.4 91.1,101.3 88.8,98.6 89.6,96.4 93.6,91.1 		'/>		<polygon class='GccColor' points='98.2,106.8 95.9,111 90.2,111 81.8,116.1 86.7,108.6 88.8,106.9 		'/>		<polyline class='GccColor' points='99,125 92.3,125 95.4,129.4 99.2,128.2 		'/>		<circle class='G3dColor' cx='115.1' cy='81.4' r='2.4'/>		<polygon class='G3dColor' points='106.7,82.5 110.3,79.9 115.1,78.9 120.2,80.1 122,82.1 122,83 120.1,80.8 114.9,79.6 110.2,80.5 			107.9,82.1 110.1,81.9 107.3,82.9 		'/>		<polygon class='G3dColor' points='111.6,70 109,72.4 110.7,74 119.8,74 128.4,76.5 128.4,76.5 121.4,71.2 		'/>		<polygon class='G8eColor' points='106.7,80.4 109.3,77.8 113.4,76.7 120,78 123.3,80.2 125.9,83.6 122.8,80.5 119.5,78.3 113.6,77.2 			109.5,78.2 		'/>		<polygon class='GccColor' points='100.3,106.8 102.6,111 108.3,111 116.6,116.1 111.8,108.6 109.7,106.9 		'/>		<polyline class='GccColor' points='99,125 106.2,125 103.1,129.4 99.1,128.2 		'/>		<polygon class='Gb3Color' points='103.4,84.2 104.8,90.7 109,95.9 110.2,98.6 107.6,102 104.5,102 103.9,101.6 104.5,100.5 103.8,100 			101.8,100 100.1,102 99,102 99,101 99.9,101 101.6,99 103.8,99 105.5,100.7 104.9,101.5 107.2,101.4 109.4,98.6 108.6,96.4 			104.6,91.1 		'/>		<polygon class='Gd6Color' points='58.9,85 54.9,83 52.1,83 50.5,84.6 49.4,89.2 52.6,99.4 54.7,100.9 54.3,102.7 56,105.8 56,107.5 			58,112 62.2,114 64,114 		'/>		<polygon class='G8eColor' points='56.1,88.8 53.9,85.1 52.5,84.5 51.3,85.7 50,89.6 53,98.9 53,97.7 51,89.8 52,89.1 53.5,90.4 			54.7,94.2 54.7,90.7 		'/>		<polygon class='G8eColor' points='56.6,100.6 57.3,103.8 60.4,104.5 		'/>		<polygon class='G8eColor' points='58.8,94.2 57.1,94.2 55.4,95.4 55.7,97.4 55.8,98.6 57,99.5 59.4,101.2 58.8,99.7 57.8,99.1 56,98 			56,96.3 57.4,96.7 58.8,95.2 		'/>		<polygon class='GccColor' points='60.3,85 54.9,83 52.1,83 50.5,84.6 49.4,89.2 52.6,99.4 54.7,100.9 54.3,102.7 56,105.8 56,107.5 			58,112 62.2,114 65,114 		'/>		<polygon class='G8eColor' points='56.1,88.8 53.9,85.1 52.5,84.5 51.3,85.7 50,89.6 53,98.9 53,97.7 51,89.8 52,89.1 53.5,90.4 			54.7,94.2 54.7,90.7 		'/>		<polygon class='G8eColor' points='56.6,100.6 57.3,103.8 60.4,104.5 		'/>		<polygon class='G8eColor' points='58.8,94.2 57.1,94.2 55.4,95.4 55.7,97.4 55.8,98.6 57,99.5 59.4,101.2 58.8,99.7 57.8,99.1 56,98 			56,96.3 57.4,96.7 58.8,95.2 		'/>		<polygon class='GccColor' points='138.5,85 143.5,83 146.4,83 148,84.6 149,89.2 145.8,99.4 143.8,100.9 144,102.7 142,105.8 			142,107.5 140.2,112 136.2,114 133.1,114 		'/>		<polygon class='G8eColor' points='142.4,88.8 144.5,85.1 145.9,84.5 147.2,85.7 147.7,89.6 144,98.9 144,97.7 146.7,89.8 146.1,89.1 			144.8,90.4 143.6,94.2 143.7,90.7 		'/>		<polygon class='G8eColor' points='141.9,100.6 141.1,103.8 138,104.5 		'/>		<polygon class='G8eColor' points='139.7,94.2 141.4,94.2 143,95.4 142.8,97.4 142.6,98.6 141.5,99.5 139.1,101.2 139.7,99.7 			139.9,99.1 141,98 141,96.3 140.3,96.7 139.3,95.2 		'/>		<polygon class='GccColor' points='88.3,96.3 88.1,95.9 84.9,100.9 82.8,106.2 85.1,101.7 		'/>		<polygon class='GccColor' points='109.8,96.3 109.9,95.9 113.2,100.9 115.2,106.2 112.9,101.7 		'/>		<polygon class='G3dColor' points='111.7,119 87.1,119 85.5,117 87,120 111.8,120 113.3,117 		'/>		<polygon class='G3dColor' points='139.2,32.9 142.7,38.7 138.8,36.6 142.8,41.5 139.2,41.2 147.5,45.9 144.9,46 149.3,55 147.3,55 			146.8,65 143.7,65.2 140.6,81.1 139.4,81.8 138.1,87.9 135.3,100.6 134.4,99.2 135.3,92.3 136.2,85.9 135.2,59.9 132.3,51.7 			125.8,45.5 122.8,43.9 115.8,44.9 110.9,44.3 105.9,42 96.6,42 89.5,42 77.7,45.7 68.5,51 67.3,49.8 64,53.4 62.2,57.2 60.8,65.3 			61.9,95.9 63.3,100.4 62.6,101.2 60.5,96 59.4,86.1 54.7,74.8 50.8,66.5 51.3,61.3 54.6,51.2 56.3,43.7 66,30.9 66,33.8 78,23.5 			78,25.2 94,18 92.9,19.3 127,23.3 125.1,25 133.1,25 130.7,27.7 		'/>	</g>	<g>		<path class='G99Color' d='M100.8,165.5l-33.5-15.2l-26,4.1c13.2,18.2,34.3,30.1,58.8,30.1c23.9,0,44.3-11.2,57.6-28.5l-26.5-5			L100.8,165.5z'/>	</g>	<rect x='92' y='164' class='GColor' width='18' height='13'/>	<g>		<path class='GColor' d='M109.3,183.9l-1-8.9H102h-2h-6.3l-1,9.1c2.4,0.2,4.8,0.4,7.3,0.4C103.1,184.5,106.2,184.3,109.3,183.9z'/>	</g>	<g>		<path class='Gb3Color' d='M98.7,165h4.3l19.1,16.1c4.5-1.5,8.9-3.3,13-5.6l1.9-25.8l-6.6-3l-0.2,3.4l-29.6,14L69,150l-0.5-3.7l-6.3,3.2			l0.3,3.4l1.5,22c4.4,2.5,9.1,4.6,14.1,6.2L98.7,165z'/>	</g>	<g>		<path class='G80Color' d='M64.3,175.1L62,148.2l-22.2,4.2C46.1,161.7,54.5,169.5,64.3,175.1z'/>	</g>	<g>		<path class='G80Color' d='M134,176c10.4-5.6,19.4-13.6,26-23.3l-23.6-4.4L134,176z'/>	</g></g></svg><p class='biointerviewed'>È il fondatore di <span class='PTEKColor'>Smart Domotics</span>, startup ospitata all'interno dell'Incubatore Torricelli di Faenza. Ha scritto 'Il piccolo manuale dell'analisi tecnica e grafica dei mercati finanziari'.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Borgini', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillBorgini").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillBorgini").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillRava").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<g>		<path class='Round10px PTEKStroke' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='Round10px PTEKStroke' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g>	</g><g id='Rava'>	<g>		<path class='GccColor' d='M128,119.8l-28,0.2l-28-0.2l-1.6,25.4L37,147.4c12.3,22.4,35.6,37.1,63,37.1c27.4,0,50.7-14.7,63-37.1			l-33.5-2.1L128,119.8z'/>	</g><g>		<polygon class='Ge6Color' points='64.2,84.2 63.1,82.3 60.3,81.3 59.2,80.8 57.1,81.9 55,86.5 55.6,94 56.1,97.7 59.3,109 61.6,110.4 			63.3,110.9 64.8,110.4 65.8,107.8 65.9,105.7 66.2,99.4 		'/>		<polygon class='G99Color' points='60,82.9 59.3,82.1 58.2,82.7 56.1,87.3 56.2,90.6 57.2,93.8 58,93.2 58,91 59.2,86.2 		'/>		<path class='G3dColor' d='M60,95.7'/>		<polygon class='G99Color' points='60.3,86.9 61.4,85.8 62.5,88.3 61.3,89.5 		'/>		<polygon class='G99Color' points='64.1,92.8 63.4,90.1 60.9,91 59,95.5 59.6,98.5 62.9,100.1 62.5,96 		'/>		<polygon class='G99Color' points='63.5,102.6 64.1,105.2 62.5,107.3 63,105 		'/>		<polygon class='Ge6Color' points='135.8,84.2 136.9,82.3 139.7,81.3 140.8,80.8 142.9,81.9 145,86.5 144.4,94 143.9,97.7 140.7,109 			138.4,110.4 136.7,110.9 135.2,110.4 134.2,107.8 134.1,105.7 133.8,99.4 		'/>		<polygon class='G99Color' points='140,82.9 140.7,82.1 141.8,82.7 143.9,87.3 143.8,90.6 143.3,93.8 143,93.2 143,91 141.3,86.2 		'/>		<polygon class='G99Color' points='139.7,86.9 138.6,85.8 137.5,88.3 138.7,89.5 		'/>		<polygon class='G99Color' points='135.9,92.8 136.6,90.1 139.1,91 141,95.5 140.4,98.5 137.1,100.1 137.5,96 		'/>		<polygon class='G99Color' points='136.5,102.6 135.9,105.2 137.5,107.3 137,105 		'/>		<polygon class='Ge6Color' points='111.7,43 101,42.3 101,42.2 100.5,42.2 100,42.2 100,42.3 89.7,43 66,51.1 66,108.1 67.8,123 			69.9,131 80,143 91.7,148.6 100,149 100.4,149 108.7,148.2 120.5,143.3 130.3,130.9 132.8,123 134.8,108.2 135.7,57.5 		'/>		<polygon class='G3dColor' points='63.5,94 65.4,95.7 65.2,78.7 65.1,68.3 67.3,62 74.2,52 78,52 78,50.4 81,49.4 84.1,49.1 91.8,52 			96.9,56.4 100.7,57.2 106.4,58.4 109.6,57 114,57 115.4,55.7 119.4,57 124.2,57 127.8,59 130.1,59 132.7,66.9 135,69.4 135,85.4 			133.4,95.6 135,93.2 137.1,89 139.3,83 139.6,76.4 140.1,71.9 132.3,45.2 129,41 131.2,41 126.7,37.5 124,37.3 124,36 125.2,36 			114,31 103.8,31.3 93.7,30 89.5,30 85.1,31.5 74.2,36.8 64.2,46.2 60,59.1 59.5,69.6 59,81.6 60.9,85.5 		'/>		<circle class='G3dColor' cx='86.3' cy='81.6' r='2.3'/>		<polyline class='G3dColor' points='90.2,82.3 90.9,81.3 89.9,80.3 88.3,79.3 86.6,79.3 84,79.4 82.3,80.1 80.7,81.1 79.5,83.3 			81.1,81.6 82.4,80.5 84,79.9 86.6,79.7 88.2,79.9 89.8,80.7 90.5,81.3 		'/>		<polyline class='Gb3Color' points='77,81.7 78,79.4 79.2,77.9 83.9,76.2 87.3,76 91,77.6 87.2,76.6 83.7,76.8 79.7,78.4 78.4,79.7 					'/>		<polygon class='G3dColor' points='88.9,110.9 90.2,112 101,112 101,114 90.1,114 		'/>		<polygon class='Gb3Color' points='89,94.9 79,107.1 79,111 80.1,107 		'/>		<polygon class='G99Color' points='98.3,98.4 96.1,97.9 95.1,96.2 93.5,96.1 93,97.2 93,97.7 93,98.5 93,99 90.6,99 89.6,98.1 			89.3,96.1 90.1,93.8 92.3,92.4 93.5,90.9 95.9,87 94.2,91.1 92.7,92.9 90.5,94.2 89.9,96.1 90.2,97.8 90.8,98.5 92.4,98.5 			92,97.7 92,97 93.2,95.6 95.8,95.7 96.6,97.5 98.4,97.9 		'/>		<circle class='G3dColor' cx='114.1' cy='81.6' r='2.3'/>		<polyline class='G3dColor' points='110.1,82.3 109.4,81.3 110.5,80.3 112.1,79.3 113.7,79.3 116.3,79.4 118.1,80.1 119.7,81.1 			120.9,83.3 119.3,81.6 117.9,80.5 116.3,79.9 113.7,79.7 112.1,79.9 110.6,80.7 109.9,81.3 		'/>		<polyline class='Gb3Color' points='123.4,81.7 122.4,79.4 121.1,77.9 116.5,76.2 113.1,76 109.3,77.6 113.1,76.6 116.6,76.8 			120.7,78.4 121.9,79.7 		'/>		<polygon class='G3dColor' points='111.5,110.9 110.2,112 101,112 101,114 110.3,114 		'/>		<polygon class='Gb3Color' points='111.7,94.9 122,107.1 122,111 120.8,107 		'/>		<polygon class='G99Color' points='102.1,98.4 104.2,97.9 105.2,96.2 107.6,96.1 109,97.2 109,97.7 108,98.5 108,99 109.8,99 			110.7,98.1 111.1,96.1 110.2,93.8 108.1,92.4 106.8,90.9 104.5,87 106.1,91.1 107.7,92.9 109.9,94.2 110.5,96.1 110.1,97.8 			109.6,98.5 108.8,98.5 110,97.7 110,97 108,95.6 105,95.7 104,97.5 102,97.9 		'/>		<polygon class='G3dColor' points='92.9,71.2 95.5,73.8 84.3,73.3 78.1,74 73.7,75.4 74.7,72.3 84.7,70.3 		'/>		<polygon class='G3dColor' points='107.8,71.2 105.2,73.8 116.4,73.3 122.6,74 127,75.4 126,72.3 116,70.3 		'/>		<path class='G3dColor' d='M129.9,109H128l-1.4,5h-3.5l-4.4-6l-5.8-5.3l-6.1-1.7h-6.3h-0.4h-6.6l-6.1,1.8l-5.8,5.3l-4.4,6h-3.5l-1.4-5			h-1.9l-6.1-12.2l0.7,11.4l2.3,14.9l2.3,8l9.8,12.6l11.7,5.1l0.2,0l0.2,0.1h1l8.4,1.1v0.1l0,0l0,0v-0.1l6.7-1.1h1l0.2-0.1l0.2,0			l11.7-5.1l9.8-12.6l2.3-8.1l2.3-15l0.7-11.3L129.9,109z M111.2,119h-10.7h-0.4h-11l-3.7-3.9l2.3-6l6.7-2.1h5.8h0.4h5.4l6.7,2			l2.3,6L111.2,119z'/>		<path class='G3dColor' d='M131,74L131,74l-7.3-1.7c-2.1-1.8-4.9-2.8-7.9-2.8c-4.7,0-8.8,2.5-10.8,6.5h-4.5h-0.4h-4.9			c-2-4-6.1-6.5-10.7-6.5c-3,0-5.5,1.1-7.6,2.8L70,74v0h-9v4h9v0.8l2.6,3.4c0.3,6.5,5.5,11.7,12,11.7c6.7,0,12.1-5.5,12.1-12.2			c0-1.2-0.2-2.6-0.6-3.6h4h0.4h3.7c-0.4,1-0.5,2.4-0.5,3.6c0,6.7,5.5,12.2,12.2,12.2c6.5,0,12-5.2,12.3-11.7l2.9-3.4V78h9v-4H131z			 M84.5,91.7c-5.5,0-10.1-4.5-10.1-10.1S79,71.6,84.5,71.6s10.1,4.5,10.1,10.1S90.1,91.7,84.5,91.7z M115.8,91.7			c-5.5,0-10.1-4.5-10.1-10.1s4.5-10.1,10.1-10.1c5.5,0,10.1,4.5,10.1,10.1S121.4,91.7,115.8,91.7z'/>		<path class='G33Color' d='M143,145.2l-7.5-0.6c-7.7,11.3-20.8,18.8-35.5,18.8c-14.8,0-27.8-7.4-35.5-18.8l-7.5,0.6l-20.6,1.7			c12.3,22.4,36.2,37.7,63.6,37.7c27.4,0,51.2-15.2,63.6-37.7L143,145.2z'/>	</g>	<g>	</g>	<g>		<path class='G4dColor' d='M100,170c18.4,0,34.4-10,43-24.8l-7.5-0.6c-7.7,11.3-20.8,18.8-35.5,18.8c-14.8,0-27.8-7.4-35.5-18.8			l-7.5,0.6C65.6,160,81.6,170,100,170z'/>	</g></g></svg><p class='biointerviewed'>Ha studiato architettura a Firenze poi è tornato a Faenza, dove ha fondato lo studio di progettazione <span class='PTEKColor'>A+4</span>. Ha due figli e tre pesci rossi. Ama la musica (Jethro Tull) e lo sport (pallavolo).</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Rava', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillRava").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillRava").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillTamba").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'><path class='FOODStroke Round10px' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/><path class='FOODStroke Round10px' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Tamba'><path class='GccColor' d='M128,119.8l-28,0.2l-28-0.2l-1.6,25.4L37,147.4c12.3,22.4,35.6,37.1,63,37.1c27.4,0,50.7-14.7,63-37.1	l-33.5-2.1L128,119.8z'/>	  <path class='G33Color' d='M149.9,145.7c-0.8-6.6-6.4-11.7-13.2-11.7H64.3c-6.8,0-12.4,5.1-13.2,11.6l-14.7,1.2c12.3,22.4,36.2,37.7,63.6,37.7c27.4,0,51.2-15.2,63.6-37.7L149.9,145.7z'/>    <polygon class='G99Color' points='105.3,179 132,152 132,122 67,122 67,152 94.4,179'/>    <polygon class='Ge6Color' points='100.2,148.1 100,148.1 99.8,148.1'/>    <path class='Ge6Color' d='M140.2,73.9c0-1.3-0.2-2.5-0.2-3.7v-1l0.1-0.4c-2.5-20.1-19.5-35.7-40.3-35.7c-22.5,0-41.1,18.3-41.1,40.8		c0,2.4,0.3,4.7,0.3,7v4.5l2.4,31.5l21.7,27.4l6.4,3.4l10.5,0.3l10.5-0.3l6.3-3.4l21.7-27.4l1.5-31.5v-7.8		C140,76.4,140.2,75.2,140.2,73.9z'/><circle class='G3dColor' cx='116.5' cy='81' r='2.9'/><polygon class='GColor' points='105.8,68.1 122,67 127.7,73.3 120.8,69.8 107.2,72'/><polygon class='G3dColor' points='106.9,82.7 112.8,78.6 116.5,78 119.8,78.3 124.8,82 124.9,83 119.6,79.1 116.5,79 113.1,79.4 	108.5,82.6 109.7,84'/><polygon class='G8eColor' points='106.1,80.5 110.8,76 115.9,76 120.2,76.5 124.1,79.2 127.7,82.8 123.7,79.6 120,77 115.9,76.2 	111,76.4'/><polyline class='Gb3Color' points='101.6,104.1 104.7,101 106.6,101 107.6,103.5 110,101.2 110,96.8 107.9,94.5 105.2,92.1 104,90 	104,92.2 107,95.1 109,97 109,100.8 107.7,102.4 106.8,100 104.1,100 101.9,103 100,103'/><polyline class='Gd6Color' points='139.8,85.2 141.2,83.1 144.2,82.6 146.6,83.6 147.1,86.7 146.2,95.1 144.6,104.1 143.6,107.7 	142,110 138.5,110.4'/><polygon class='G8eColor' points='142.5,87 143.8,85.3 144.8,85.9 145.1,87.4 144.2,94.2 143.8,91.7 144.3,87.4 144.1,86.2'/><polygon class='G8eColor' points='141.3,87 139.6,91 140.4,92.4 140.3,91'/><polygon class='G8eColor' points='140.2,94.2 142,96.7 142.4,98.6 142,101 141.2,101.3 140.1,100.8 139.4,101 141.5,102.5 142.8,102 	143.8,98.5 143.4,96.2'/><circle class='G3dColor' cx='83.5' cy='81' r='2.9'/><polygon class='GColor' points='94.2,68.1 78,67 72.3,73.3 79.2,69.8 92.8,72'/><polygon class='G3dColor' points='93.1,82.7 87.2,78.6 83.5,78 80.2,78.3 75.2,82 75.1,83 80.4,79.1 83.5,79 86.9,79.4 91.5,82.6 	90.3,84'/><polygon class='G8eColor' points='93.9,80.5 89.2,76 84.1,76 79.8,76.5 75.9,79.2 72.3,82.8 76.3,79.6 80,77 84.1,76.2 89,76.4'/><polyline class='Gb3Color' points='97.9,104.1 95.3,101 93.4,101 91.9,103.5 89,101.2 89,96.8 91.6,94.5 94,92.1 95,90 95,92.2 	92,95.1 90,97 90,100.8 91.8,102.4 93.2,100 95.9,100 98.1,103 99,103'/><polygon class='G3dColor' points='117.2,118 82.8,118 81.5,116.5 82.7,119 117.3,119 118.5,116.5'/><polygon class='GColor' points='110.7,109.6 104.5,106.3 100,109.8 95.5,106.3 89.3,109.6 79.5,114.4 81.1,114.9 90.9,111.7 	95.6,111 100,113.1 104.4,111 109.1,111.7 118.9,114.9 120.5,114.4'/><polygon class='GColor' points='136.3,108.6 132.3,117 122.3,127 120.5,127 107.2,140 100.3,140 100,140 92.8,140 79.5,127 77.7,127 	67.7,117 63.7,108.6 59.2,93.3 61.3,117.3 82.9,144.7 89.1,148 100,148.5 100,148.5 110.8,148.1 117.1,144.7 139,117.3 	139.3,93.5'/><polyline class='Gd6Color' points='59.7,85.9 57.8,83.1 54.8,82.6 52.4,83.6 51.9,86.7 52.8,95.1 54.4,104.1 55.4,107.7 57,110 	60.5,110.4'/><polygon class='G8eColor' points='56.5,87 55.2,85.3 54.2,85.9 53.9,87.4 54.8,94.2 55.2,91.7 54.7,87.4 54.9,86.2'/><polygon class='G8eColor' points='57.7,87 59.4,91 58.6,92.4 58.7,91'/><polygon class='G8eColor' points='60.1,93.1 57,96.7 56.6,98.6 57,101 57.8,101.3 58.9,100.8 59.6,101 57.5,102.5 56.2,102 55.2,98.5 	55.6,96.2'/><polygon class='GColor' points='88.3,125 111.7,125 100.1,132.6'/></g></svg><p class='biointerviewed'>È il fondatore del <span class='FOODColor'>Birrificio La Mata</span>, una delle poche aziende agricole del Paese che produce una birra 100 per cento made in Italy. Ha una figlia e il suo colore preferito è il verde.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Tamba', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillTamba").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillTamba").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillMantovani").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>	<g>		<path class='FOODStroke Round10px' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>		<path class='FOODStroke Round10px' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/>	</g></g><g id='Mantovani'>	<g>	</g>	<g>		<path class='G3dColor' d='M122,150.4'/>		<polygon class='GccColor' points='60.4,85 57.3,81.5 53.8,81.2 52.1,81.8 50.8,84.3 50.4,86.5 50.9,91.4 53,96.7 55.5,102.9 			59.3,107.8 60.5,109.8 61.6,110.2 63.5,109.9 64.9,108.4 65.3,106.2 64.4,94.2 63.8,89.1 		'/>		<path class='GColor' d='M58.8,90.5c0.2,0,1.9,1.3,1.9,1.3l0,5l1.6,1.9l-0.4,1.7l-0.4,0.4l-1.8-2H57v-1.6l2.1-4.9L58.8,90.5z'/>		<g>			<path class='Gb3Color' d='M126,119.6L99.6,120L73,119.6l-1.8,16.6l-36.3,7.5c11.8,24.1,36.6,40.8,65.2,40.8				c28.5,0,53.3-16.6,65.1-40.6l-37.4-7.7L126,119.6z'/>		</g>		<polygon class='GColor' points='54.8,97 52.1,91.9 51.4,86.6 52.2,84 54.6,83.5 55.7,84.7 58.3,87.4 58.1,89.6 56.4,89.5 55.3,88 			54,88 54,90.4 55.3,91.5 		'/>		<polygon class='GccColor' points='137.6,85 140.7,81.5 144.2,81.2 145.9,81.8 147.2,84.3 147.6,86.5 147.1,91.4 145,96.7 142.5,102.9 			138.7,107.8 137.5,109.8 136.4,110.2 134.5,109.9 133.1,108.4 132.7,106.2 133.6,94.2 134.6,89.1 		'/>		<path class='GColor' d='M139.2,90.5c-0.2,0-1.9,1.3-1.9,1.3l0,5l-1.6,1.9l0.4,1.7l0.4,0.4l1.8-2h2.8v-1.6l-2.1-4.9L139.2,90.5z'/>		<polygon class='GColor' points='143.2,97 145.9,91.9 146.6,86.6 145.8,84 143.4,83.5 142.3,84.7 139.7,87.4 139.9,89.6 141.6,89.5 			142.7,88 144,88 144,90.4 142.7,91.5 		'/>		<polygon class='GccColor' points='135.5,52.1 124.3,37 99.6,37 74.5,37 64,45.9 62.4,84.9 66.8,117.4 79,131.5 90.1,139.4 99.6,140.4 			109,139.4 120,131.5 132.2,117.4 136.6,84.9 		'/>		<path class='G3dColor' d='M63.9,92l-1.4-0.2l-1.5-5.4l-3.8-2.9l0.1-22l3.2-8.3l1.3-10.5l2.6-1.8l1.4-2.4l5.3-3.9v-2.6l1.6-2.4l2.3,0.9			l2.4-2.5l4.1-0.2l2.5-3.3l5.3,0.1l3.2-2.7l6.6,2.5c0,0,2.1-1.9,2.6-1.9s4.3,0.7,4.3,0.7l2.4,2.2l3.4,0.2l4.3,1.9l2.8,1.5l6.3,7.6			l5,5.3l4.1,6.3l3.2,5l3.3,10.8l-0.2,17.7l-2.3,2.6l-1.1,3.9l-2.4,0.8l-0.1-13.5l-0.8-2l0.2-15.7l-0.5-3.1l-5.1-6.9l-0.1-1.8			l-7.6-5.2l-1.3,1.7l5.9,5.3h-1.7l-4.5-3h-6.1l-5.2-6H106l-2.8,1.6l-9.8-0.7l-5.8-0.7L83.2,41L82.1,40l-0.9-0.4L79.9,41h-4.4			l-1.3,1.4l-9.1,8l-1.1,7.5L63,59.5v14.1l0.7,1.9L63.9,92z'/>		<circle class='G3dColor' cx='82.7' cy='82' r='2.9'/>		<polygon class='G3dColor' points='71.1,84.2 76.5,80.2 82.3,78.9 86.4,80.1 90,84.2 88.9,84 86,80.8 82.1,79.8 76.9,81.1 		'/>		<polyline class='G99Color' points='98.3,106 97,106 96,104.2 96,102.3 94,101.9 91.7,103.3 90.4,103.7 89.3,103 88.7,101.6 88.9,99.9 			90.9,95.9 89.6,99.9 89.5,101.6 90.4,102.8 91.8,102.5 93.5,101 96.7,101.7 96.5,104.1 97.2,105.5 		'/>		<polygon class='G3dColor' points='109.7,116 87.8,116 86.4,114.7 87.7,118 109.8,118 111.1,114.7 		'/>		<circle class='G3dColor' cx='114.8' cy='82' r='2.9'/>		<polygon class='G3dColor' points='126.4,84.2 121,80.2 115.2,78.9 111.1,80.1 107.5,84.2 108.5,84 111.5,80.8 115.4,79.8 120.6,81.1 					'/>		<polygon class='Gb3Color' points='87,99 79.4,107.8 78.4,121.1 80.2,107.9 		'/>		<polygon class='Gb3Color' points='76,63.5 84,59.9 97.8,62.6 84,61 		'/>		<polygon class='Gb3Color' points='110.5,99 118.1,107.8 119,121.1 117.3,107.9 		'/>		<polygon class='Gb3Color' points='121.5,63.5 113.4,59.9 99.7,62.6 113.4,61 		'/>		<path d='M141,77h-8.2c-0.1,0-0.3-0.2-0.6-0.2c-1,0-4.3-0.7-7-1.3c-2-1.3-4.9-2.1-9.5-2.1c-8.8,0-12.2,3.1-13.4,5			c-0.8-0.9-2.1-1.5-3.5-1.5c-1.1,0-2.5,0.5-3.3,1.5c-1.2-1.9-4.5-5-13.2-5c-4.5,0-7.6,0.8-9.6,2.1c-2.6,0.6-5.7,1.3-7.1,1.3			c-0.3,0-0.5,0.2-0.6,0.2h-9v3h9.6c0.1,1,0.1,0.4,0.1,0.4s2.2,0.8,3.3,1.9c0,0.4,0,1,0,1.4c0,2.9,1.1,5.8,2.9,8			c1.6,1.8,4.6,3.8,9.8,3.8c11.5,0,14-9.4,14.5-14.4h0.1c0-1,1.3-2.8,2.7-2.8c1.4,0,3.1,1.8,3.1,2.8h0.1c0.6,5,3.1,14.4,14.5,14.4			c5.1,0,8.1-2,9.7-3.9c1.9-2.1,2.9-5,2.9-7.9c0-0.4,0.2-0.9,0.2-1.3c1.1-1.1,2.7-2,2.7-2s0,0.6,0.1-0.4h8.8V77z M92.7,87.1			c-2.2,4.5-5.9,6.8-11.2,6.8c-8.7,0-10.9-6.7-10.9-10.2c0-4.1,0.9-8.6,11.7-8.6c10.2,0,12,4.4,12.2,5C94.5,80.8,94.3,84,92.7,87.1z			 M116.6,94c-5.2,0-9-2.3-11.2-6.8c-1.5-3.1-1.8-6.3-1.8-7c0.2-0.6,1.9-5,12.2-5c10.8,0,11.7,4.4,11.7,8.6			C127.5,87.3,125.3,94,116.6,94z'/>		<g>			<rect x='67' y='78' class='G99Color' width='3' height='1'/>		</g>		<g>			<rect x='128' y='78' class='G99Color' width='3' height='1'/>		</g>		<polyline class='G99Color' points='99.7,106 101,106 102,104.2 102,102.3 104,101.9 106.3,103.3 107.6,103.7 108.8,103 109.3,101.6 			109.1,99.9 107.1,95.9 108.4,99.9 108.5,101.6 107.6,102.8 106.2,102.5 104.6,101 101.4,101.7 101.5,104.1 100.8,105.5 		'/>	</g>	<g>		<path class='Ge6Color' d='M127.2,131.9c-2.3,3.8-6.6,7-12.2,9c-0.2,0.1-0.2,0.1-0.4,0.2c-4.8,1.9-8.2,7.4-8.2,13.9			c13.4-1.5,24.5-8.1,29.9-17.1L127.2,131.9z'/>		<path class='Ge6Color' d='M94,155c0-6.5-3.4-12-8.3-13.9c-0.2-0.1-0.3-0.1-0.5-0.2c-6.7-2.4-11.6-6.5-13.4-11.3l-8,8.1			C69.2,146.9,80.5,153.6,94,155z'/>	</g>	<g>		<path class='Ge6Color' d='M136.2,137.9L106,155H94l-30.2-17.3l-29,6c11.8,24.1,36.6,40.8,65.2,40.8c28.5,0,53.1-16.5,65-40.4v-0.2			L136.2,137.9z'/>	</g>	<circle class='Gb3Color' cx='100.2' cy='160.8' r='2.2'/></g></svg><p class='biointerviewed'>È lo chef titolare del ristorante <span class='FOODColor'>FM</span>, del rispettivo bistrot e di Fmarket. Vive a Faenza e oltre al cibo ha un debole per la musica.</p>");
	        TweenMax.from('.Round10px', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenMax.from('#Mantovani', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillMantovani").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillMantovani").click(function(event) {
	    	effettoClickMetro.play();
		});

		/*

		IT

		*/
		$("#fillValmori").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='ComingSoon' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>  <path class='PTEKStroke MetroLine' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>	<path class='ITStroke MetroLine' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Text'>	<text transform='matrix(1 0 0 1 60.9619 109.0674)'><tspan x='0' y='0' class='Regular21 WColor'>coming</tspan><tspan x='13' y='19' class='Regular21 WColor'>soon</tspan></text></g></svg><p class='biointerviewed'>Nato e cresciuto a Faenza, nel 1988 fonda <span class='ITColor'>ImageLine</span>. Padre di quattro figli, ha un debole per gli sport estremi, tra le altre cose.</p>");
	        TweenMax.from('#Circle > .ITStroke.MetroLine', 2, {
			    drawSVG: "0%",
			    ease: Expo.easeOut,
			});
			TweenMax.from('#Circle > .PTEKStroke.MetroLine', 2, {
			    drawSVG: "0%",
			    ease: Expo.easeOut,
			});
			TweenMax.from('.Regular21', 0.5, {
			    opacity: 0,
			    ease: Expo.easeOut,
			    delay: 0.4
			});
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillValmori").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#ComingSoon").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillValmori").click(function(event) {
	    	effettoClickMetro.play();
		});


		$("#fillZauli").mouseover(function() {
	    	effettoHover.play();
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='ComingSoon' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>  <path class='ITStroke MetroLine' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>	<path class='ITStroke MetroLine' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Text'>	<text transform='matrix(1 0 0 1 60.9619 109.0674)'><tspan x='0' y='0' class='Regular21 WColor'>coming</tspan><tspan x='13' y='19' class='Regular21 WColor'>soon</tspan></text></g></svg><p class='biointerviewed'>Faentino, è uno dei co-fondatori di <span class='ITColor'>Tecla Digital Business</span>, dove si occupa di programmazione. Ama lo sport e la tecnologia.</p>");
	        TweenMax.from('#Circle > .ITStroke.MetroLine', 2, {
			    drawSVG: "0%",
			    ease: Expo.easeOut,
			});
			TweenMax.from('.Regular21', 0.5, {
			    opacity: 0,
			    ease: Expo.easeOut,
			    delay: 0.4
			});
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillZauli").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#ComingSoon").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillZauli").click(function(event) {
	    	effettoClickMetro.play();
		});


	    $("#fillFionda").mouseover(function() {
	    	effettoHover.play();	 
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='ComingSoon' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Circle'>  <path class='ITStroke MetroLine' d='M100,34.5c42.8,0,77.5,34.7,77.5,77.5c0,42.8-34.7,77.5-77.5,77.5'/>	<path class='ITStroke MetroLine' d='M100,189.5c-42.8,0-77.5-34.7-77.5-77.5c0-42.8,34.7-77.5,77.5-77.5'/></g><g id='Text'>	<text transform='matrix(1 0 0 1 60.9619 109.0674)'><tspan x='0' y='0' class='Regular21 WColor'>coming</tspan><tspan x='13' y='19' class='Regular21 WColor'>soon</tspan></text></g></svg><p class='biointerviewed'>Nato a Ravenna, ha vissuto a Parigi, dove ha condotto studi sulla fisica e l’informatica. Tornato in Italia, ha fondato a Faenza <span class='ITColor'>Diannea Mag News</span>, dove si occupa di marketing digitale.</p>");
	        TweenMax.from('#Circle > .ITStroke.MetroLine', 2, {
			    drawSVG: "0%",
			    ease: Expo.easeOut,
			});
			TweenMax.from('.Regular21', 0.5, {
			    opacity: 0,
			    ease: Expo.easeOut,
			    delay: 0.4
			});
	        TweenMax.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillFionda").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#ComingSoon").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillFionda").click(function(event) {
	    	effettoClickMetro.play();
		});


	});

}]);
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
		TweenMax.from('#lineRed', 1.5, {
		    opacity: 0,
		    delay: 1.25
		});
		TweenMax.from('#lineBlue', 1.5, {
		    opacity: 0,
		    delay: 1.50
		});
		TweenMax.from('#lineYellow', 1.5, {
		    opacity: 0,
		    delay: 1.75
		});
		TweenMax.from('#lineGreen', 1.5, {
		    opacity: 0,
		    delay: 2
		});
		/*

		Mouseover & mouseleave on #interviewed

		*/
	    $("#fillSavorani").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Ha vissuto in diverse città, tra cui Brighton, Milano e Genova, poi è tornata a Faenza, dove gestisce il mercato spagnolo e sud americano di <span class='MAVColor'>Gigacer</span>. Ha tre figli, ama la letteratura e lo sci.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillBandini").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Nato e cresciuto a Faenza, è co-fondatore di <span class='MAVColor'>Blacks Composites</span>, dove si occupa della parte commerciale e manageriale. Padre di cinque figli, non lo vedrete «mai fare shopping all'Ikea», dice.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillTampieri").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>È l'idea maker di <span class='MAVColor'>GreenBone</span> e direttrice dell'Istituto di Scienza e Tecnologia dei Materiali Ceramici. Vive a Faenza, ha due figli, un gatto e un cane. Adora l’antiquariato.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillRuta").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Faentina, si occupa di marketing strategico e innovazione digitale all'interno di <span class='MAVColor'>Certimac</span>. Adora Franco Battiato e i Chimical Borther («hanno più cose in comune di quanto si creda», dice).</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillBertoni").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Vive a Castel Bolognese ed è il co-fondatore di <span class='PTEKColor'>Bertoni Srl – Green Technology</span>. È timido e introverso ma non sul campo di gioco: palleggiatore, non riesce a dire di no a una partita di pallavolo con gli amici.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillMartelli").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Ha fondato <span class='PTEKColor'>Garvan Acoustic</span> insieme all'amico e collega Roberto Gaudenzi, entrambi faentini. La sua passione? I motori.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillPeroni").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Dirige lo studio <span class='PTEKColor'>Marco Peroni Ingegneria</span>, fra le mura di una chiesa sconsacrata del Quattrocento, a Faenza. Ha due figli, con cui condivide la passione per le mostre d’arte.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillSalvatori").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Artista, scultore, ceramista, dj, creativo. Classe 1975, vive a Solarolo. Dicono di lui: «Squisita tecnica artigianale al servizio di una grande ironia».</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillBorgini").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>È il fondatore di <span class='PTEKColor'>Smart Domotics</span>, startup ospitata all'interno dell'Incubatore Torricelli di Faenza. Ha scritto 'Il piccolo manuale dell'analisi tecnica e grafica dei mercati finanziari'.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillRava").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Ha studiato architettura a Firenze poi è tornato a Faenza, dove ha fondato lo studio di progettazione <span class='PTEKColor'>A+4</span>. Ha due figli e tre pesci rossi. Ama la musica (Jethro Tull) e lo sport (pallavolo).</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillTamba").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>È il fondatore del <span class='FOODColor'>Birrificio La Mata</span>, una delle poche aziende agricole del Paese che produce una birra 100 per cento made in italy. Ha una figlia e il suo colore preferito è il verde.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
	    $("#fillMantovani").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>È lo chef titolare del ristorante <span class='FOODColor'>FM</span>, del rispettivo bistrot e di Fmarket. Vive a Faenza e oltre al cibo ha un debole per la musica.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
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
		/*

		IT

		*/
		$("#fillValmori").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Nato e cresciuto a Faenza, nel 1988 fonda <span class='ITColor'>ImageLine</span>. Padre di quattro figli, ha un debole per gli sport estremi, tra le altre cose.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillValmori").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
		$("#fillZauli").mouseover(function() {
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Nato e cresciuto a Faenza, è uno dei co-fondatori di <span class='ITColor'>Tecla Digital Business</span>, dove si occupa di programmazione. Ama lo sport e la tecnologia.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillZauli").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
	    $("#fillFionda").mouseover(function() {	 
		    $(this).css({'fill': '#fff'});
		    $("div.ContainerProfileMetro").html("<svg id='interviewed' class='MarginTop10pct MarginBottom5pct FloatLeft' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='50%' height='50%' viewBox='0 0 200 200' style='enable-background:new 0 0 200 200;' xml:space='preserve'><g id='Livello_3'><path class='ITLine' d='M100,33.1c-41.9,0-78,34.9-78,78c0,43.1,36.1,78,78,78'/></g><g id='Livello_2'><path class='MAVLine' d='M99.9,189.2c42.5,0,78-34.9,78-78c0-43.1-35.6-78-78-78'/></g><g id='Livello_1'><g><path class='st6' d='M150.9,132h-49.6h-1H50.8l-14.6,14.6c12.1,22.2,35.4,37.5,62.2,38.2c0.6,0,1.3,0,1.9,0c0.6,0,1.3,0,1.9,0 c27.1-0.7,50.6-16.3,62.6-38.8L150.9,132z'/><rect x='57' y='84' class='st0' width='87' height='56'/><polygon class='st8' points='100,93 100,132 133.1,132 123,122.9 123,93'/><polygon class='st12' points='100,93 100,140 83.7,140 75.5,132 64.3,132 75,122.9 75,93'/><polygon class='st12' points='100,93 100,140 113.8,140 122,132 133.1,132 123,122.9 123,93'/><polygon class='st10' points='130.2,35.1 115.6,21 105.9,21 100,21 91.5,21 81.8,21 68.1,35.1 68,54.2 68,97.4 79,108.1 88.9,113 100,113 108.5,113 119.2,108.1 131,97.4 131,54.2'/><polygon class='st2' points='71,135.1 71,116.7 71,75.3 71,66.9 71,49.4 84.9,30.8 103.2,22 106,23.4 112.3,17.2 99.6,4.5 70.9,18.5 47.9,58.4 45,95.5 34.4,111.6 34.4,158.8 50.2,142.2 63.6,142.6'/><polygon class='st12' points='101.8,52.3 106.5,47 121.2,47 128.7,54 121.2,51 107.7,50.8 104,55 104,67.5 102,64.6'/><polyline class='st12' points='106,71.3 109,77.6 109,82 107.6,82 105.8,80.4 103.7,82 101.7,82 97.8,82 97.8,82 101.7,82 104.6,79 106,79 107,80 107,77.8 103.4,71.3'/><polyline class='st12' points='95.8,71.3 92,77.6 92,82 93,82 94.7,80.4 96.9,82 98.9,82 102.6,82 102.6,82 98.9,82 95.9,79 94.6,79 94,80 94,77.8 98,71.3'/><polygon class='st11' points='85.2,92.4 86.4,93.9 93.9,94.1 100,95.8 100,97.2 93.9,95.7 85.9,94.5'/><polygon class='st11' points='114.9,92.4 113.9,93.8 106.1,94.1 100,95.8 100,97.2 106.2,95.7 114.2,94.5'/><polygon class='st12' points='98.6,53.3 93,47 78.2,47 70.7,54 78.2,51 92.5,50.8 97,55 97,67.5 98.7,65.6'/><polygon class='st2' points='111.8,17 125.2,17 147,40.5 147,162.5 130,144.5 130,39.4 114.9,25 106,23.4'/><polyline class='st2' points='163.2,154.8 150.4,142 147,142 147,98.7 163,115.6 163.2,128.8'/><rect x='84' y='140' class='st9' width='32' height='6'/><rect x='81' y='126' class='st9' width='36' height='2'/><rect x='98' y='126' class='st9' width='3' height='5'/><circle class='st5' cx='84.6' cy='59.3' r='3'/><polygon class='st11' points='70.6,54 78.2,47 92.8,47 91.9,50.4 78.2,50.8'/><polyline class='st11' points='107.2,47.5 107.9,50.7 121.4,51.1 128.8,54 121.2,47 108,47'/><polyline class='st11' points='88.4,62.1 81.2,64.7 76,62.2 73,65.3 73,61.9 79.5,55.5 86.9,55.4 89.3,57.7 89.3,57.7 92,60.8 87.9,57.7 80.8,57.8 76.7,61.1 81.4,63.5'/><circle class='st11' cx='84.6' cy='59.3' r='3'/><g><circle class='st7' cx='99.4' cy='134.1' r='3.1'/><path class='st4' d='M99.4,138.8c-2.5,0-4.6-2.1-4.6-4.6c0-2.5,2.1-4.6,4.6-4.6c2.5,0,4.6,2.1,4.6,4.6 C104,136.7,101.9,138.8,99.4,138.8z M99.4,132.5c-0.9,0-1.6,0.7-1.6,1.6c0,0.9,0.7,1.6,1.6,1.6s1.6-0.7,1.6-1.6 C101,133.3,100.3,132.5,99.4,132.5z'/></g><polyline class='st11' points='111.5,62.1 118.7,64.7 123.9,62.2 127,65.3 127,61.9 120.5,55.5 113.1,55.4 110.7,57.7 110.7,57.7 108,60.8 112.1,57.7 119.2,57.8 123.3,61.1 118.5,63.5'/><circle class='st11' cx='115.4' cy='59.3' r='3'/></g></g></svg><p class='biointerviewed'>Nato e cresciuto a Ravenna, ha vissuto a Parigi, dove ha condotto studi sulla fisica e l’informatica. Tornato in Italia, ha fondato a Faenza <span class='ITColor'>Diannea Mag News</span>, dove si occupa di marketing digitale.</p>");
	        TweenLite.from('.ITLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('.MAVLine', 2, {
	            drawSVG: '0%',
	            ease: Expo.easeOut
	        });
	        TweenLite.from('#Livello_1', 0.5, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
	        TweenLite.from('.biointerviewed', 1, {
	            opacity: 0,
	            ease: Expo.easeOut,
	            delay: 0.4
	        });
		});
		$("#fillFionda").mouseleave(function() {
        	$(this).css({'fill': 'inherit'});
		    $("svg#interviewed").remove();
		    $("p.biointerviewed").remove();
		});
	});
}]);
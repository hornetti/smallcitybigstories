app.controller('ProfileController', ['$scope', '$route', 'characters', '$routeParams', function($scope, $route, characters, $routeParams) {
	characters.success(function(data) {
    	$scope.details = data[$routeParams.id];
    	$scope.paramaters = $routeParams.id;
    	$scope.comparisons = data;
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
	    	},
	    	{
	    		element : "* startup"
	    	},
	    	{
	    		element : "** artigiani"
	    	}
	    ];
  	});
  	/*********************************************************/
	/*********************   VideoJS   **********************/
	/*******************************************************/

	angular.element(document).ready(function() {
		var player = videojs('VideoIntervistato');
		   
		player.markers({
		   markerStyle: {
		      'width':'9px',
		      'border-radius': '40%',
		      'background-color': 'orange'
		   },
		   markerTip:{
		      display: true,
		      text: function(marker) {
		         return "I am a marker tip: "+ marker.text;
		      }
		   },
		   breakOverlay:{
		      display: true,
		      displayTime: 4,
		      style:{
		         'width':'100%',
		         'height': '30%',
		         'background-color': 'rgba(10,10,10,0.6)',
		         'color': 'white',
		         'font-size': '16px'
		      },
		      text: function(marker) {
		         return "This is a break overlay: " + marker.overlayText;
		      },
		   },
		   markers: [
		      {time: 9.5, text: "this", overlayText: "1", class: "special-blue"},
		      {time: 16,  text: "is", overlayText: "2"},
		      {time: 23.6,text: "so", overlayText: "3"},
		      {time: 28,  text: "cool", overlayText: "4"}
		   ]
		});
	});
  	/*** Close Button ***/
	angular.element(document).ready(function() {
		$('#XBtnTesto').mouseover(function() {
		    TweenLite.to('.stroke', 1, {
				drawSVG: "50% 50%",
				ease: Expo.easeOut
		    });
		});
		$('#XBtnTesto').mouseleave(function() {
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
	});
	/**/
	angular.element(document).ready(function() {
		var bars = ['.foundation14', '.foundation21', '.foundation23', '.foundation7'];
		var bars_dates = ['.foundation8', '.foundation3', '.foundation22', '.foundation12',];
		TweenLite.from('.foundation2', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenMax.staggerFrom(bars_dates, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenLite.from('.k_txt', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 3
		});
	});
	angular.element(document).ready(function() {
		var bars = ['.revenue17', '.revenue2', '.revenue4', '.revenue16', ];
		TweenLite.from('.revenue1', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenLite.from('.revenue77', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 2.7
		});
		TweenLite.from('.revenue11', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
		TweenLite.from('.revenue5', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 2
		});
	});
	angular.element(document).ready(function() {
		var bars = ['.LinePTEK', '.LineIT', '.LineMAV', '.LineFOOD'];
		TweenMax.staggerFrom(bars, 2, {
			drawSVG: 0,
			delay: 2,
			ease: Expo.easeOut,
			force3D: true
		}, 0.2);
		TweenLite.from('.greyline', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 1
		});
		TweenLite.from('.greytext', 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
	});
	angular.element(document).ready(function() {	
		var circles = ['.CircleFOOD', '.CircleIT', '.CircleMAV', '.CirclePTEK']
		TweenLite.from(circles, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0.5
		});
		TweenLite.from(['.StatLine1', '.StatLine2'], 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 2
		});
		TweenLite.from(['.ReadingLinePTEK', '.ReadingLinePTEKaux'], 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 3
		});
		TweenLite.from(['.PTEK_', '.PTEKaux_'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 3
		});
		TweenLite.from(['.White'], 2, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
	});
	angular.element(document).ready(function() {
		var logo_globo = ['.Logo1Lines2px', '.Logo1Lines5px'];
		TweenLite.from(logo_globo, 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0
		});
		TweenLite.from('.Logo2Lines5px', 2, {
			drawSVG: "0%",
			ease: Expo.easeOut,
			delay: 0
		});
	});
}]);
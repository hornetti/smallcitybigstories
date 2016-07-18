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
		var v = document.querySelector("video");
		var t = document.querySelector("track");
		var b = document.querySelector("#bar");

		v.addEventListener('click',play,false);
		v.addEventListener('timeupdate',update,false);
		t.addEventListener('loaded',render,false); // Bug in FF31 MAC: wrong event name
		t.addEventListener('load',render,false);

		function play() {
			if (v.paused) {
				v.play(); 
			} else { 
				v.pause(); 
			}
		}

		function update() {
			var p = v.currentTime/v.duration*100;
			b.background = "linear-gradient(to right, #500 "+p+"%, #000 "+p+"%)";
		}

		function render() {
			var c = v.textTracks[0].cues;
			for (var i=0; i<c.length; i++) {
				var s = document.createElement("span");
				s.innerHTML = c[i].text;
				s.setAttribute('data-start',c[i].startTime);
				s.width = ((c[i].endTime-c[i].startTime)/888*480-7)+'px';
				s.addEventListener("click",seek);
				b.appendChild(s);
			}
		}

		function seek(e) {
			v.currentTime = this.getAttribute('data-start');
			if (v.paused) { 
				v.play(); 
			}
		}
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
app.controller('ProfileController', ['$scope', function($scope) {
	$scope.Link_Revenue = 'map/revenue';
	$scope.Link_Employees = 'map/employees';
	$scope.Link_Foundation = 'map/foundation';
	$scope.Link_Motivation = 'map/motivation';
	$scope.Link_Service = 'map/service';
	$scope.Link_Market = 'map/reference_market';
	$scope.Link_Growth = 'map/economic_growth';
	$scope.Link_Type = 'map/type';
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
  	/**   Close Button   **/
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
	/**   VideoJS   **/
	/*
	angular.element(document).ready(function() {
		var AM = videojs('AndreaMartelli');
		AM.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var AS = videojs('AndreaSalvatori');
		AS.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var AT = videojs('AnnaTampieri');
		AT.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var BS = videojs('BarbaraSavorani');
		BS.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var FM = videojs('FabrizioMantovani');
		FM.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var GB = videojs('GabrieleBandini');
		GB.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var GR = videojs('GiuliaRuta');
		GR.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var IV = videojs('IvanoValmori');
		IV.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var MP = videojs('MarcoPeroni');
		MP.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var MT = videojs('MarcoTamba');
		MT.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var MF = videojs('MaurizioFionda');
		MF.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var PR = videojs('PaoloRava');
		PR.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var RB = videojs('RaffaeleBorgini');
		RB.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var RB = videojs('RobertoBertoni');
		RB.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
		var SZ = videojs('StefanoZauli');
		SZ.markers({
			markerStyle: {
				'width': '5px',
				'background-color': '#ff6666'
			},
			markerTip: {
				display: true,
				text: function(marker) {
					return "Cap: " + marker.text;
				}
			},
			markers: [
				{
					time: 9,
					text: "1. Aaaaa"
				},
				{
					time: 16, 
					text: "2. Bbbbb"
				},
				{
					time: 23, 
					text: "3. Ccccc"
				},
				{
					time: 28, 
					text: "4. Ddddd"
				},
				{
					time: 33, 
					text: "5. Eeeee"
				},
				{
					time: 37, 
					text: "6. Fffff"
				},
				{
					time: 41, 
					text: "7. Ggggg"
				},
				{
					time: 48, 
					text: "8. Hhhhh"
				}
			]
		});
	});*/
}]);
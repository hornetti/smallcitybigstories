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
}]);
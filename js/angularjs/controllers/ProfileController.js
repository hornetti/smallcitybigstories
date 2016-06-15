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
}]);
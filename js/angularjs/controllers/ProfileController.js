app.controller('ProfileController', ['$scope', '$route', 'characters', '$routeParams', function($scope, $route, characters, $routeParams) {
	characters.success(function(data) {
    	$scope.details = data[$routeParams.id];
    	$scope.paramaters = $routeParams.id;
    	$scope.comparisons = data;
    	$scope.Legenda = [
	    	{
	    		uno : " A — C'erano una serie di occasioni che andavano colte"
	    	},
	    	{
	    		due : "B — È frutto di un'idea personale"
	    	},
	    	{
	    		tre : "C — A seguito di una particolare competenza specifica"
	    	},
	    	{
	    		quattro : "D — A seguito di una passione da coltivare"
	    	},
	    	{
	    		startup : "* startup"
	    	},
	    	{
	    		artigiani : "** artigiani"
	    	}
	    ];
  	});
}]);
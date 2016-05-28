app.controller('ProfileController', ['$scope', 'characters', '$routeParams', function($scope, characters, $routeParams) {
	characters.success(function(data) {
    	$scope.detail = data[$routeParams.id];
  	});
}]);
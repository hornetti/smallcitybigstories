app.controller('MapController', ['$scope', 'characters', function($scope, characters) {
  	characters.success(function(data) {
    	$scope.characters = data;
	});
}]);
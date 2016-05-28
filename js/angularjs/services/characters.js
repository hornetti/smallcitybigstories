app.factory('characters', ['$http', function($http) {
	return $http.get('http://hornetti.github.io/smallcitybigstories/js/angularjs/services/characters.json')
	.success(function(data) {
		return data;
	})
	.error(function(data) {
		return data;
	});
}]);

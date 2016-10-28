app.directive('topMenu', function() { 
  	return { 
	    restrict: 'E', 
	    templateUrl: 'js/angularjs/directives/top-menu.html',
	    link: function(scope, element, attr) {
	    	angular.element(document).ready(function() {
	    		
				$('#BacktoFaenza').mouseover(function() {
					$('.Posizione').text('Torna alla mappa');
				});
				
				$('#BacktoFaenza').mouseleave(function() {
					$('.Posizione').text('Faenza');
				});
				
			});
	    }
  	};
});

app.directive('bottomMenu', function() { 
  	return { 
	    restrict: 'E', 
	    templateUrl: 'js/angularjs/directives/bottom-menu.html',
	    link: function(scope, element, attr) {
	    	angular.element(document).ready(function() {
				
				var effettoHover = document.getElementById("effectHover");
	    		
	    		$(".EffHover").mouseenter(function() {
	    			effettoHover.play();
				});
	    		
	    	});
	    }
  	};
});
app.controller('ManifestoController', ['$scope', function($scope) {
	angular.element(document).ready(function() {
	    $('.arrow-prev').animate({
	        opacity: 0
	    });
	    $('.arrow-next').click(function() {
	        var currentSlide = $('.active-slide');
	        var nextSlide = currentSlide.next();
	        var prevSlide = currentSlide.prev();
	        if (nextSlide.length === 0) {
	            nextSlide = $('.slide').first();
	        }
	        if (prevSlide.length !== 0) {
	            $('.arrow-prev').animate({
	                opacity: 1
	            });
	        }
	        currentSlide.fadeOut(600).removeClass('active-slide');
	        nextSlide.fadeIn(600).addClass('active-slide');
	    });
	    $('.arrow-prev').click(function() {
	        var currentSlide = $('.active-slide');
	        var nextSlide = currentSlide.next();
	        var prevSlide = currentSlide.prev();
	        if (prevSlide.length === 0) {
	            $('.arrow-prev').animate({
	                opacity: 0
	            });
	        }
	        currentSlide.fadeOut(600).removeClass('active-slide');
	        prevSlide.fadeIn(600).addClass('active-slide');
	    });
	});
}]);
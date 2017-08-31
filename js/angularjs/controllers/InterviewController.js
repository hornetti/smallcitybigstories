app.controller('InterviewController', ['$scope', '$window', function($scope, $window) {            
    
    var videointerview = document.getElementById('VideoIntervista'); 
        videointerview.volume = 0.08;

    $scope.PlayPause = function() {
        if (videointerview.paused) {
            videointerview.play();
        } else {
            videointerview.pause();
        }
    };

    $scope.BackTo = function() {
        $window.history.back();
        videointerview.pause();
    };

    $scope.resetVolume = function() {
        audioAmbient.volume = 0.015;
    }

    angular.element(document).ready(function() {

        TweenMax.from('#PlayerVideo > #StructureCircle > circle', 1.5, {
            drawSVG: "0%",
            ease: Expo.easeOut,
            delay: 0.5
        });
        TweenMax.from('#PlayerVideo > #StructureLine > line', 1, {
            drawSVG: "50% 50%",
            ease: Expo.easeOut,
            delay: 1.5
        });
        TweenMax.from('#PlayerVideo > #ExitVideo > circle', 1.5, {
            drawSVG: "0%",
            ease: Expo.easeOut,
            delay: 0.5
        });
        TweenMax.from('#PlayerVideo > #ExitVideo > line', 1, {
            drawSVG: "50% 50%",
            ease: Expo.easeOut,
            delay: 2
        });
        TweenMax.from('#PlayerVideo > #PlayPause > circle', 1.5, {
            drawSVG: "0%",
            ease: Expo.easeOut,
            delay: 0.5
        });
        TweenMax.from('#PlayerVideo > #PlayPause > #npAction > rect', 1, {
            drawSVG: "50% 50%",
            ease: Expo.easeOut,
            delay: 2
        });

        // ExitVideo

        $('#PlayerVideo > #ExitVideo').mouseover( function() {
            $(this).children().addClass('ControllCircle');
        });

        $('#PlayerVideo > #ExitVideo').mouseleave( function() {
            $(this).children().removeClass("ControllCircle");
        });

        // PlayPause

        $('#PlayerVideo > #PlayPause').mouseover( function() {
            $(this).children().addClass('ControllCircle');
        });
        
        $('#PlayerVideo > #PlayPause').mouseleave( function() {
            $(this).children().removeClass("ControllCircle");
        });

    });
}]);
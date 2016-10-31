app.controller('InterviewController', ['$scope', function($scope) {
	angular.element(document).ready(function() {
        
		TweenLite.from('#PlayerVideo > #Structure', 1, {
			drawSVG: "50% 50%",
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});

        TweenLite.from('#PlayerVideo > #Fullscreen', 1, {
            drawSVG: "50% 50%",
            opacity: 0,
            ease: Expo.easeOut,
            delay: 1
        });

        TweenLite.from('#PlayerVideo > #PlayPause', 1, {
            drawSVG: "50% 50%",
            opacity: 0,
            ease: Expo.easeOut,
            delay: 1
        });

		TweenLite.from('#PlayerVideo > #Structure > text', 1, {
			opacity: "0",
			ease: Expo.easeOut,
			delay: 2
		});

        $('#PlayerVideo > #HoverStructure > circle').mouseover( function() {
            $(this).next().addClass('HoverEl');
            $(this).addClass('HoverCircle');
        });
        $('#PlayerVideo > #HoverStructure > circle').mouseleave( function() {
            $("#PlayerVideo > #HoverStructure > circle.HoverCircle").next().removeClass("HoverEl");
            $("#PlayerVideo > #HoverStructure > circle.HoverCircle").removeClass("HoverCircle");
        });

        // html5media enables <video> and <video> tags in all major browsers
        // External File: http://api.html5media.info/1.1.8/html5media.min.js


        // Add user agent as an attribute on the <html> tag...
        // Inspiration: http://css-tricks.com/ie-10-specific-styles/
        var b = document.documentElement;
        b.setAttribute('data-useragent', navigator.userAgent);
        b.setAttribute('data-platform', navigator.platform);


        // HTML5 video player + playlist controls...
        // Inspiration: http://jonhall.info/how_to/create_a_playlist_for_html5_video
        // Mythium Archive: https://archive.org/details/mythium/
        jQuery(function ($) {
            var supportsvideo = !!document.createElement('video').canPlayType;
            if (supportsvideo) {
                var index = 0,
                    playing = false,
                    mediaPath = 'http://www.smallcitybigstories.com/video/',
                    extension = '',
                    tracks = [{
                        "track": 1,
                        "name": "intervista uno",
                        "length": "01:15",
                        "file": "intervista-split-1"
                    }, {
                        "track": 2,
                        "name": "intervista due",
                        "length": "01:19",
                        "file": "intervista-split-2"
                    }, {
                        "track": 3,
                        "name": "intervista tre",
                        "length": "01:19",
                        "file": "intervista-split-3"
                    }, {
                        "track": 4,
                        "name": "intervista quattro",
                        "length": "01:19",
                        "file": "intervista-split-4"
                    }, {
                        "track": 5,
                        "name": "intervista cinque",
                        "length": "01:19",
                        "file": "intervista-split-5"
                    }],
                    trackCount = tracks.length,
                    npAction = $('#npAction'),
                    npTitle = $('#npTitle'),
                    video = $('#video1').bind('play', function () {
                        playing = true;
                        npAction.html('<rect x="18.2" y="31.3" class="Stroke2px PTEKStroke" width="5" height="17"/><rect x="28.2" y="31.3" class="Stroke2px PTEKStroke" width="5" height="17"/>');
                    }).bind('pause', function () {
                        playing = false;
                        npAction.html('<polygon class="Stroke2px PTEKStroke" points="19.2,30.1 35.4,39.5 19.2,48.9"/>');
                    }).bind('ended', function () {
                        npAction.html('<polygon class="Stroke2px PTEKStroke" points="19.2,30.1 35.4,39.5 19.2,48.9"/>');
                        if ((index + 1) < trackCount) {
                            index++;
                            loadTrack(index);
                            video.play();
                        } else {
                            video.pause();
                            index = 0;
                            loadTrack(index);
                        }
                    }).get(0),
                    circle = $('#PlayerVideo > #Structure > circle').click(function () {
                        var id = parseInt($(this).index());
                        if (id !== index) {
                            playTrack(id);
                        }
                    }),
                    loadTrack = function (id) {
                        $('.ActiveCircle').removeClass('ActiveCircle');
                        $('#PlayerVideo > #Structure > circle:eq(' + id + ')').addClass('ActiveCircle');
                        $('.ActiveEl').removeClass('ActiveEl');
                        $('#PlayerVideo > #Structure > text:eq(' + id + ')').addClass('ActiveEl');
                        npTitle.text(tracks[id].name);
                        index = id;
                        video.src = mediaPath + tracks[id].file + extension;
                    },
                    playTrack = function (id) {
                        loadTrack(id);
                        video.play();
                    };
                extension = video.canPlayType('video/mp4') ? '.mp4' : video.canPlayType('video/ogg') ? '.mov' : '';
                loadTrack(index);
            }
        });
	});
}]);
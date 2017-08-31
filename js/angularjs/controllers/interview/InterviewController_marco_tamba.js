app.controller('InterviewController_marco_tamba', ['$scope', '$window', function($scope, $window) {            
    
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
        
        // Player Video  

        var b = document.documentElement;
        b.setAttribute('data-useragent', navigator.userAgent);
        b.setAttribute('data-platform', navigator.platform);

        jQuery(function ($) {
            var supportsvideo = !!document.createElement('video').canPlayType;
            if (supportsvideo) {
                var index = 0,
                    playing = false,
                    mediaPath = 'http://www.smallcitybigstories.com/video/marco_tamba/',
                    extension = '',
                    tracks = [{
                        "track": 1,
                        "name": "storia",
                        "length": "01:15",
                        "file": "01_marcotamba_storia"
                    }, {
                        "track": 2,
                        "name": "nascita",
                        "length": "01:19",
                        "file": "02_marcotamba_nascita"
                    }, {
                        "track": 3,
                        "name": "locale",
                        "length": "01:15",
                        "file": "03_marcotamba_locale"
                    }, {
                        "track": 4,
                        "name": "comunita",
                        "length": "01:19",
                        "file": "04_marcotamba_comunita"
                    }, {
                        "track": 5,
                        "name": "abilita",
                        "length": "01:15",
                        "file": "05_marcotamba_abilita"
                    }, {
                        "track": 6,
                        "name": "team",
                        "length": "01:19",
                        "file": "06_marcotamba_team"
                    }, {
                        "track": 7,
                        "name": "digitale",
                        "length": "01:15",
                        "file": "07_marcotamba_digitale"
                    }, {
                        "track": 8,
                        "name": "scuola",
                        "length": "01:19",
                        "file": "08_marcotamba_scuola"
                    }, {
                        "track": 9,
                        "name": "ostacoli",
                        "length": "01:15",
                        "file": "09_marcotamba_ostacoli"
                    }, {
                        "track": 10,
                        "name": "madeinitaly",
                        "length": "01:19",
                        "file": "10_marcotamba_madeinitaly"
                    }, {
                        "track": 11,
                        "name": "estero",
                        "length": "01:15",
                        "file": "11_marcotamba_estero"
                    }, {
                        "track": 12,
                        "name": "fallimento",
                        "length": "01:19",
                        "file": "12_marcotamba_fallimento"
                    }, {
                        "track": 13,
                        "name": "successo",
                        "length": "01:19",
                        "file": "13_marcotamba_successo"
                    }, {
                        "track": 14,
                        "name": "futuro",
                        "length": "01:15",
                        "file": "14_marcotamba_futuro"
                    }, {
                        "track": 15,
                        "name": "consigli",
                        "length": "01:19",
                        "file": "15_marcotamba_consigli"
                    }],
                    trackCount = tracks.length,
                    npAction = $('#npAction'),
                    npTitle = $('#npTitle'),
                    video = $('#VideoIntervista').bind('play', function () {
                        playing = true;
                        npAction.html('<rect x="18.2" y="31.3" class="Stroke2px FOODStroke" width="5" height="17"/><rect x="28.2" y="31.3" class="Stroke2px FOODStroke" width="5" height="17"/>');
                    }).bind('pause', function () {
                        playing = false;
                        npAction.html('<polygon class="Stroke2px FOODStroke" points="19.2,30.1 35.4,39.5 19.2,48.9"/>');
                    }).bind('ended', function () {
                        npAction.html('<polygon class="Stroke2px FOODStroke" points="19.2,30.1 35.4,39.5 19.2,48.9"/>');
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
                    circle = $('#PlayerVideo > #StructureCircle > circle').click(function () {
                        var id = parseInt($(this).index());
                        if (id !== index) {
                            playTrack(id);
                        }
                    }),
                    loadTrack = function (id) {
                        $('.ActiveCircle').removeClass('ActiveCircle');
                        $('#PlayerVideo > #StructureCircle > circle:eq(' + id + ')').addClass('ActiveCircle');
                        $('.ActiveEl').removeClass('ActiveEl');
                        $('#PlayerVideo > #StructureText > text:eq(' + id + ')').addClass('ActiveEl');
                        npTitle.text(tracks[id].name);
                        index = id;
                        video.src = mediaPath + tracks[id].file + extension;                        
                        $('#PlayerVideo > #StructureCircle > circle').mouseover(function() {
                            var HoverCircle = parseInt($(this).index(), 10);
                            if (HoverCircle + 1 == index || HoverCircle - 1 == index) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').removeClass('ActiveEl');
                                $(this).addClass('ControllCircle');
                                $('#PlayerVideo > #StructureText > text:eq(' + HoverCircle + ')').addClass('HoverEl');
                            } else if (index == 11 && (HoverCircle + 2 == index || HoverCircle - 2 == index)) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').removeClass('ActiveEl');
                                $(this).addClass('ControllCircle');
                                $('#PlayerVideo > #StructureText > text:eq(' + HoverCircle + ')').addClass('HoverEl');
                            } else if (index == 9 && HoverCircle == 11) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').removeClass('ActiveEl');
                                $(this).addClass('ControllCircle');
                                $('#PlayerVideo > #StructureText > text:eq(' + HoverCircle + ')').addClass('HoverEl');
                            } else if (index == 13 && HoverCircle == 11) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').removeClass('ActiveEl');
                                $(this).addClass('ControllCircle');
                                $('#PlayerVideo > #StructureText > text:eq(' + HoverCircle + ')').addClass('HoverEl');
                            } else {
                                $(this).addClass('ControllCircle');
                                $('#PlayerVideo > #StructureText > text:eq(' + HoverCircle + ')').addClass('HoverEl');
                            }
                        });
                        $('#PlayerVideo > #StructureCircle > circle').mouseleave( function() {
                            var HoverCircle = parseInt($(this).index(), 10);
                            if (HoverCircle + 1 == index || HoverCircle - 1 == index) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').addClass('ActiveEl');
                                $("#PlayerVideo > #StructureCircle > circle.ControllCircle").removeClass("ControllCircle");
                                $("#PlayerVideo > #StructureText > text.HoverEl").removeClass("HoverEl");
                            } else if (index == 11 && (HoverCircle + 2 == index || HoverCircle - 2 == index)) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').addClass('ActiveEl');
                                $("#PlayerVideo > #StructureCircle > circle.ControllCircle").removeClass("ControllCircle");
                                $("#PlayerVideo > #StructureText > text.HoverEl").removeClass("HoverEl");
                            } else if (index == 9 && HoverCircle == 11) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').addClass('ActiveEl');
                                $("#PlayerVideo > #StructureCircle > circle.ControllCircle").removeClass("ControllCircle");
                                $("#PlayerVideo > #StructureText > text.HoverEl").removeClass("HoverEl");
                            } else if (index == 13 && HoverCircle == 11) {
                                $('#PlayerVideo > #StructureText > text:eq(' + index + ')').addClass('ActiveEl');
                                $("#PlayerVideo > #StructureCircle > circle.ControllCircle").removeClass("ControllCircle");
                                $("#PlayerVideo > #StructureText > text.HoverEl").removeClass("HoverEl");
                            } else {
                                $("#PlayerVideo > #StructureCircle > circle.ControllCircle").removeClass("ControllCircle");
                                $("#PlayerVideo > #StructureText > text.HoverEl").removeClass("HoverEl");
                            }
                        });                   
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
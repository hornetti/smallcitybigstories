/*********************************************************/
/**************   toggleFullScreen   ********************/
/*******************************************************/

function toggleFullScreen() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

/*********************************************************/
/****************   VideoFullScreen   *******************/
/*******************************************************/

var i = document.getElementById("VideoIntervistato");

function VideoFullScreen() {
  if (!i.fullscreenElement && !i.mozFullScreenElement && !i.webkitFullscreenElement && !i.msFullscreenElement ) {
    if (i.requestFullscreen) {
      i.requestFullscreen();
    } else if (i.msRequestFullscreen) {
      i.msRequestFullscreen();
    } else if (i.mozRequestFullScreen) {
      i.mozRequestFullScreen();
    } else if (i.webkitRequestFullscreen) {
      i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  }
}

/*********************************************************/
/****************   RequestFullScreen   *****************/
/*******************************************************/

function RequestFullScreen() {
  if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
      document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  }
}

/*********************************************************/
/*******************  toggleMusic   *********************/
/*******************************************************/
/*
var myAudio = document.getElementById("Music");

function toggleMusic() {
  if (myAudio.paused) {
    myAudio.play(); 
  } else {
    myAudio.pause(); 
  }   
}
*/
/******************************************************/
/***********   DELAY LOADING HOME.html   *************/
/****************************************************/
/*
$(document).ready(function Begin() {
  $(".SmallCityBigStories").transition({
    opacity: 1,
    delay: 300
  });
  $(".StartProj").transition({
    opacity: 1,
    delay: 300
  });
});

*/
/*********************************************************/
/***********   HOME.html  ->   ABOUT.html   *************/
/*******************************************************/
/*
$(document).ready(function(){
    $(".ButtonStart").click(function(){
        $(".SmallCityBigStories").transition({
            y: '-100px',
            delay: 1000
        });
        $(".StartProj").transition({
            y: '100px',
            delay: 1000
        });
        $(".IntroProj").transition({
            opacity: 1,
            delay: 1500
        });
        $('.ButtonStart').remove();
        $('.StartProj').html("<a class='ButtonStart About btn btn-lg btn-default'>Begin</a>");
    });
});
*/
/******************************************************/
/**************   DELAY LOADING MENU   ***************/
/****************************************************/
/*
$(Map.html && Credits.html).ready(function Apparizione() {
  $(".TopMenu").transition({
    opacity: 1,
    delay: 100
  });
  $(".BottomMenu").transition({
    opacity: 1,
    delay: 100
  });
});
*/
/*********************************************************/
/*********************   CLOSE   ************************/
/*******************************************************/
/*
var $svg = $("svg");

var Opacity = TweenMax.staggerFrom($svg, 0.5, {
    opacity: 0,
}, 0.5);

$(document).ready(function() {
    $svg.mouseenter(
        function() {
            TweenMax.staggerTo($svg, 1, {
                ease: Bounce.easeOut,
                rotation: 720,
                opacity: 1,
            }, 0.5);
        }
    ).mouseleave(
        function() {
            TweenMax.staggerTo($svg, 1, {
                ease: Bounce.easeOut,
                rotation: 0,
            }, 0.5);
        })
});
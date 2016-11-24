/*********************************************************/
/***********      toggleFullScreen      *****************/
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
      alertFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
      alertFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
      alertFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      alertFullscreen();
    }
  }
};

/*********************************************************/
/************       RequestFullScreen       *************/
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
};

/*********************************************************/
/**************       DragFullScreen       **************/
/*******************************************************/

function DragFullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

/*********************************************************/
/******************     CustomAlert      ****************/
/*******************************************************/

function alertFullscreen() {
  alert("Consigliamo di fruire Small city, big stories in fullscreen");
}

/*********************************************************/
/****************      pauseVoice      ******************/
/*******************************************************/

function pauseVoice() {
  var audioVoice = document.getElementById('Voiceover');
  audioVoice.pause();
};

/*********************************************************/
/****************     playWelcome      ******************/
/*******************************************************/

function playWelcome() {
  var audioWelcome = document.getElementById('Welcome');
  audioWelcome.volume = 0.3;
  setTimeout(function() { 
    audioWelcome.play(); 
  }, 1250);
};

/*********************************************************/
/****************     restartMusic     ******************/
/*******************************************************/

var audioWelcome = document.getElementById('Welcome');
var audioAmbient = document.getElementById('ambientMusic');
    audioAmbient.volume = 0.3;

function restartMusic() {
  audioWelcome.currentTime = 0;
  audioWelcome.pause();
  audioAmbient.currentTime = 0
};

/*********************************************************/
/****************     toggleMusic      ******************/
/*******************************************************/

function togglePlay() {
  if (audioAmbient.paused) {
    audioAmbient.play();
  } else {
    audioAmbient.pause();
  }
};


/*********************************************************/
/****   Remove the Google Chrome link address bar    ****/
/*******************************************************/
/*
$("body").on('mouseover', 'a', function (e) {
    var $link = $(this),
        href = $link.attr('href') || $link.data("href");

    $link.off('click.chrome');
    $link.on('click.chrome', function () {
        window.location.href = href;
    })
    .attr('data-href', href) //keeps track of the href value
    .css({ cursor: 'pointer' })
    .removeAttr('href'); // <- this is what stops Chrome to display status bar
});
*/
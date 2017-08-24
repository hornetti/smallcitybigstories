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
/************  (ESC) toggleFullScreen   *****************/
/*******************************************************/
$(document).keyup(function(e) {
  if (e.keyCode == 27) { 
    alertFullscreen();
  }
});

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
  bootbox.alert("Consigliamo di fruire Small city, big stories in fullscreen.");
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
  audioWelcome.volume = 0.08;
  setTimeout(function() { 
    audioWelcome.play(); 
  }, 1250);
};
/*********************************************************/
/****************     restartMusic     ******************/
/*******************************************************/
var audioWelcome = document.getElementById('Welcome');
var audioAmbient = document.getElementById('ambientMusic');
    audioAmbient.volume = 0.015;

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
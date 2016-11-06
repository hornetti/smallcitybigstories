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
/*************      VideoFullScreen      ****************/
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
/****************     restartMusic     ******************/
/*******************************************************/

var audio = document.getElementById('ambientMusic');  

function restartMusic() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.currentTime = 0
    }
};

/*********************************************************/
/****************     toggleMusic      ******************/
/*******************************************************/

function togglePlay() {
  return audio.paused ? audio.play() : audio.pause();
};


/*********************************************************/
/****************     playWelcome      ******************/
/*******************************************************/


function playWelcome() {
  var audioWelcome = document.getElementById("Welcome");
  setTimeout(function() { 
    audioWelcome.play(); 
  }, 1250);
};


/*********************************************************/
/****************      pauseVoice      ******************/
/*******************************************************/


function pauseVoice() {
  var audioVoice = document.getElementById("Voiceover");
  audioVoice.pause(); 
};

/*********************************************************/
/****************     CustomAlert      **************/
/*******************************************************/

function alertFullscreen() {
  alert("Consigliamo di fruire Small city, big stories in fullscreen");
}
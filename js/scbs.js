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
/*********************   VideoJS   **********************/
/*******************************************************/

var player = videojs('VideoIntervistato');
   
player.markers({
   markerStyle: {
      'width':'9px',
      'border-radius': '40%',
      'background-color': 'orange'
   },
   markerTip:{
      display: true,
      text: function(marker) {
         return "I am a marker tip: "+ marker.text;
      }
   },
   breakOverlay:{
      display: true,
      displayTime: 4,
      style:{
         'width':'100%',
         'height': '30%',
         'background-color': 'rgba(10,10,10,0.6)',
         'color': 'white',
         'font-size': '16px'
      },
      text: function(marker) {
         return "This is a break overlay: " + marker.overlayText;
      },
   },
   markers: [
      {time: 9.5, text: "this", overlayText: "1", class: "special-blue"},
      {time: 16,  text: "is", overlayText: "2"},
      {time: 23.6,text: "so", overlayText: "3"},
      {time: 28,  text: "cool", overlayText: "4"}
   ]
});
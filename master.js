window.addEventListener('DOMContentLoaded', function(){



  var mujiVideo = document.getElementById('videoClass');
  mujiVideo.style.height = document.documentElement.clientHeight + "px";
  mujiVideo.style.width = document.documentElement.clientWidth + "px";
  //var mujiTxt   = document.getElementById('mujiTxt');
  //mujiTxt.style.top = mujiVideo.clientHeight * 0.65 + "px";
  var second   = document.getElementById('second');
  //second.style.top = mujiVideo.clientHeight + "px";
  second.style.height = mujiVideo.clientHeight * 0.65 + "px";
  second.style.width = document.body.clientWidth + "px";
});

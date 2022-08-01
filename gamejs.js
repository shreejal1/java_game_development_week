function moveLeft() {
  var element = document.getElementById("backfront");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 10 + "px";
}

function moveRight() {
  var element = document.getElementById("backfront");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 10 + "px";
}

var interval = 0;
function myKeyDown(event) {
  if (event.keyCode == 37) {
    moveLeft();
    // interval = setInterval(moveLeft, 10);
  }
  if (event.keyCode == 39) {
    moveRight();
    //interval = setInterval(moveRight, 10);
  }
}

function myLoadEvent() {
  document.addEventListener("keydown", myKeyDown);
}
document.addEventListener("DOMContentLoaded", myLoadEvent);

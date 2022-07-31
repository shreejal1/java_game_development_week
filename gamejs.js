function moveLeft() {
  var element = document.getElementById("backfront");
  element.style.backgroundColor = "black";
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + "px";
}

function moveRight() {
  var element = document.getElementById("source");
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + "px";
}

var interval = 0;
function myKeyDown(event) {
  if (event.keyCode == 37) {
    interval = setInterval(moveLeft, 10);
  }
  if (event.keyCode == 39) {
    interval = setInterval(moveRight, 10);
  }
}

function myLoadEvent() {
  document.addEventListener("keydown", myKeyDown);
}
document.addEventListener("DOMContentLoaded", myLoadEvent);

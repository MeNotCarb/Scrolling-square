const square = document.createElement('div');
document.body.appendChild(square);

let grow = true; //flaga
let size = 10;
square.style.width = size + "px";
square.style.height = size + "px";

window.addEventListener("scroll", function () {
  // if (size < window.innerWidth / 2) {
  if (size >= window.innerWidth / 2) {
    // grow = false;
    grow = !grow;
  } else if (size <= 0) {
    grow = true;
  }

  if (grow) {
    size += 10;
    square.style.width = size + "px";
    square.style.height = size + "px";
  } else {
    size -= 10;
    square.style.width = size + "px";
    square.style.height = size + "px";
  }
})
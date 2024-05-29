const squares = document.getElementsByClassName("square");

function playO() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      squares[i].innerHTML = "<h1>O</h1>";
    });
  }
}

document.addEventListener("DOMContentLoaded", playO);

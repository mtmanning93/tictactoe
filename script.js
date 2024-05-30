const squares = document.getElementsByClassName("square");

function startGame() {
  for (let square of squares) {
    square.addEventListener("click", function () {
      userChoice = this.getAttribute("value");
    });
  }

  playComp();
}

function playUser() {
  // Updates square with 0 when user clicks
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function () {
      squares[i].innerHTML = "<h1>O</h1>";
    });
  }
}

function playComp(userChoice) {
  const randomChoice = Math.floor(Math.random() * squares.length);

  const computerChoice = squares[randomChoice];

  computerChoice.innerHTML = "<h1>X</h1>";

  return computerChoice;
}

document.addEventListener("DOMContentLoaded", playUser);

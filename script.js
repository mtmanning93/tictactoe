document.addEventListener("DOMContentLoaded", startGame);
const squares = document.getElementsByClassName("square");

function startGame() {
  for (let square of squares) {
    square.addEventListener("click", playUser);
  }
}

function playUser() {
  // Updates square with 0 when user clicks
  if (this.innerHTML === "") {
    this.innerHTML = "<h1>O</h1>";

    this.removeEventListener("click", playUser);

    findFilledSquares();

    playComp();
  }
}

function findFilledSquares() {
  for (let square of squares) {
    if (square.innerHTML !== "") {
      square.removeEventListener("click", playUser);
    }
  }
}

function playComp() {
  let emptySquares = Array.from(squares).filter(
    (square) => square.innerHTML === ""
  );

  if (emptySquares.length > 0) {
    const randomChoice = Math.floor(Math.random() * squares.length);
    const computerChoice = squares[randomChoice];

    computerChoice.innerHTML = "<h1>X</h1>";

    computerChoice.removeEventListener("click", playUser);

    findFilledSquares();
  }
}

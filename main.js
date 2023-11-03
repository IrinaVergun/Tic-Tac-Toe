const winner = document.getElementById("winner");
const cells = document.querySelectorAll(".cell");
const resButton = document.getElementById("button");
const nowGo = document.getElementById("nowGo");
const players = {
  x: "x",
  o: "o",
};
let currentPlayer = "";
let isGameRunning = false;
let arr = Array(9).fill("");
const winLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
  //0,4,8
];

function init() {
  cells.forEach((cell) => {
    cell.addEventListener("click", clickCell);
  });
  resButton.addEventListener("click", restartGame);
}

function startGame() {
  isGameRunning = true;
  cells.forEach((cell) => (cell.textContent = ""));
  winner.textContent = "";
  currentPlayer = players.x;
  nowGo.textContent = `Сейчас ходит : ${currentPlayer}`;
}
function clickCell() {
  if (!isGameRunning) {
    return;
  } else if (this.textContent) {
    return;
  }
  this.textContent = currentPlayer;
  let cellIndex = this.dataset.cellIndex;
  arr[cellIndex] = currentPlayer;
  if (checkGameOver()) {
    return finishGame();
  }
  currentPlayer = currentPlayer === players.x ? players.o : players.x; //меняем текущего игрока на противоположного
  nowGo.textContent = `Сейчас ходит : ${currentPlayer}`; // в графу кто ходит записываем текущего игрока
}

function checkLine(line) {
  const [a, b, c] = line;
  const cellA = arr[a]; // выдергиваем значени из массива по индексу
  const cellB = arr[b];
  const cellC = arr[c];
  if ([cellA, cellB, cellC].includes("")) {
    // проверяем что не одна из этих ячеек не содержит пустой линии
    return false;
  }
  return cellA === cellB && cellB === cellC;
}

function checkGameOver() {
  //проверяем закончина ли игра
  for (const line of winLines) {
    if (checkLine(line)) {
      //если вернёт тру значит есть победить а тру он вернёт из фунции чек лайн
      winner.textContent = `${currentPlayer} Победил-_-`;
      return true;
    }
  }
  if (!arr.includes("")) {
    //если в массиве нету пустых строк
    winner.textContent = "Ничья тут ёпт";
    return true;
  }
}

function finishGame() {
  isGameRunning = false;
  nowGo.textContent = "";
  arr = Array(9).fill("");
}

function restartGame() {
  finishGame();
  startGame();
}

window.addEventListener("load", () => {
  init();
  startGame();
});

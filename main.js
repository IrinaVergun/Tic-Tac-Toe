const winner = document.getElementById("winner"); //поле победителя
const cells = document.querySelectorAll(".cell"); //каждая ячейка
const resButton = document.getElementById("button"); //кнопка
const nowGo = document.getElementById("nowGo"); //поле кто ходит
const players = {
  //постоянные в объекте чтобы не сложно их было достать
  x: "x",
  o: "o",
};
let currentPlayer = ""; //текущему игроку
let isGameRunning = false; //игра не идёт
let arr = Array(9).fill(""); //пуустой массив чтобы потом его наполнить значениями
const winLines = [
  //выйгрышные линии
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
  //инициализация, привязывает клики по
  cells.forEach((cell) => {
    //
    cell.addEventListener("click", clickCell); //ячейке
  });
  resButton.addEventListener("click", restartGame); //по кнопке к функциям
}

function startGame() {
  //начало игры
  isGameRunning = true; //игра идёт
  cells.forEach((cell) => (cell.textContent = "")); //перебираю фор ичем ккаждую ячейку и вставляю туда пустое значение
  winner.textContent = ""; //также победителю
  currentPlayer = players.x; //игр начинает х
  nowGo.textContent = `Сейчас ходит : ${currentPlayer}`; // в полу кто ходит сообщаю чья очередь
}
function clickCell() {
  //клик по кнопке
  if (!isGameRunning) {
    //если игра не запущена то вернуть
    return; //
  } else if (this.textContent) {
    //если у ячейки есть значение вернуть это значение
    return; //
  }
  this.textContent = currentPlayer; //значение ячейки равняется текущему игроку
  let cellIndex = this.dataset.cellIndex; //делаю переменную индкса соответсвующего яйчейки с индексом
  arr[cellIndex] = currentPlayer; //привязываю мой массив  к этому индуксу и говорю что отныне они едино и равняюих к текущему игроку
  if (checkGameOver()) {
    //проверка закончена ли игра ли игра
    return finishGame(); //конец игры
  }
  currentPlayer = currentPlayer === players.x ? players.o : players.x; //меняем текущего игрока на противоположного
  nowGo.textContent = `Сейчас ходит : ${currentPlayer}`; // в графу кто ходит записываем текущего игрока
}

function checkLine(line) {
  //ходы выйгрыша
  const [a, b, c] = line; //выйгрыш состоит из 3 ячеек
  const cellA = arr[a]; // выдергиваем значени из массива по индексу
  const cellB = arr[b]; //тоесть 3 значения а,б,с будут являться значениями в массиве
  const cellC = arr[c];
  if ([cellA, cellB, cellC].includes("")) {
    //
    // проверяем что не одна из этих ячеек не содержит пустой линии
    return false;
  }
  return cellA === cellB && cellB === cellC;
}

function checkGameOver() {
  //
  //проверяем закончина ли игра
  for (const line of winLines) {
    //линии в массиве выйгрыш линий
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
  //финишь же поэтому обнуляем массив и кто ходит говорим что игра не идёт
  isGameRunning = false;
  nowGo.textContent = "";
  arr = Array(9).fill("");
}

function restartGame() {
  //после начатия рестарта заканчивает игру и начинает новую
  finishGame();
  startGame();
}

window.addEventListener("load", () => {
  //нужен виндоу чтобы скрипт смог прогрузиться
  init();
  startGame();
});

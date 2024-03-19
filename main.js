const cellsconteiner = document.getElementById("cells-container");
const winner = document.getElementById("winner"); //поле победителя
const cells = document.querySelectorAll(".cell"); //каждая ячейка
// const resButton = document.getElementById("button"); //кнопкач
const nowGo = document.getElementById("nowGo"); //поле кто ходит
// const compbutton = document.getElementById("compbutton");
const select = document.getElementById('floatingSelect')
let reset=document.getElementById('reset')
let c7=document.getElementById('c6')
// console.log(c5);

const players = {
  //постоянные в объекте чтобы не сложно их было достать
  x: "х",
  o: "o",
};
let currentPlayer = ""; //текущему игроку
let isGameRunning = false; //игра не идёт
let twoplayers = false;
let compplay = false;
let compHARDplay=false;
let randomIcheika2=true



 function color(cell, currentPlayer){
  if (currentPlayer==players.x){
    cell.style.color='#0062ffd9'
  }
  else {
    cell.style.color='#0ff500'
 }}

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

// function compinit() {
//   cells.forEach((cell) => {
//     cell.addEventListener("click", clickCell);
//   });
//   compbutton.addEventListener("click", function () {
//     compplay = true;
//     twoplayers = false;
//     restartGame();
//   });
// }

function res(){
  if (reset.onclick){
    console.log('hi');
    restartGame()
  }
}
function init() {
  //инициализация, привязывает клики по
  cells.forEach((cell) => {
    //
    cell.addEventListener("click", clickCell); //ячейке
  });
  select.addEventListener("change", function (event) {
    console.log(event.target.value);
    if (event.target.value==1){
      compplay = false;
    twoplayers = true;
    compHARDplay=false
    restartGame()
    }
     if(event.target.value==2){
      compplay = true;
      twoplayers = false;
      compHARDplay=false
      restartGame()
    }
     if(event.target.value==3){

      twoplayers = false;
      compplay = false;
       compHARDplay=true
      restartGame()
    }

   
  }); //по кнопке к функциям
}

function startGame() {
  //начало игры
  isGameRunning = true; //игра идёт
  cells.forEach((cell) => (cell.textContent = "")); //перебираю фор ичем ккаждую ячейку и вставляю туда пустое значение
  winner.textContent = ""; //также победителю
  currentPlayer = players.x; //игр начинает х
  
  nowGo.textContent = `Сейчас ходит : ${currentPlayer}`;
  if (compplay) {
    compGo();
  } // в полу кто ходит сообщаю чья очередь
  if(compHARDplay){
    compHardGo()
    // checkLineComp()
  }
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function compGo() {
  console.log("ход компа");
  let vseicheiki = document.getElementsByClassName("cell");
  // console.log(vseicheiki);
  let pysto = Array.from(vseicheiki).filter((cell) => cell.textContent == "");
  console.log(pysto);
  let indexpysto = getRandomInt(0, pysto.length - 1);
  console.log(indexpysto);
  let randomIcheika = pysto[indexpysto];
  randomIcheika.click()
  return
}

// function checkLineComp(line) {
//   //ходы выйгрыша
//   const [a, b, c] = line; //выйгрыш состоит из 3 ячеек
//   const cellA = arr[a]; // выдергиваем значени из массива по индексу
//   const cellB = arr[b]; //тоесть 3 значения а,б,с будут являться значениями в массиве
//   const cellC = arr[c];
//   // if ([cellA, cellB, cellC].includes("")) {
//   //   //
//   //   // проверяем что не одна из этих ячеек не содержит пустой линии
//   //   return false;
//   // }
//   // return cellA === cellB && cellB === cellC;

  
// }


function checkLineComp(line, player) {
  //ходы выйгрыша
  const [a, b, c] = line; //выйгрыш состоит из 3 ячеек
  const cellA = arr[a]; // выдергиваем значени из массива по индексу
  const cellB = arr[b]; //тоесть 3 значения а,б,с будут являться значениями в массиве
  const cellC = arr[c];
  if ([cellA, cellB, cellC].includes("")) {
  //  if( two = (cellA==='х' &&  cellB==='х' || cellB==='х'&& cellC==='х' || cellC==='х' && cellA==='х'  )){
    if(cellA===player  &&  cellB === player){
     return cells[c]
    } 
   else if(cellB===player &&  cellC === player){
    return cells[a]
    } 
    else if(cellC===player &&  cellA === player){
      return cells[b]
    } 
   console.log(two,'two') //3 условия сделать
  }

return false

   }
  // }

function randomFirstClick(){
  var numPool = [ 0, 2, 6,],
  rand = numPool[Math.floor(Math.random() * numPool.length)]
console.log(rand)
return rand}




function compHardGo(){

  
  
  console.log("ход компа");
  let vseicheiki = document.getElementsByClassName("cell");
  // console.log(vseicheiki);
  let pysto = Array.from(vseicheiki).filter((cell) => cell.textContent == "");
  console.log(pysto);
  let indexpysto = getRandomInt(0, pysto.length - 1);
  console.log(indexpysto);
  let randomIcheika = pysto[indexpysto];
  
  if(pysto.length==9){

   indexpysto = randomFirstClick(0, pysto.length - 1)
   let randomIcheika2 = pysto[indexpysto]
   
   console.log(indexpysto,'tyt');
  
    randomIcheika2.click()
    return
    
   
    
    // randomIcheikA=false
 }

   

  // if(vseicheiki[6].textContent==''){vseicheiki[6].click()
  // return}

   if(vseicheiki[4].textContent==''){
   
    vseicheiki[4].click()
    return
  }
  else if(vseicheiki[4].textContent=='o' && vseicheiki[8].textContent==''){
vseicheiki[8].click()
return
  }
  else {
    // сначала ищем возможную победу противника и не даем ему победить!
    for (const line of winLines) {
      let two= checkLineComp(line, players.o)
      
      
            //линии в массиве выйгрыш линий
            if (two!==false) {
              //если вернёт тру значит есть победить а тру он вернёт из фунции чек лайн
              // winner.textContent = `${currentPlayer} Победил-_-`;
              // return true;
            two.click()
            return
            }
          }


      // а если противник далек от победы, то пытаемся победить сами!
    for (const line of winLines) {
let two= checkLineComp(line, players.x)


      //линии в массиве выйгрыш линий
      if (two!==false) {
        //если вернёт тру значит есть победить а тру он вернёт из фунции чек лайн
        // winner.textContent = `${currentPlayer} Победил-_-`;
        // return true;
      two.click()
      return
      }
    }

    
    randomIcheika.click();
    return
    }

   
    


   
  
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
  color(this, currentPlayer)
  let cellIndex = this.dataset.cellIndex; //делаю переменную индкса соответсвующего яйчейки с индексом
  arr[cellIndex] = currentPlayer; //привязываю мой массив  к этому индуксу и говорю что отныне они едино и равняюих к текущему игроку
  if (checkGameOver()) {
    //проверка закончена ли игра ли игра
    return finishGame(); //конец игры
  }
  currentPlayer = currentPlayer === players.x ? players.o : players.x; //меняем текущего игрока на противоположного
  nowGo.textContent = `Сейчас ходит : ${currentPlayer}`; // в графу кто ходит записываем текущего игрока

  if (compplay && currentPlayer == players.x) {
    compGo();
  }
  if (compHARDplay && currentPlayer == players.x) {
    compHardGo();
  }
}

function checkLine(line) {
  //ходы выйгрыша
  const [a, b, c] = line; //выйгрыш состоит из 3 ячеек
  const cellA = arr[a]; // выдергиваем значени из массива по индексу
  const cellB = arr[b]; //тоесть 3 значения а,б,с будут являться значениями в массиве
  const cellC = arr[c];
  if ([cellA, cellB, cellC].includes("")) {
   if( two = (cellA==='х' &&  cellB==='х' || cellB==='х'&& cellC==='х' || cellC==='х' && cellA==='х'  )){
   console.log(two,'two') //3 условия сделать
  return}
      
    
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
    winner.textContent = "Пфф, всего-то ничья";
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
  cellsconteiner.style.visibility = "visible";
  nowGo.style.visibility = "visible";
  //после начатия рестарта заканчивает игру и начинает новую
  finishGame();
  startGame();
}

window.addEventListener("load", () => {
  //нужен виндоу чтобы скрипт смог прогрузиться
  init();
 
 
  startGame();
});

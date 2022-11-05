//game Constants and Variables
let inputDir = { x: 0, y: 0 };
// const foodNoise = new Audio('music/food.mp3');
// const gameOverNoise = new Audio('music/gameover.mp3')
let speed = 7;
let score = 0;
let lastPaintTime = 0;
let nextDirection = { x: 0, y: 1 };
let worm = [
  { x: 10, y: 10 },
  { x: 11, y: 10 },
  { x: 12, y: 10 },
  { x: 13, y: 10 },
  { x: 13, y: 11 },
  { x: 13, y: 12 },
];
food = { x: 7, y: 8 };

//worm
function draw() {
  let board = document.getElementById("board");
  board.innerHTML = "";
  worm.forEach((seg) => {
    let div = document.createElement("div");

    div.style.gridRowStart = seg.y;
    div.style.gridColumnStart = seg.x;
    div.classList.add("worm");

    board.appendChild(div);
  });
}

// gameloop

setInterval(function gameLoop() {
  moveWorm();
  // collision
  // eats food
  // hits walll
  draw();

  //console.log('working')
}, 500);

function moveWorm() {
  let newHead = {};
  let wormHead = worm[worm.length - 1];
  newHead.x = nextDirection.x + wormHead.x;
  newHead.y = nextDirection.y + wormHead.y;
  worm.shift();
  worm.push(newHead);

  console.log(worm);
  // worm.push({x:13, y:13}
}

// function gameLoop (curTime){
//     update()

//
//     if ((gameLoop - lastPaintTime)/1000 / <1/speed){
//         return;
//     }
//     lastPaintTime = curTime
//     update();
// }

// function sCollide(sWorm) {
//     //if u hit yourself
//     for (let i = 1; i < worm.length; i++) {
//         if (sWorm[i].x === sWorm[0].y){
//             return true;
//         }
//         // if you bump into the wall
//         if (sWorm[0].x <=20 || sWorm[0].x <0 ||sWorm[0].y >= 20 || sWorm[0].y <=0){
//             return true
//         }
//         return false
//     }

// }

// function update(){
//     // updating the worm array and food
//     if (sCollide(worm)){
//         gameOverNoise.play();
//         inputDir = {x:13 y:15};
//         alert("gameover press anykey to play")
//         score = 0;

//     }
// }
// +1 score when food is eaten

// if(worm[0].y === food.y && worm[0].x === food.x){
//     foodNoise.play()
//     score += 1;

// }

// score.innerHTML

// window.requestAnimationFrame(gameLoop);

// function food(){

// }

// 1. draw snake (hardcoded)
// 2. game loop where snake can move
// 3. collision
// 4. food
// 5. game speeding up

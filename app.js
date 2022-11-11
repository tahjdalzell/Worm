// | VARIABLES |
let inputDir = { x: 0, y: 0 };
let speed = 10;
let lastDrawTime = 0;
let snakeArray = [{ x: 5, y: 15 }];
let food = { x: 14, y: 7 };
let score = 0;
let resetEl = document.querySelector('.restart')

// | MAIN LOOP |

function main(initialTime) {
  window.requestAnimationFrame(main);
  //console.log(initialTime);
  if ((initialTime - lastDrawTime) / 1000 < 1 / speed) {
    return;
  }
  lastDrawTime = initialTime;
  gameEngine();
}

function isCollide(snake) {
  // return false;

  // if you bump into your body
  for (let i = 1; i < snakeArray.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      return true;
    }
  }
  if (
    snake[0].x >= 18 ||
    snake[0].x <= 0 ||
    snake[0].y >= 18 ||
    snake[0].y <= 0
  ) {
    return true;
  }
}
//{gameEngine}
function gameEngine() {
  //update the snake + food arrays
  if (isCollide(snakeArray)) {
    inputDir = { x: 0, y: 0 };
    alert("GAMEOVER!.....TRY AGIAN?");
    snakeArray = [{ x: 13, y: 15 }];
    score = 0;
  }
  //if snake eats ++ to scare
  if (snakeArray[0].y === food.y && snakeArray[0].x === food.x) {
    snakeArray.unshift({
      x: snakeArray[0].x + inputDir.x,
      y: snakeArray[0].y + inputDir.y,
    });
    let a = 2;
    let b = 16;
    food = {
      x: Math.round(a + (b - a) * Math.random()),
      y: Math.round(a + (b - a) * Math.random()),
    };
    score += 1;
    highScore.innerHTML = +score;
  }
  //moving the snake
  for (let i = snakeArray.length - 2; i >= 0; i--) {
    snakeArray[i + 1] = { ...snakeArray[i] };
  }
  snakeArray[0].x += inputDir.x;
  snakeArray[0].y += inputDir.y;

  //display the snake using dom to create divs in js
  board.innerHTML = "";
  snakeArray.forEach((e, index) => {
    snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = e.y;
    snakeElement.style.gridColumnStart = e.x;
    snakeElement.classList.add("snake");
    board.appendChild(snakeElement);

    if (index === 0) {
      snakeElement.classList.add("head");
    } else {
      snakeElement.classList.add("snake");
    }
    //adding snake to board
  });

  //display food using dom to create divs in js
  foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  board.appendChild(foodElement);
  //adding food to board
}

window.requestAnimationFrame(main);

//game inputs || controls
window.addEventListener("keydown", (e) => {
  inputDir = { x: 0, y: 1 }; //game begin
  switch (e.key) {
    case "ArrowUp":
      // console.log("ArrowUp");
      inputDir.x = 0;
      inputDir.y = -1;
      break;
    case "ArrowDown":
      // console.log("ArrowDown");
      inputDir.x = 0;
      inputDir.y = 1;
      break;
    case "ArrowLeft":
      // console.log("ArrowLeft");
      inputDir.x = -1;
      inputDir.y = 0;
      break;
    case "ArrowRight":
      // console.log("ArrowRight");
      inputDir.x = 1;
      inputDir.y = 0;
      break;
  }
});

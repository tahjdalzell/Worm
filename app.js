//game Constants and Variables
let inputDir = {x:0, y:0};
const foodNoise = new Audio('music/food.mp3');
const gameOverNoise = new Audio('music/gameover.mp3')
let speed = 7 
let score = 0 
let lastPaintTime = 0;
let worm = [
    {x:10,y:10},
    {x:11,y:10}
];
food = {x:7 y:8};

//gameloop 

function gameLoop (curTime){
    update()
   
    window.requestAnimationFrame(gameLoop);
    if ((gameLoop - lastPaintTime)/1000 / <1/speed){
        return;
    }
    lastPaintTime = curTime
    update();
}
function sCollide(sWorm) {
    //if u hit yourself
    for (let i = 1; i < worm.length; i++) {
        if (sWorm[i].x === sWorm[0].y){
            return true;
        }
        // if you bump into the wall
        if (sWorm[0].x <=20 || sWorm[0].x <0 ||sWorm[0].y >= 20 || sWorm[0].y <=0){
            return true
        }
        return false
    }
     
}

function update(){
    // updating the worm array and food 
    if (sCollide(worm)){
        gameOverNoise.play();
        inputDir = {x:13 y:15};
        alert("gameover press anykey to play")
        score = 0;

    }
}
// +1 score when food is eaten 

if(worm[0].y === food.y && worm[0].x === food.x){
    foodNoise.play()
    score += 1;
    
}

score.innerHTML

window.requestAnimationFrame(gameLoop);


function draw(){

    let board = document.getElementById("board");
    snake.forEach((seg)=>{
        let div = document.createElement('div');
        div.style.gridRowStart = seg.x;
        div.style.gridColumnStart = seg.y;
        div.classList.add('.worm');

        grid.appendChild(div);
    });

}

function food(){


}


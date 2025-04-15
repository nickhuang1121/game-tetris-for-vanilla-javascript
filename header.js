const canvas = document.querySelector("#canvas");
const windowWidth = window.innerWidth;
const scoreShow = document.querySelector("#score");
const finalScore = document.querySelector("#finalScore");
const gameOverLayout = document.querySelector("#gameOver");
const historyScoreList= document.querySelector("#historyScoreList");
const userNameInput = document.querySelector("#userNameInput");
let userName = userNameInput.value;
const maxWindowWidth = 300;
const gridColumns = 10;
const gridRows = 15;
const cellGap = 1;
let gameSpeed = 500;
const speedLayout = document.querySelector("#speed");
const windowsHeightMultiple = gridRows/gridColumns;
let gameOver = false;
let score = 0;
let grid = [];

function setCanvasSize(){//根據使用者視窗,設置CANVAS寬與高
    if(windowWidth > maxWindowWidth ){
        canvas.width = maxWindowWidth ;
    }else{
        canvas.width = windowWidth;
    }
    canvas.height = canvas.width * windowsHeightMultiple;
}
setCanvasSize();
const ctx = canvas.getContext("2d");

function clearBackground(color){ //背景填色
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width , canvas.width * windowsHeightMultiple);
}

const cellSize = canvas.width / gridColumns;


function refleshGrid(){ //預先將網格補滿預設的0
   for(let row = 0;row < gridRows;row++){
        let tempCol = [];
        for(let column = 0;column < gridColumns;column++){
            tempCol.push(0);
        }
        grid.push(tempCol);
    }
}
refleshGrid();

function drawCell({column,row,color}){ //畫每個方塊
    ctx.fillStyle = color;
    ctx.fillRect(column +cellGap,row+cellGap,cellSize-cellGap,cellSize-cellGap);
};




function drawGrid(){ //畫出網格,根據網格的編號繪製顏色
    for(let row = 0;row < gridRows;row++){
        for(let column = 0;column < gridColumns;column++){
            drawCell({
                column:column * cellSize,
                row:row* cellSize,
                color:Colors[grid[row][column]]
            });
        }
    }
}



let oldTime = null;
function delayToDo({timestamp,limit}){ //延遲做什麼事情
    if(oldTime == null) oldTime = timestamp;
    if((timestamp - oldTime) >= limit){
        oldTime = timestamp;
        return true;
    };
    return false;
}

function refleshCanvas(){
    clearBackground("rgb(255,255,255)");
    drawGrid();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  
speedLayout.textContent=gameSpeed;
function addSpeed(){
    if(gameSpeed>=100){
        gameSpeed-=50;
    }
    speedLayout.textContent=gameSpeed;
}

function reduceSpeed(){
    gameSpeed+=50;
    speedLayout.textContent=gameSpeed;
}


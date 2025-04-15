
function refleshUIData(){
    scoreShow.textContent =score;
}
let nowBlock ;

function replayGame(){
    location.reload();
}

function resetHistoryScoreList(){
    historyScoreList.innerHTML = "";
    let temp = "";
    for(let i = 0;i<localScoreBoard.length;i++){
        localScoreBoard[i]
        let li = `<li>
        姓名:${localScoreBoard[i].name}/成績:${localScoreBoard[i].score}/日期:${localScoreBoard[i].date}
        </li>`;
        temp+=li;
    }
    historyScoreList.innerHTML = temp;

}
resetHistoryScoreList();

function gameOverSet(){
    finalScore.textContent = score;
    console.log('game over');
    gameOver = true;
    gameOverLayout.classList.add('show');
    resetHistoryScoreList();
}
function refleshBlock(){
    nowBlock = Blocks[getRandomInt(Blocks.length)]; //換新方塊
    nowBlock.offsetRow = 0;
    nowBlock.offsetColumn = 0;
    nowBlock.type = 0;
    nowBlock.Move({row:0,column:3});

    if(isGridHadBlock()){
        gameOverSet()
    }
}
refleshBlock();

function blockLock(){
    let tiles = nowBlock.GetPosition();

    for(let i = 0;i< tiles.length;i++){
       grid[tiles[i][1]-1][tiles[i][0]] = nowBlock.id;
    }

    refleshBlock();
}

function refleshColumn(num){
    let temp = [];
    for(let i=0;i< gridColumns;i++){
        temp.push(0);
    }
    grid[num] = temp;
}
function moveRemainColumn(num){
    for(let i = num ; i>0;i--){
        for(let j=0; j < gridColumns; j++){
            grid[i][j] = grid[i-1][j] ;
        }
    }
    //grid[0] = [0,0,0,0,0,0,0,0,0,0];
    refleshColumn(0);
}
function clearFullColumn(num){
    //grid[num] = [0,0,0,0,0,0,0,0,0,0];
    refleshColumn(num);
    score++;
    moveRemainColumn(num);
}
function checkFullCoulmn(){
    let cellNumber = 0;
    for(let i = 0;i<gridRows;i++){
        cellNumber = 0;
        for(let j = 0;j<gridColumns;j++){
            if(grid[i][j] !=0 ){
                cellNumber++
            }
        }
        if(cellNumber >= 10){
           clearFullColumn(i);
        }else{
           // console.log('none')
        }
    }
}

function blockMoveLeft(){
    nowBlock.Move({
        row:0,
        column:-1
    });
    if(isBlockOutside() ||  isGridHadBlock()){//是否出界 底部
        nowBlock.Move({
            row:0,
            column:1
        });
    }
}

function blockMoveRight(){
    nowBlock.Move({
        row:0,
        column:1
    });
    if(isBlockOutside() ||  isGridHadBlock()){//是否出界 底部
        nowBlock.Move({
            row:0,
            column:-1
        });
    }
}

function blockMoveDown(){
    nowBlock.Move({
        row:1,
        column:0
    });
    if(isBlockOutside() ||  isGridHadBlock()){//是否出界 底部
         blockLock();
    }
    checkFullCoulmn();
}
function  isGridHadBlock(){ //未來的位移位置 是否已經有方塊
    let tiles = nowBlock.GetPosition();
    for(let i = 0;i<tiles.length;i++){
        if( isGridCellNotEmpty(tiles[i])){
             return true
         }
     }
    return false
}
function  isGridCellNotEmpty([column,row]){
  
    if(grid[row][column] != 0){
        return true
    }
    return false
}
function isCellOutside([column,row]){
     if(row>=gridRows || row <0 || column >= gridColumns || column < 0){
        return true
    }
    return false
}
function isBlockOutside(){
    let tiles = nowBlock.GetPosition();
    for(let i = 0;i<tiles.length;i++){
       if( isCellOutside(tiles[i])){
            return true
        }
    }
    return false
    
}



function gameStart(timestamp){
    refleshUIData();
    if(delayToDo({
        timestamp:timestamp,
        limit:gameSpeed
    })){
        refleshCanvas();
       nowBlock.Draw();
        blockMoveDown();
    }
    if(!gameOver){
        requestAnimationFrame(gameStart);
    }
    
}
requestAnimationFrame(gameStart);//要求瀏覽器 60fps 更新canvas




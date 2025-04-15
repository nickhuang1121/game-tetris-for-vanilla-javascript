//localStorage.removeItem("scoreBoard");
let localScoreBoard = localStorage.getItem("scoreBoard");

function setLocalScoreBoard({name,data}){
    localStorage.setItem(name,data);
    resetHistoryScoreList();
}
function saveDefaultLocalScoreBoard(){
    setLocalScoreBoard({
        name:"scoreBoard",
        data:`[
                {"name":"RobotA","score":"4","date":"2025-04-15"},
                {"name":"RobotB","score":"2","date":"2025-04-15"},
                {"name":"RobotC","score":"3","date":"2025-04-15"}
            ]`
    });
  
    localScoreBoard = localStorage.getItem("scoreBoard");
}
if(localScoreBoard == null){
    saveDefaultLocalScoreBoard();
}

localScoreBoard = JSON.parse(localScoreBoard );
let localScoreSaveNumber = localScoreBoard.length


function pushNewScoreToLocalScoreBoard(){
    const nowDate = JSON.stringify(new Date()).substr(1,10);
    userName = userNameInput.value;
    
    const temp = {
        "name":userName,
        "score":score,
        "date":nowDate
    }

    if(localScoreSaveNumber<10){
        localScoreBoard.push(temp);
        
        setLocalScoreBoard({
            name:"scoreBoard",
            data:JSON.stringify(localScoreBoard)
        });

        localScoreSaveNumber++;
    }else{
        let minScore = 9999999;
        let minSerial;
        for(let i = 0;i<localScoreBoard.length;i++ ){
            if(parseInt(localScoreBoard[i].score) <minScore ){
                minScore = localScoreBoard[i].score;
                minSerial = i;
            }
        }
        localScoreBoard.splice(minSerial,1)
        localScoreBoard.push(temp);
         setLocalScoreBoard({
            name:"scoreBoard",
            data:JSON.stringify(localScoreBoard)
        });
    }
   
}

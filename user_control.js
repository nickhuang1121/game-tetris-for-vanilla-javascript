const up = document.querySelector("#up");
const down = document.querySelector("#down");
const left = document.querySelector("#left");
const right = document.querySelector("#right");
const roundA = document.querySelector("#roundA");
const roundB = document.querySelector("#roundB ");

function handleControl({keyCode}){
    //up=38,down=40,left=37,right=39
    switch(keyCode){
        case 38:
            if(nowBlock.type+ 1 >= nowBlock.outward.length){
                nowBlock.type = 0;
            }else{
                nowBlock.type++;
            }
        break;
        case 37:
            blockMoveLeft();
        break;
        case 39:
            blockMoveRight();
        break;
        case 40:
            blockMoveDown();
        break;
    }
}
document.addEventListener("keyup",handleControl);
up.addEventListener("click",()=>{
    handleControl({keyCode:38})
});
down.addEventListener("click",()=>{
    handleControl({keyCode:40})
});
left.addEventListener("click",()=>{
    handleControl({keyCode:37})
});
right.addEventListener("click",()=>{
    handleControl({keyCode:39})
});

roundA.addEventListener("click",()=>{
    handleControl({keyCode:38})
});
roundB.addEventListener("click",()=>{
    handleControl({keyCode:38})
});

document.addEventListener("touchstart", (event) => {
    if (event.touches && event.touches.length > 1) {  // 禁止多指觸控
       event.preventDefault();
    }
  }, { passive: false });
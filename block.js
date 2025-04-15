class Block {
    constructor({id,type,outward}){
        this.id = parseInt(id);
        this.type = type;
        this.outward = outward;
        this.offsetRow = 0;
        this.offsetColumn = 0;
    }

    GetPosition(){
        const tiles = this.outward[this.type];
        const moveTiles = [];
        for(let i = 0 ;i <tiles.length;i++){
            moveTiles.push([tiles[i][1]+this.offsetColumn,tiles[i][0]+this.offsetRow])
        }
        return moveTiles;
    }
    Draw(){
        const getPosition = this.GetPosition();
       
        for(let i = 0 ;i <getPosition.length;i++){
           drawCell({
                column:getPosition[i][0] * cellSize,
                row:getPosition[i][1]* cellSize,
                color:Colors[ this.id]
            });
        }
    }
    Move({column,row}){
       
      this.offsetRow += row;
      this.offsetColumn += column;
    }
   
    Collision(){
        
    }
   

}


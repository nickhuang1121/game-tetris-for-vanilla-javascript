const JBlock = new Block({
    id:1,
    type:0,
    outward:[
        [[0,0],[1,0],[1,1],[1,2]],
        [[0,1],[0,2],[1,1],[2,1]],
        [[1,0],[1,1],[1,2],[2,2]],
        [[0,1],[1,1],[2,0],[2,1]],
    ]
})

const TBlock = new Block({
    id:2,
    type:0,
    outward:[
        [[0,1],[1,0],[1,1],[1,2]],
        [[0,1],[1,1],[1,2],[2,1]],
        [[1,0],[1,1],[1,2],[2,1]],
        [[0,1],[1,0],[1,1],[2,1]],
    ]
})

const OBlock = new Block({
    id:3,
    type:0,
    outward:[
        [[0,0],[1,0],[0,1],[1,1]],
        
    ]
})
const IBlock = new Block({
    id:4,
    type:0,
    outward:[
        [[1,0],[1,1],[1,2],[1,3]],
        [[0,1],[1,1],[2,1],[3,1]],
    ]
})
const ZBlock = new Block({
    id:5,
    type:0,
    outward:[
        [[0,0],[0,1],[1,1],[1,2]],
        [[0,2],[1,1],[1,2],[2,1]],
        [[1,0],[1,1],[2,1],[2,2]],
        [[0,1],[1,0],[1,1],[2,0]],
    ]
})

const SBlock = new Block({
    id:6,
    type:0,
    outward:[
        [[0,1],[0,2],[1,0],[1,1]],
        [[0,1],[1,1],[1,2],[2,2]],
        [[1,1],[1,2],[2,0],[2,1]],
        [[0,0],[1,0],[1,1],[2,1]],
    ]
})

const LBlock = new Block({
    id:7,
    type:0,
    outward:[
        [[0,2],[1,0],[1,1],[1,2]],
        [[0,1],[1,1],[2,1],[2,2]],
        [[1,0],[1,1],[1,2],[2,0]],
        [[0,0],[0,1],[1,1],[2,1]],
    ]
})
const Blocks = [JBlock,TBlock,OBlock,IBlock,ZBlock,SBlock,LBlock];




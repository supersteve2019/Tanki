const print = console.log;

function drawBoard(){
    console.log("hi")
}
function size(grid){
    print(grid.length)
}
function draw(cell){
    if(cell === 1){
        console.log("*")
    }
    else{
        console.log("_")
    }

    // console.log(cell)
}
const board = [1,0,1,0]
console.log(board)
drawBoard()
size(board)
board.forEach(draw)
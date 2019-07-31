function createBoard(size) {
    if (size <= 0) {
        throw new Error(`The board size must be positive: got [${size}].`)
    }
    const board = new Array(size);
    board.forEach((cell, index) => {
        board[index] = new Array(size);
    });
    return board;
}

function size(board) {
    return board.length;
}

function drawBoard(board) {
    throw new Error('We haven\'t done this yet.')
}

function drawCell(cell) {
    if (cell === 1) {
        console.log("*")
    } else {
        console.log("_")
    }
}

module.exports = {
    createBoard,
    size,
    drawBoard,
    drawCell
};

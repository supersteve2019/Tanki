const demand = require('must');
const {createBoard, size} = require('../src/board');

describe('board', function () {

    it('create a 1x1 board', function () {
        demand(createBoard(1)).not.be.null();
    });

    it('get the size of a 1x1 board', function () {
        const board = createBoard(1);
        demand(size(board)).to.equal(1);
    });
});

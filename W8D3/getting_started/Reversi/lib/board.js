let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let emptyGrid = new Array(8).fill([]).map(ele => new Array(8));
  emptyGrid[3][4] = new Piece('black');
  emptyGrid[4][3] = new Piece('black');
  emptyGrid[3][3] = new Piece('white');
  emptyGrid[4][4] = new Piece('white');
  return emptyGrid;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (this.isValidPos(pos)){
    return this.grid[pos[0]][pos[1]];
  } else {
    throw Error('Not valid pos!');
  }
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.isOccupied(pos)){
    return this.grid[pos[0]][pos[1]].color === color;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  if (this.isValidPos(pos)){
    // console.log("was valid!");
    if (this.grid[pos[0]][pos[1]] !== undefined) {
      // console.log("was occupied!");
      return true;
    } else {
      // console.log("was empty!");
      return false;
    }
  }
  // console.log('not valid');
  console.log("not good");
  throw Error('Not valid pos!');

};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
    if ((pos[0] > this.grid.length-1) || (pos[0] < 0) ||
      (pos[1] > this.grid[0].length-1) || (pos[1] < 0)){
        return false;
    }
    return true;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
  newPos = [(pos[0]+ dir[0]), (pos[1] + dir[1])];
  console.log("a");
  if (!board.isValidPos(newPos) || !board.isOccupied(newPos)) {
    return null;
   } 
  if(board.getPiece(newPos).color === color && piecesToFlip.length > 0){
    return piecesToFlip;
  }

  piecesToFlip.push(newPos);
  let flipped = _positionsToFlip(board, newPos, color, dir, piecesToFlip);

  if(flipped != null){
    return piecesToFlip.concat(flipped);
  } else {
    return null;
  }
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  //0 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 
  //1
  //2               [w]   
  //3                W    B
  //4                B    W    
  //5
  //6
  //7

  // let piecesToFlip = [];
  console.log("b");
  if(!this.isValidPos(pos) || this.isOccupied(pos)){
    return false;
  }
  for(let i = 0; i < Board.DIRS.length; i++){
    let flippingDirs = _positionsToFlip(this, pos, color, Board.DIRS[i], []);
      // console.log(flippingDirs);
      if (flippingDirs !== null){
        // console.log("true")
        return true;
      } 
    }
    return false;
 
};


/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let result = [];
  for(let row = 0; row < this.grid.length; row++){
    for(let col = 0; col < this.grid[0].length; col++){
      if(this.validMove([row, col], color))
      {
       result.push([row,col]);
      }
    }
  }
  console.log(result);
  return result;

};

module.exports = Board;

import Vec from '../utils/Vector.js';

var allCoords = {};
allCoords[Symbol.iterator] = function* ()
{
  for( let x = -7; x <= 7; x++ )
  {
    for( let y = -7; y <= 7; y++ )
    {
      yield [x,y];
    }
  }
};

export default class Queen {
  constructor(position, color) {
    this.position = position;
    this.color = color;
    this.name = 'queen';
  }

  possibleMoves() {
    let moves = [];

    for (let [x,y] of allCoords) {
      if( this._isDiagonal(x,y) ) moves.push( new Vec(x,y) );
      if( this._isVerHor(x,y) ) moves.push( new Vec(x,y) );
    }

    return moves;
  }

  _isDiagonal(x,y) {
    return (x === y && x!==0) || ( x === (y * -1) && (x!==0 && y!==0) );
  }
  _isVerHor(x,y) {
    return (x === 0 && y!==0) || ( x !== 0 && y===0 );
  }


  move(destination) {
    this.position = destination;
  }
}


import Vec from '../utils/Vector.js';

export default class Bishop {
  constructor(position,color){
      this.position = position;
      this.color = color;
      this.name = 'bishop';
  }

  _filterMoves(arrayMoves,sizeOfBoard){
    let filtredMoves = arrayMoves.filter(element => {
        return (element.x >= 0 && element.y >= 0 && element.x < sizeOfBoard && element.y<sizeOfBoard);
     });
     return filtredMoves;
  }

  possibleMoves(sizeOfBoard){
    let arrayMoves = [];
    for(let j = 1;j<sizeOfBoard;j++){
        arrayMoves.push(new Vec(this.position.x+j,this.position.y+j));
        arrayMoves.push(new Vec(this.position.x-j,this.position.y-j));
        arrayMoves.push(new Vec(this.position.x+j,this.position.y-j));
        arrayMoves.push(new Vec(this.position.x-j,this.position.y+j));
    }
    return(this._filterMoves(arrayMoves,sizeOfBoard));
  }


  move(where) {
    return this.position = where;
  }
}

import Queen from './figures/Queen.js';
import Pawn from './figures/Pawn.js';
import Vector from './utils/Vector.js';
import King from './figures/King.js';
import Knight from './figures/Knight.js';
import Bishop from './figures/Bishop.js';
import Rook from './figures/Rook.js';

export default class GameBoard{
  constructor() {
    this.movesCount = 0;
    this.nextMoveColor = false;
    this.figuresPosition = [
      new Rook(new Vector(0, 0), false),
      new Rook(new Vector(7, 0), false),
      new Rook(new Vector(0, 7), true),
      new Rook(new Vector(7, 7), true),
      new King(new Vector(3, 7), true),
      new King(new Vector(3, 0), false),
      new Knight(new Vector(1, 0), false),
      new Knight(new Vector(6, 0), false),
      new Knight(new Vector(1, 7), true),
      new Knight(new Vector(6, 7), true),
      new Bishop(new Vector(2, 0), false),
      new Bishop(new Vector(5, 0), false),
      new Bishop(new Vector(2, 7), true),
      new Bishop(new Vector(5, 7), true),
      new Queen(new Vector(4, 7), true),
      new Queen(new Vector(4, 0), false),
    ]
    for (let i = 0; i < 8; i++)        {
      this.figuresPosition.push(new Pawn(new Vector(i, 1), true));
      this.figuresPosition.push(new Pawn(new Vector(i, 6), false));
    }
  }
  validateMoves(position){
    let result = [];
    position.map(pos=>{
      if(pos.x>=0&&pos.y>=0&&pos.x<8&&pos.y<8)
      {
        let takenFields =this.figuresPosition.filter(x=>(x.position.x==pos.x&&x.position.y===pos.y));
        if (takenFields.length===0)
        {
          result.push(pos);
        }else if(takenFields[0].color!==this.nextMoveColor)
        {
          result.push(pos);
        }
      }
    })
    return result;
  }
  moveFigure(){

  }
  deleteFigure(){

  }

}

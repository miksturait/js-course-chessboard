import Vector from '../utils/Vector.js';

export default class Pawn {
  constructor(position, color, name = 'pawn') {
      this.position = position;
      this.color = color;
      this.name = name;
  }
  possibleMoves() {
      let possible = [];
      if (this.position.y < 7) possible.push(new Vector(++this.position.y, this.position.x))
      return possible
  }
  move(x,y) {
      this.position.x = x;
      this.position.y = y;
  };
}

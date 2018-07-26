import Vec from '../utils/Vector.js';

export default class Rook {
  constructor(position, color, name = 'rook') {
    this.position = position;
    this.color = color;
    this.name = name;
  }

  possibleMoves() {
    return this._createMoveVectors();
  }

  move(x, y) {
    this.position.x = x;
    this.position.y = y;
  }

  _createMoveVectors() {
    const vectors = [];
    const { x, y } = this.position;

    for (let i = 0; i < 8; i++) {
      if (i !== x) vectors.push(new Vec(i, y));
      if (i !== y) vectors.push(new Vec(x, i));
    }

    return vectors;
  }
}

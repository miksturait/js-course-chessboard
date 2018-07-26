import Vector from '../utils/Vector.js';

export default class Knight {
  constructor(vec, color) {
    this.position = vec;
    this.color = color;
    this.name = "knight";
  }
  possibleMoves() {
    return [
      this.position.add(new Vector(2, 1)),
      this.position.add(new Vector(-2, 1)),
      this.position.add(new Vector(2, -1)),
      this.position.add(new Vector(-2, -1)),
      this.position.add(new Vector(1, 2)),
      this.position.add(new Vector(-1, 2)),
      this.position.add(new Vector(-1, -2)),
      this.position.add(new Vector(1, -2))
    ]
  }
  move() {
  }
}

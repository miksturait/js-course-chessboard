export default class King {
  constructor(vector, color, name = 'king') {
    this.position = vector;
    this.name = name;
    this.color = color;
  };

  possibleMove() {
    let allMoves = [
      this.positon.add({ x: -1, y: -1 }),
      this.positon.add({ x: -1, y:  0 }),
      this.positon.add({ x: -1, y:  1 }),
      this.positon.add({ x:  0, y: -1 }),
      this.positon.add({ x:  0, y:  1 }),
      this.positon.add({ x:  1, y: -1 }),
      this.positon.add({ x:  1, y:  0 }),
      this.positon.add({ x:  1, y:  1 }),
    ]
    return allMoves;
  };

  move(vector) {
    let allMoves = this.possibleMove();

    return allMoves.find(possibleVector => {
      if(vector.x == possibleVector.x && vector.y == possibleVector.y) {
        return vector;
      };
    })
  };
};
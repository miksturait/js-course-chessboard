export default class Vec {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  add(cords) {
    return new Vec( this.x + cords.x, this.y + cords.y );
  }
}

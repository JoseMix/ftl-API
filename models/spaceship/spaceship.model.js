const { nanoid } = require("nanoid");

class SpaceShip {
  constructor(health) {
    this._id = nanoid();
    this.health = health;
  }
  getHealth() {
    return this.health;
  }

  isWorking() {
    return this.health > 0 ? true : false;
  }
}

module.exports = SpaceShip;

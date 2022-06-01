const { nanoid } = require("nanoid");

class SpaceShip {
  constructor(health) {
    this._id = nanoid();
    this.health = health;
  }
  getHealth() {
    return this.health;
  }

  setHealth(health) {
    this.health = health.toString();
  }

  isWorking() {
    return this.health > 0 ? true : false;
  }

  //feature3
  decrementLife() {
    this.setHealth(this.getHealth() - 1);
  }
  shoot(enemy) {
    enemy.decrementLife();
  }
}

module.exports = SpaceShip;

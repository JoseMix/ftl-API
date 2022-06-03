const { nanoid } = require("nanoid");
const Weapon = require("../weapon/weapon.model");
console.log(Weapon);
class SpaceShip {
  constructor(health) {
    this._id = nanoid();
    this.health = health;
    this.weapon = new Weapon();
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
}

module.exports = SpaceShip;

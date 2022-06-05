const { nanoid } = require("nanoid");
const Weapon = require("../weapon/weapon.model");
const ElectricGenerator = require("../electricGenerator/electricGenerator.model.js");
class SpaceShip {
  constructor(health) {
    this._id = nanoid();
    this.health = health;
    this.battery = new ElectricGenerator();
    this.weapon = new Weapon();
    this.connectWeapon();
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

  decrementLife() {
    this.setHealth(this.getHealth() - 1);
  }
  connectWeapon() {
    if (this.battery.canConsumeThis(this.weapon.powerConsumedByWeapon)) {
      this.battery.setPowerConsumedBySpaceship(
        this.weapon.powerConsumedByWeapon
      );
    }
  }
}

module.exports = SpaceShip;

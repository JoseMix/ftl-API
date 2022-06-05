class Weapon {
  constructor() {
    this.powerConsumedByWeapon = 5;
    this.weaponPowerNeeded = 5;
  }

  canShoot() {
    return this.powerConsumedByWeapon === this.weaponPowerNeeded;
  }
  shoot(enemy) {
    enemy.decrementLife();
  }

  getPowerConsumedByWeapon() {
    return this.powerConsumedByWeapon;
  }

  getWeaponPowerNeeded() {
    return this.weaponPowerNeeded;
  }

  setPowerConsumedByWeapon(value) {
    this.powerConsumedByWeapon = value;
  }
}

module.exports = Weapon;

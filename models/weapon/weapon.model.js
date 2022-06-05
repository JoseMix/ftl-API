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
//Faltan tests y feature 9 CHECKEAR QUE EL SETEO DE WEAPON POWER NEEDED NO SUPERA A POWER NOT IN USE

module.exports = Weapon;

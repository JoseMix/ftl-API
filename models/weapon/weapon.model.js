class Weapon {
  constructor() {}
  shoot(enemy) {
    enemy.decrementLife();
  }
}

module.exports = Weapon;

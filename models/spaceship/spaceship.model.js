class SpaceShip {
  constructor(health) {
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

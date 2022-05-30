class SpaceShipGarageSingleton {
  constructor() {
    this.parkedSpaceShips = [];

    if (typeof SpaceShipGarageSingleton.instance === "object") {
      return SpaceShipGarageSingleton.instance;
    }
    SpaceShipGarageSingleton.instance = this;
    return this;
  }

  getParkedSpaceShips() {
    return this.parkedSpaceShips;
  }

  parkSpaceship(spaceship) {
    this.parkedSpaceShips.push(spaceship);
  }
}

module.exports = SpaceShipGarageSingleton;

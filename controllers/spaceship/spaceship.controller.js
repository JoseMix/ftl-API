const SpaceShip = require("../../models/spaceship/spaceship.model");
function createNewShip(health) {
  return new SpaceShip(health);
}

module.exports = { createNewShip };

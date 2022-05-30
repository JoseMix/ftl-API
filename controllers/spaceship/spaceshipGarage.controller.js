const { restart } = require("nodemon");
const SpaceShipGarage = require("../../models/spaceship/spaceshipgarage.model");

const getSpaceShips = (req, res) => {
  let garage = new SpaceShipGarage();
  let spaceShipsList = garage.getParkedSpaceShips();
  if (spaceShipsList.length !== 0) {
    res.status(200).json(spaceShipsList);
  } else {
    res.status(404).json("No spaceships in the garage");
  }
};

module.exports = { getSpaceShips };

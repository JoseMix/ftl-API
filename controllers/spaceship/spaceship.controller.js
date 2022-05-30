const SpaceShip = require("../../models/spaceship/spaceship.model");
const SpaceShipGarage = require("../../models/spaceship/spaceshipgarage.model");

const createNewShip = (req, res) => {
  let health = req.body.health;
  if (isValidHealth) {
    let newShip = new SpaceShip(health); //create a SpaceShip
    let spaceGarage = new SpaceShipGarage(); //Garage Singleton
    spaceGarage.parkSpaceship(newShip); //park a SpaceShip

    res.status(201).json(newShip);
  } else {
    res.status(401).json("Health should be more than 0");
  }
};

const isValidHealth = (health) => {
  return health > 0 ? true : false;
};

module.exports = { createNewShip, isValidHealth };

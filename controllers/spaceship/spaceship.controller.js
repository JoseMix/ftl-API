const SpaceShip = require("../../models/spaceship/spaceship.model");
const SpaceShipGarage = require("../../models/spaceship/spaceshipgarage.model");

const createNewspaceship = (req, res) => {
  let health = req.body.health;
  if (isValidHealth) {
    let newSpaceship = new SpaceShip(health); //create a SpaceShip
    let spaceGarage = new SpaceShipGarage(); //Garage Singleton
    spaceGarage.parkSpaceship(newSpaceship); //park a SpaceShip

    res.status(201).json(newSpaceship);
  } else {
    res.status(401).json("Health should be more than 0");
  }
};

const isValidHealth = (health) => {
  return health > 0 ? true : false;
};

module.exports = { createNewspaceship, isValidHealth };

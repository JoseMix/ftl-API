const SpaceShip = require("../../models/spaceship/spaceship.model");
const SpaceShipGarage = require("../../models/spaceship/spaceshipgarage.model");
const Weapon = require("../../models/weapon/weapon.model");
const {
  getSpaceshipById,
} = require("../../controllers/spaceship/spaceshipGarage.controller.js");
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

const updatePower = (req, res) => {
  let newPowerConsumed = req.body.power;
  let spaceship = getSpaceshipById(req.params.id);
  if (spaceship) {
    if (newPowerConsumed > spaceship.weapon.getWeaponPowerNeeded()) {
      res
        .status(404)
        .send(
          "Power consumed by weapon cannot be more than weapon power needed!"
        );
    } else {
      spaceship.weapon.setPowerConsumedByWeapon(parseInt(newPowerConsumed));
      res.status(201).send("Power consumed by weapon updated correctly");
    }
  } else {
    res.status(404).send("Spaceship Id not found!");
  }
};

module.exports = { createNewspaceship, isValidHealth, updatePower };

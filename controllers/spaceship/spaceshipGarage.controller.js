const { restart } = require("nodemon");
const SpaceShipGarage = require("../../models/spaceship/spaceshipgarage.model");

const getSpaceships = (req, res) => {
  let garage = new SpaceShipGarage();
  let spaceShipsList = garage.getParkedSpaceShips();
  if (spaceShipsList.length !== 0) {
    console.log(spaceShipsList);
    res.status(200).json(spaceShipsList);
  } else {
    res.status(404).json("No spaceships in the garage");
  }
};

//feature 3
const getSpaceshipById = (id) => {
  let garage = new SpaceShipGarage();
  return garage.getParkedSpaceShips().find((spaceship) => spaceship._id === id);
};

const attackSpaceship = (req, res) => {
  let shooter = getSpaceshipById(req.params.id);
  let enemy = getSpaceshipById(req.body.enemy);
  if (shooter && enemy) {
    if (enemy.isWorking()) {
      shooter.shoot(enemy);
      res.status(200).json("Enemy hit!");
    } else {
      res.status(401).json("Enemy is already destroyed");
    }
  } else {
    res.status(401).json("Spaceship not found");
  }
};

module.exports = { getSpaceships, attackSpaceship, getSpaceshipById };

const express = require("express");
const router = express.Router();
const spaceshipController = require("../../controllers/spaceship/spaceship.controller");
const {
  createNewShip,
} = require("../../controllers/spaceship/spaceship.controller");

router.post("/api/v1/spaceship", spaceshipController.createNewShip);

module.exports = router;

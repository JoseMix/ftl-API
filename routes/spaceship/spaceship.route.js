const express = require("express");
const router = express.Router();
const {
  createNewShip,
} = require("../../controllers/spaceship/spaceship.controller");
const {
  getSpaceShips,
} = require("../../controllers/spaceship/spaceshipGarage.controller");
router.post("/api/v1/spaceship", createNewShip);

router.get("/api/v1/spaceship", getSpaceShips);
module.exports = router;

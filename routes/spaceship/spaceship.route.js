const express = require("express");
const router = express.Router();
const {
  createNewspaceship,
} = require("../../controllers/spaceship/spaceship.controller");
const {
  getSpaceships,
  attackSpaceship,
} = require("../../controllers/spaceship/spaceshipGarage.controller");

router.post("/api/v1/spaceship", createNewspaceship);

router.get("/api/v1/spaceship", getSpaceships);

router.patch("/api/v1/spaceship/shoot/:id", attackSpaceship);

module.exports = router;

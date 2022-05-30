const express = require("express");
const router = express.Router();
const {
  createNewShip,
} = require("../../controllers/spaceship/spaceship.controller");
router.post("/api/v1/spaceship", (req, res) => {
  let health = req.body.health;
  let newShip = createNewShip(health); //create a SpaceShip
  console.log(newShip);
});

module.exports = router;

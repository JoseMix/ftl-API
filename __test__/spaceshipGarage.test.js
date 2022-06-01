const SpaceShip = require("../models/spaceship/spaceship.model");
const SpaceShipGarageSingleton = require("../models/spaceship/spaceshipgarage.model");
const {
  getSpaceshipById,
} = require("../controllers/spaceship/spaceshipGarage.controller");
const request = require("supertest");
const { app, server } = require("../index");

//Closes server after test
afterAll(() => {
  server.close();
});
//Class Tests
describe("Test SpaceshipGarage class instantiation", () => {
  test("Test that Spaceship is created correctly", () => {
    let newGarage = new SpaceShipGarageSingleton();
    expect(newGarage).not.toBeNull();
  });

  test("Test that SpaceshipGarage instance is always the same instance", () => {
    let garage1 = new SpaceShipGarageSingleton();
    let garage2 = new SpaceShipGarageSingleton();
    expect(garage1).toBe(garage2);
  });

  test("Test that Spaceship is parked correctly on garage Array", () => {
    let garage = new SpaceShipGarageSingleton();
    let spaceship1 = new SpaceShip();
    garage.parkSpaceship(spaceship1);
    expect(garage.getParkedSpaceShips()).toContain(spaceship1);
  });
});

//Controller Test
describe("Test SpaceshipGarage Controller", () => {
  test("Test that spaceship is found by Id", () => {
    let garage = new SpaceShipGarageSingleton();
    let spaceship1 = new SpaceShip();
    spaceship1.setHealth(20);
    garage.parkSpaceship(spaceship1);
    expect(getSpaceshipById(spaceship1._id)).toMatchObject({
      _id: spaceship1._id,
      health: "20",
    });
  });
});

//Test SpaceShipGarage endpoints
describe("Test SpaceshipGarage endpoints", () => {
  test("Test spaceship GET route, to check if spaceship garage returns all ships", async () => {
    let garage = new SpaceShipGarageSingleton();
    let spaceship1 = new SpaceShip();
    let spaceship2 = new SpaceShip();
    garage.parkSpaceship(spaceship1);
    garage.parkSpaceship(spaceship2);
    await request(app)
      .get("/api/v1/spaceship")
      .expect(200)
      .expect("Content-Type", /application\/json/);
  });
});

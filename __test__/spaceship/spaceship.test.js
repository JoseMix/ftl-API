const request = require("supertest");
const { app, server } = require("../../index");
const SpaceShip = require("../../models/spaceship/spaceship.model");
const {
  isValidHealth,
} = require("../../controllers/spaceship/spaceship.controller");
const SpaceShipGarageSingleton = require("../../models/spaceship/spaceshipgarage.model");

//Closes server after test
afterAll(() => {
  server.close();
});
//Class TEST
describe("Test Spaceship class instantiation and methods", () => {
  test("Test that Spaceship is created correctly", () => {
    let newSpaceShip = new SpaceShip(100);
    expect(newSpaceShip).not.toBeNull();
  });

  test("Test that Spaceship is created with correct health and working", () => {
    let newSpaceShip = new SpaceShip(50);
    expect(newSpaceShip.getHealth()).toBe(50);
  });

  test("Test that Spaceship is working", () => {
    let newSpaceShip = new SpaceShip(50);
    let newSpaceShip2 = new SpaceShip(0);
    expect(newSpaceShip.isWorking()).toBeTruthy();
    expect(newSpaceShip2.isWorking()).toBeFalsy();
  });

  test("Test that Spaceship life is decremented correctly", () => {
    let newSpaceShip = new SpaceShip(50);
    newSpaceShip.decrementLife();
    expect(newSpaceShip.getHealth()).toBe("49");
  });

  //test feature 8
  test("Test if battery update powerConsumedBySpaceship properly", () => {
    let newSpaceShip = new SpaceShip(50);
    expect(newSpaceShip.battery.getPowerConsumedBySpaceship()).toBe(5);
  });
});

////Controller tests
describe("Tests to check invalid health values", () => {
  test("Test if health == 0 returns false", () => {
    let health = 0;
    expect(isValidHealth(health)).toBeFalsy();
  });
  test("Test if health < 0 returns false", () => {
    let health = -10;
    expect(isValidHealth(health)).toBeFalsy();
  });
});

////Endpoint tests
describe("Test Spaceship endpoints", () => {
  test("Test spaceship post route", async () => {
    await request(app)
      .post("/api/v1/spaceship")
      .send({ health: 40 })
      .expect(201)
      .expect("Content-Type", /application\/json/);
  });

  test("Test if power consumed by weapon is updated correctly", async () => {
    let newSpaceShip = new SpaceShip(100);
    let parking = new SpaceShipGarageSingleton();
    parking.parkSpaceship(newSpaceShip);
    await request(app)
      .patch(`/api/v1/spaceship/weapon/${newSpaceShip._id}`)
      .send({ power: 3 })
      .expect(201);
  });
});

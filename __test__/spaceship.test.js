const request = require("supertest");
const { app, server } = require("../index");
const SpaceShip = require("../models/spaceship/spaceship.model");
const {
  isValidHealth,
} = require("../controllers/spaceship/spaceship.controller");

afterAll(() => {
  server.close();
});
//Class TEST
describe("Test Spaceship class instantiation", () => {
  test("Test that Spaceship is created correctly", () => {
    let newSpaceShip = new SpaceShip(100);
    expect(newSpaceShip).not.toBeNull();
  });

  test("Test that Spaceship is created with correct health", () => {
    let newSpaceShip = new SpaceShip(50);
    expect(newSpaceShip.getHealth()).toBe(50);
    expect(newSpaceShip.isWorking()).toBeTruthy();
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
    console.log(isValidHealth(-10));
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
});
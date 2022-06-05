const ElectricGenerator = require("../../models/electricGenerator/electricGenerator.model");

describe("Test ElectricGenerator class instantiation and methods", () => {
  test("Test that Generator is created correctly", () => {
    let newGenerator = new ElectricGenerator();
    expect(newGenerator).not.toBeNull();
  });

  test("Test the value of powerNotConsumed if correct", () => {
    let newGenerator = new ElectricGenerator();
    expect(newGenerator.getPowerNotConsumed()).toBe(10);
  });

  test("Test that cannot consume more than totalPower", () => {
    let newGenerator = new ElectricGenerator();
    expect(newGenerator.canConsumeThis(11)).toBeFalsy();
  });

  test("Test that power consumed by spaceship is set correctly", () => {
    let newGenerator = new ElectricGenerator();
    newGenerator.setPowerConsumedBySpaceship(10);
    expect(newGenerator.getPowerConsumedBySpaceship()).toBe(10);
  });
});

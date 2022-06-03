const Weapon = require("../../models/weapon/weapon.model");
const SpaceShip = require("../../models/spaceship/spaceship.model");
//Class TEST
describe("Test Weapon class instantiation and methods", () => {
  test("Test that Weapon is created correctly", () => {
    let newWeapon = new Weapon();
    expect(newWeapon).not.toBeNull();
  });

  test("Test that Weapon shoots correctly", () => {
    let newSpaceShip = new SpaceShip(50);
    let newSpaceShip2 = new SpaceShip(40);
    newSpaceShip.weapon.shoot(newSpaceShip2);
    expect(newSpaceShip2.getHealth()).toBe("39");
  });
});

class ElectricGenerator {
  constructor() {
    this.totalPower = 10;
    this.powerConsumedBySpaceship = 0;
  }

  getTotalPower() {
    return this.totalPower;
  }

  setTotalPower(power) {
    this.totalPower = power;
  }

  getPowerNotConsumed() {
    return this.totalPower - this.powerConsumedBySpaceship;
  }

  canConsumeThis(power) {
    return power <= this.totalPower;
  }

  setPowerConsumedBySpaceship(power) {
    this.powerConsumedBySpaceship = power;
  }

  getPowerConsumedBySpaceship() {
    return this.powerConsumedBySpaceship;
  }
}

module.exports = ElectricGenerator;

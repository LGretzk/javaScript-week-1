class Thermostat {

  constructor() {
    const defaultTemperature = 20;
    const minTemperature = 10;
    this.currentTemp = defaultTemperature;
    this.powerSavingStatus = true;
  }

  temperature() {
    return this.currentTemp;
  }

  up(num) {
    if ((this.powerSavingStatus === true) && (this.currentTemp + num > 25)) {
      this.currentTemp = 25;
      throw 'Maximum temperature is 25';
    } else if ((this.powerSavingStatus === false) && (this.currentTemp + num > 32))  {
      this.currentTemp = 32;
      throw 'Maximum temperature is 32';
    } else {
      this.currentTemp += num;
    };
  }

  down(num) {
    if (this.currentTemp - num > 10) {
      this.currentTemp -= num;
    } else {
      this.currentTemp = 10;
      throw 'Minimum temperature is 10';
    };    
  }

  getPowerSavingStatus() {
    return this.powerSavingStatus;
  }

  changePowerSavingStatus() {
    this.powerSavingStatus === true ? this.powerSavingStatus = false : this.powerSavingStatus = true;
  }

};

module.exports = Thermostat;

const thermostat = new Thermostat();

console.log(thermostat.temperature());

console.log(thermostat.up(1));
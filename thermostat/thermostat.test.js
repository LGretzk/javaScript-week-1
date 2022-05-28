const Thermostat = require('./thermostat');

describe('Thermostat', () => {
  it('initializes temperature to 20 degrees', () => {
    const thermostat = new Thermostat();
    expect(thermostat.temperature()).toBe(20);
  });

  it('up function increases the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.up(1);
    expect(thermostat.temperature()).toBe(21);
  });

  it('down function decreases the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.down(1);
    expect(thermostat.temperature()).toBe(19);
  });

  // it('does not decrease below the minimum temperature of 10', () => {
  //   const thermostat = new Thermostat();
  //   thermostat.down(11);
  //   expect(thermostat.temperature()).toBe(10);
  // });

  it('does not decrease below the minimum temperature of 10', () => {
    const thermostat = new Thermostat();
    expect(() => thermostat.down(11)).toThrow('Minimum temperature is 10');
    expect(thermostat.temperature()).toBe(10);
  });

  it('power saving mode is on by default', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getPowerSavingStatus()).toBe(true);
  });

  it('changes the power saving mode to off (false)', () => {
    const thermostat = new Thermostat();
    thermostat.changePowerSavingStatus();
    expect(thermostat.getPowerSavingStatus()).toBe(false);
  });

  it('sets maximum temperature to 25 degrees if power saving mode is on', () => {
    const thermostat = new Thermostat();
    expect(() => thermostat.up(6)).toThrow('Maximum temperature is 25');
    expect(thermostat.temperature()).toBe(25);
  });

  it('sets maximum temperature to 32 degrees if power saving mode is off', () => {
    const thermostat = new Thermostat();
    thermostat.changePowerSavingStatus();
    expect(() => thermostat.up(13)).toThrow('Maximum temperature is 32');
    expect(thermostat.temperature()).toBe(32);
  });
});
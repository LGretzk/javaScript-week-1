README

The Thermostat starts with an initial temperature of 20 degrees
You can increase the temperature with an up method
You can decrease the temperature with a down method
The minimum possible temperature is 10 degrees
The Power saving mode is on by default but it can also be turned off
If power saving mode is on, the maximum temperature is 25 degrees
If power saving mode is off, the maximum temperature is 32 degrees
You can reset the temperature to 20 with a reset method
You can ask about the thermostat's current energy usage: < 18 is low-usage, <= 25 is medium-usage, anything else is high-usage.

new Thermostat ---- temperature initializes to 20
thermostat.up(5) --- 25
thermostat.down(5) --- 15
thermostat.down(11) ---- error or 10 (min temp)
new Thermostat --- power saving initializes to true
thermostat.powerSavingOn ----- powerSaving = true
thermostat.powerSavingOff ---- powerSaving = false

when thermostat.powerSaving == true 

thermostat.temperature

this.maxTemperature
this.minTemperature

thermostat.reset

thermostat.energyUsage
< 18 = low
<= 25 = med
> 25 = high
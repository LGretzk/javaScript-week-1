 const Weather = require('./weather');

 describe('Weather', () => {
   it('gets data from WeatherApi instance', () => {
     const weatherApiDouble = {
       fetchWeatherData: (city, callback) => {
         callback({
           name: "Mock",
           description: "Test description"
         });
       }};
     const weather = new Weather(weatherApiDouble);
     weather.fetch('someCity');
     expect(weather.getWeatherData()).toEqual({
      name: "Mock",
      description: "Test description"
    });
   })
 })
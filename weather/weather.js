const { default: got } = require("got/dist/source");

class Weather {
  constructor(api) {
    this.api = api;
  }
  fetch(city) {
    this.api.fetchWeatherData(city, (response) => {
      this.weatherInfo = response;
    });
  }
  getWeatherData() {
    return this.weatherInfo
  }
}

module.exports = Weather
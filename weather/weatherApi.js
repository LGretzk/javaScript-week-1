const got = require('got');
const apiKey = require('./apiKey')

class WeatherApi {
  fetchWeatherData(city, callback) {
    got(`http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`)
    .then((response) => { return JSON.parse(response.body); })
    .then(callback);
  }
}

module.exports = WeatherApi
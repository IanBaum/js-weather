var apiKey = require('./../.env').apiKey;

function Temperature(){
}

Temperature.prototype.getKelvin = function(city){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    $('.showWeather').text('The Temperature in ' + city + " is " + response.main.temp.toFixed(2)  + " kelvin");
  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
}

Temperature.prototype.getCelsius = function(city){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    $('.showWeather').text('The Temperature in ' + city + " is " + (response.main.temp - 273.15).toFixed(2) + " celsius");
  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
}

Temperature.prototype.getFahrenheit = function(city){
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
    $('.showWeather').text('The Temperature in ' + city + " is " + (response.main.temp * 9/5 - 459.67).toFixed(2)  + " fahrenheit");
  }).fail(function(error){
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.temperatureModule = Temperature;

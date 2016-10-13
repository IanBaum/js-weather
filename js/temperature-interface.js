var Temperature = require('./../js/temperature.js').temperatureModule;

$(document).ready(function(){
  var currentTemperatureObject = new Temperature();

  $('#kelvinLocation').click(function(){
    var city = $('#location').val();
    currentTemperatureObject.getKelvin(city);
  });

  $('#celsiusLocation').click(function(){
    var city = $('#location').val();
    currentTemperatureObject.getCelsius(city);
  });
  $('#fahrenheitLocation').click(function(){
    var city = $('#location').val();
    currentTemperatureObject.getFahrenheit(city);
  });
});

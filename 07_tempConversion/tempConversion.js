const convertToCelsius = function(fahrenheitTemp) {
  let celsiusValue = (fahrenheitTemp - 32)*(5/9)
  return Math.round(celsiusValue * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  let fahrenheitValue = ((9/5)*celsiusTemp) + 32;
  return Math.round(fahrenheitValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

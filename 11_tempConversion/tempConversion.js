const convertToCelsius = num => parseFloat(((num - 32) * (5 / 9)).toFixed(1));

const convertToFahrenheit = num => parseFloat(((num * 9 / 5) + 32).toFixed(1));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(farInput) {
let celTen = ((farInput - 32) * 5 / 9 * 10)
return (Math.round(celTen)/10)
};

const convertToFahrenheit = function(celInput) {
let farTen = (((celInput * 9 / 5) + 32) * 10)
return (Math.round(farTen)/10)
};




// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

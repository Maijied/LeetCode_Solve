/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let result = [];
    let Kelvin  = celsius + 273.15;
    let Fahrenheit  = celsius * 1.80 + 32.00;
    result.push(Kelvin);
    result.push(Fahrenheit);
    return result;
};
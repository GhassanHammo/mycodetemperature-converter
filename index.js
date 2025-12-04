//const temperature = (userPrompt) => {

let fahrenheit =prompt ("Please inter the temperature in fahrenheit")
//const temperature = prompt
//return temperature (prompt)
//}
console.log(fahrenheit)

//console.log("Hello Ghassan");
const convertToCelsius = (fahrenheit) => {
  return ((fahrenheit - 32) * 5) / 9;
};
//const temperature = 1;
const temToCelsius = convertToCelsius(fahrenheit);
console.log(temToCelsius);

const describeTemperature = (temperature) => {
    
  if (temperature <= 0) {
    return "very cold";
  } else if (temperature < 20) {
    return "Cold";
  } else if (temperature < 30) {
    return "warm";
  } else if (temperature < 40) {
    return "hot";
  } else {
    return "very hot";
  }
};
const temperature = temToCelsius

console.log(describeTemperature(temperature))
// const tTemperature = -18
// const result = (describeTemperature (tTemperature))
// console.log(result)

// const cTemperature = 19
// const cResult = (describeTemperature (cTemperature))
// console.log(cResult)

// const hTemperature = 25
// const hResult = (describeTemperature (hTemperature))
// console.log(hResult)

// const vhTemperature = 35
// const vhResult = (describeTemperature (vhTemperature))
// console.log(vhResult)

// const vvhTemperature = 40
// const vvhResult = (describeTemperature (vvhTemperature))
// console.log(vvhResult)
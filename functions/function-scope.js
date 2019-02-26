// Global scope (fahrenheitToCelciusConverter, conversionOne, conversionTwo)
  // Local scope (temp, converted)
    // Local scope (isFreezing)
let fahrenheitToCelciusConverter = function (temp) {
  let converted = (temp - 32) * (5 / 9)

  if(converted <= 0 ){
    let isFreezing = true
  }
  return converted
}

let conversionOne = fahrenheitToCelciusConverter(32)
let conversionTwo = fahrenheitToCelciusConverter(68)

console.log(conversionOne)
console.log(conversionTwo)
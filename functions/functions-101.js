let greetUser = function () {
  console.log('Welcome User');
}

greetUser()

let square = function (num){
  let result = num * num
  return result
}

console.log(square(3))

//function to convert fahrenheit to celcius

let fahrenheitToCelciusConverter = function (temp) {
  let converted = (temp - 32) * (5 / 9)
  return converted
}

let conversionOne = fahrenheitToCelciusConverter(32)
let conversionTwo = fahrenheitToCelciusConverter(68)

console.log(conversionOne)
console.log(conversionTwo)
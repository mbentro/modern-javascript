let name = '  Matthew Bentrovato '

//Length
console.log(name.length)

//convert to uppercase
console.log(name.toUpperCase())

//convert to lowercase
console.log(name.toLowerCase())

//includes method
let password = 'ABC123password098'
console.log(password.includes('password'))

//trim
console.log(name.trim())

//Challenge area

// isValidPassword
// length > 8 & does not contain 'password', then it's valid

let isValidPassword = function(password){
  return ( password.length > 8 ) && !password.includes('password')
}

console.log(isValidPassword('asfgd'))
console.log(isValidPassword('asf123$%31'))
console.log(isValidPassword('a123password321gd'))

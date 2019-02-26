let add = function (num1, num2){
  return num1 + num2;
}

let result = add(10, 1)
console.log(result)

//Default arguments
let getScoreText = function (name = 'Anon', score = 0){
  // return 'Name: ' + name + ' - Score: ' + score
  return `Name: ${name} - Score: ${score}`
}
let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


//Challenge
//tip calculator, total and tip %

let tipCalculator = function(total, tipPercent = 0.2){
  let tipAmount = total * tipPercent
  return `A ${tipPercent * 100}% tip on $${total} is $${tipAmount}`
}
let tipOutput = tipCalculator(40, .25)
console.log(tipOutput)


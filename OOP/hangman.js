const Hangman = function (word, remainingGuesses){
  this.word = word.toLowerCase().split('')
  this.remainingGuesses = remainingGuesses
  this.guessedLetters = []
  this.wordGuess = []
}

Hangman.prototype.makeGuess = function(guessedLetter){
  if(this.remainingGuesses === 0){
    return `Out of attempts, the word was '${this.word.toString().replace(/,/g, '')}'`
  }
  
  const lowLetter = guessedLetter.toLowerCase()
  const found = this.guessedLetters.find((letter) => letter === lowLetter)
  if(found){
    return `Letter ${guessedLetter} already guessed. Guess again`
  }
  this.guessedLetters.push(lowLetter) // add letter to guessLetters array

  // Go through the word, if letter matches, 'unhide it' from wordGuess
  this.word.forEach((letter, index) => {
    if(letter === lowLetter){
      this.wordGuess[index] = lowLetter
    }
  });

  this.remainingGuesses--
  
  if(this.wordGuess.toString() === this.word.toString()){
    return `Guess: ${lowLetter} - Correct! the word was '${this.word.toString().replace(/,/g, '')}'`
  }

  return `Guess: ${lowLetter} - '${this.wordGuess.toString().replace(/,/g, '')}'`
}

Hangman.prototype.initialize = function(){
  this.word.forEach((letter) => {
    if(letter !== ' '){
      this.wordGuess.push('*')
    } else if (letter === ' '){
      this.wordGuess.push(' ')
    }
  })
}

const hangOne = new Hangman('Cat', 6)
hangOne.initialize()

console.log(hangOne.makeGuess('C'))
console.log(hangOne.makeGuess('4'))
console.log(hangOne.makeGuess('T'))
console.log(hangOne.makeGuess('O'))
console.log(hangOne.makeGuess('T'))
console.log(hangOne.makeGuess('J'))
console.log(hangOne.makeGuess('Z'))
console.log(hangOne.makeGuess('A'))

// console.log(hangOne.word)
// console.log(hangOne.wordGuess)

// const hangTwo = new Hangman('DJ Roomba', 12)

// console.log(hangOne)
// console.log(hangTwo)
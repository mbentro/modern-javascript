class Hangman {
  constructor(word, remainingGuesses){
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
  }
  makeGuess(guessedLetter){
    if(this.status === 'playing'){
      guessedLetter = guessedLetter.toLowerCase()
      const found = this.guessedLetters.includes(guessedLetter)
  
      if(!found){
        this.guessedLetters.push(guessedLetter)
      }
  
      if(!this.word.includes(guessedLetter)  && !found){
        this.remainingGuesses--
      }
      this.updateStatus()
    }
  }

  get puzzle() {
    let puzzle = ''

    this.word.forEach((letter) => {
      if(this.guessedLetters.includes(letter) || letter === ' '){
        puzzle += letter
      } else {
        puzzle += '*'
      }
    })
  
    return puzzle
  }

  updateStatus(){
    const finished = this.word.every((letter) => {
      if(letter === ' '){
        return true
      }
      return this.guessedLetters.includes(letter)
    })
  
    if(this.remainingGuesses === 0) {
      this.status = 'failed'
    } else if(finished){
      this.status = 'finished'
    }
  }

  get statusMessage(){
    let message = ''
    if(this.status === 'playing'){
      // return message = `Remaining guesses: ${this.remainingGuesses}`
      return message
    } else if (this.status === 'failed'){
      return message = `Nice try! The word was "${this.word.join('')}""`
    } else if (this.status === 'finished'){
      return message = `You guessed the word!`
    }
  }
  printGuesses(){
    let guessed = ''
    if(this.guessedLetters.length > 0){
      this.guessedLetters.forEach((letter) => {
        guessed += `${letter} - `      
      })
    }
    
    let lastCommaIndex = guessed.lastIndexOf("-")
    guessed = guessed.substring(0,lastCommaIndex)
    return guessed
  }
}
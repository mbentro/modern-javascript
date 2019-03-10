const puzzleDOM = (game) => {
  const titleElem = document.createElement('h3')
  titleElem.textContent = `Game: ${game.puzzle} - Remaining Guesses: ${game.remainingGuesses}`

  return titleElem
}

const guessDOM = (game) => {
  const bodyElem = document.createElement('span')
  bodyElem.textContent = `Guesses: ${game.printGuesses() }`
  
  return bodyElem
}

const outputDOM = (game) => {
  const outputElem = document.createElement('span')
  outputElem.textContent = game.statusMessage
  return outputElem
}

const renderGame = (game) => {

    document.querySelector('#hangman').innerHTML = ''
    const puzzle = puzzleDOM(game)
    document.querySelector("#hangman").appendChild(puzzle)

    document.querySelector('#guesses').innerHTML = ''
    if(game.guessedLetters.length > 0){
      const guesses = guessDOM(game)
      document.querySelector('#guesses').appendChild(guesses)
    }

    document.querySelector("#result").innerHTML = ''
    const output = outputDOM(game)
    document.querySelector("#result").appendChild(output)

}

const hangmanGame = new Hangman('DJ ROOMBA', 5)
renderGame(hangmanGame)

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangmanGame.makeGuess(guess)
    renderGame(hangmanGame)
})

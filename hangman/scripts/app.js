let hangmanGame

const puzzleDOM = (game) => {
  const titleElem = document.createElement('h3')
  const divElem = document.createElement('div')
  const puzzleArray = game.puzzle.split('')
  let puzzleWord = ''
  puzzleArray.forEach((letter) => {
    const letterElem = document.createElement('span')
    letterElem.textContent = letter
    divElem.appendChild(letterElem)
  })
  // console.log(titleElem.innerHTML = divElem)
  titleElem.innerHTML = `Game: ${divElem.innerHTML} - Remaining Guesses: ${game.remainingGuesses}`

  return titleElem
}

const guessDOM = (game) => {
  const bodyElem = document.createElement('p')
  bodyElem.textContent = `Guesses: ${game.printGuesses() }`
  
  return bodyElem
}

const outputDOM = (game) => {
  const outputElem = document.createElement('p')
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

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    hangmanGame.makeGuess(guess)
    renderGame(hangmanGame)
})

const startGame = async () => {
  const puzzle = await getPuzzle('2')
  hangmanGame = new Hangman(puzzle, 5)
  renderGame(hangmanGame)
}

startGame()

document.querySelector('#reset').addEventListener('click', (e) => {
  e.preventDefault()
  startGame()
})
let hangmanGame

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
// getPuzzle('3').then((puzzle) => {
//   console.log(puzzle)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getCurrentCountry().then((country) => {
//   console.log(country.name)
// }).catch((err) => {
//   console.log(`Error: ${err}`)
// })

// getCountry('CA').then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })


// getLocation().then((location) => {
//   console.log(location.city)
//   console.log(location.region)
//   console.log(location.country)
// }).catch((error) => {
//   console.log(error)
// })

// getLocation().then((location) => {
//   return getCountry(location.country)
// }).then((country) => {
//   console.log(country.name)
// }).catch((error) => {
//   console.log(error)
// })
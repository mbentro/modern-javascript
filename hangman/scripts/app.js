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
<<<<<<< HEAD:hangman/scripts/app.js
})
=======
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
>>>>>>> e6e082bf5e7fea8efc3edd3eab43581283d7fa57:hangman/app.js

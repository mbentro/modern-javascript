// const userAge  = 33
// let message = userAge >= 18 ? `You can vote` : `You cannot vote`

// console.log(message)

const myAge = 33
const showPage = () => {
  console.log('Show the page')
}

const showErrorPage = () => {
  console.log('Showing the error page')
}

myAge >= 21 ? showPage() : showErrorPage()

const team = ['Matt', 'Carla', 'Ptheven', 'Sez', 'Luna']

const message = team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team`

console.log(message)
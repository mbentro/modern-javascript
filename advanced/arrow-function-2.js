const add = function(a, b) {
  console.log(arguments)
}

add(5, 21, 27, 33)

const car = {
  color: 'Red',
  getSummary() {
    return `The car is ${this.color}`
  }
}

console.log(car.getSummary())
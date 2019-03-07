const square = (num) => num*num

const squareLong = (num) => {
  return num*num
}

console.log(square(3))

const people = [{
  name: 'Matt',
  age: 33
},
{
  name: 'Carla',
  age: 29
},
{
  name: 'Phteven',
  age: 7
}]

// const under30 = people.filter(function(person){
//   return person.age < 30
// })
const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const isPhteven = people.find((person) => person.name === 'Phteven')
console.log(isPhteven)


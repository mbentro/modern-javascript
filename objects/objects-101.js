let myBook = {
  title: '1984',
  author: 'George Orwell',
  pages: 326
}

console.log(`${myBook.title} by ${myBook.author}`)

// Model a person: name, age, location
// 'name is age and lives in location'
//incares are by 1 and print again
let person = {
  name: 'Matt',
  age: 33,
  location: 'Calgary'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

person.age += 1

console.log(`${person.name} is ${person.age} and lives in ${person.location}`)

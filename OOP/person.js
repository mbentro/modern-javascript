const Person = function(firstName, lastName, age, likes = []){
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

Person.prototype.getBio = function(){
  let bio = `${this.firstName} is ${this.age}.`
  this.likes.forEach((like) => {
    bio += ` ${firstName} likes ${like}.`
  })
  return bio
}

Person.prototype.setName = function(fullName) {
  const names = fullName.split(' ')
  this.firstName = names[0]
  this.lastName = name[1]
}

const me = new Person('Matt', 'Bentrovato', 33, ['LoL', 'Movies'])
console.log(me)

const wife = new Person('Carla', 'Ramos', 29)
console.log(wife)
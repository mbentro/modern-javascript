let myBook = {
  title: '1984',
  author: 'George Orwell',
  pages: 326
}

let otherBook = {
  title: 'A Peoples History',
  author: 'Howard Zinn',
  pages: 723
}

let getSummary = function(book){
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pages} pages long`
  }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary)

//Challenge
//Create function that takes F in and return an object with all 3

let fahrenheitConverter = function (fahrenheit){
  return{
    fahrenheit: fahrenheit,
    celcius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9)
  }
}

let temp = fahrenheitConverter(74)

console.log(temp.fahrenheit)
console.log(temp.celcius)
console.log(temp.kelvin)
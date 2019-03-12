 const createCounter = () => {
   let count = 0

   return {
     increment() {
       count++
     },
     decrement() {
      count--
     },
     get() {
       return count
     }
   }
 }

 const counter = createCounter()
 counter.increment()
 counter.decrement()
 counter.decrement()
 console.log(counter.get())

//Adder
const createAdder = (a) => {
  return (b) => {
    return a+b
  }
}

const add10 = createAdder(10)
console.log(add10(-2))
console.log(add10(21))

const add100 = createAdder(100)
console.log(add100(-90))

// const myFunction = () => {
//   const message = 'This is my message'
//   const printMessage = () => {
//     console.log(message)
//   }
//   return printMessage
// }

// const myPrintMEssage = myFunction()
// myPrintMEssage()

//Challenge
const createTipper = (tip) => {
  return (billAmt) => {
    return billAmt * tip
  }
}

const tip15 = createTipper(.15)
const tip12 = createTipper(.12)
const tip10 = createTipper(.10)
console.log(tip15(100))
console.log(tip15(63.54))
console.log(tip12(55))
console.log(tip10(14.20))
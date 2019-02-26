let restaurant = {
  name: 'Raw Bar',
  guestCapacity: 75,
  guestCount: 0,
  //a method is an object property whose value is a function
  checkAvailability: function (partySize) {
    let seatsLeft = this.guestCapacity - this.guestCount
    return seatsLeft >= partySize    
  },
  seatParty: function(partySize) {
    if(this.checkAvailability(partySize)){
      this.guestCount += partySize
    } else {
      console.log(`We can put you on the list`)
    }
  },
  removeParty: function(partySize) {
    this.guestCount -= partySize
  }
}


restaurant.seatParty(72)
restaurant.removeParty(5)
restaurant.seatParty(4)
restaurant.seatParty(10)
console.log(restaurant)
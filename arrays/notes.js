const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to Japan'
  }, 
  {
    title: 'Habbits to work on',
    body: 'Exercise. Eating better'
  }, 
  {
    title: 'Games to play',
    body: 'LoL, GoW, Red Dead II'
  }];

  const sortNotes = function (notes) {
    notes.sort(function (a, b) {
      // return -1 (a first), 1 (b first), 0 (no change)
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
      } else if (b.title.toLowerCase() < a.title.toLowerCase()){
        return 1
      } else {
        return 0
      }
    })
  }

const findNotes = function(notes, query){
  return notes.filter(function(note, index){
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch
  })
}

const findNote = function(notes, noteTitle){
  return notes.find(function(note){
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}


sortNotes(notes)
console.log(notes)
// console.log(findNotes(notes, 'ex'))


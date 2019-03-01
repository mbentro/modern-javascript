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

const filters = {
  searchText: ''
}

const renderNotes = function(notes, filters){
  const filteredNotes = notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''
  
  filteredNotes.forEach(function(note){
    const noteElem = document.createElement('p')
    noteElem.textContent = note.title
    document.querySelector('#notes').appendChild(noteElem)
  })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function(e){
  console.log('Created new note')
})


document.querySelector('#search-text').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
  console.log(e.target.value)
})
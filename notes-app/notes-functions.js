// get locally stored notes
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem('notes')
  if(notesJSON !== null){
    return JSON.parse(notesJSON)
  } else {
    return []
  }
}

// Save the notes to localStorage
const saveNotes = function(notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM for the note
const generateNoteDOM = function(note){
  const noteElem = document.createElement('div')
  const textElem = document.createElement('a')
  const button = document.createElement('button')
    
  // Set up the remove Note button
  button.textContent = 'x'
  noteElem.appendChild(button)
  button.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    renderNotes(notes, filters)
  })

  // Set up the title text
  if(note.title.length > 0){
    textElem.textContent = note.title
  } else {
    textElem.textContent = 'Unnamed Note'
  }

  textElem.setAttribute('href', `/edit.html#${note.id}`)

  noteElem.appendChild(textElem)
  return noteElem
}

// Render app notes
const renderNotes = function(notes, filters){
sortNotes(notes, filters.sortBy)

  const filteredNotes = notes.filter(function(note){
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  document.querySelector('#notes').innerHTML = ''
  
  filteredNotes.forEach(function(note){
    const noteElem = generateNoteDOM(note)    
    document.querySelector('#notes').appendChild(noteElem)
  })
}

const removeNote = function(id){
  const noteIndex = notes.findIndex(function(note){
    return note.id === id
  })

  if(noteIndex > -1){
    notes.splice(noteIndex, 1)
  }
}

const updateNote = function(){
  note.updatedAt = moment().valueOf()
  const timeBetween = moment(note.updatedAt).fromNow()
  editedElem.textContent = `Last Edited: ${timeBetween}`
}

const sortNotes = function(notes, sortBy) {
  if(sortBy === 'byEdited'){
    return notes.sort(function(a, b){
      if(a.updatedAt > b.updatedAt){
        return -1
      } else if (a.updateAt < b.updateAt){
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated'){
    return notes.sort(function(a, b){
      if (a.createdAt > b.createdAt){
        return -1
      } else if (a.createdAt < b. createdAt){
        return 1
      } else {
        return 0
      }
    })
  
   } else if (sortBy === 'alphabetical') {
    return notes.sort(function(a, b){
      if(a.title.toLowerCase() < b.title.toLowerCase()){
        return -1
      } else if (a.title.toLowerCase() > b.title.toLowerCase()){
        return 1
      } else {
        return 0
      }
    })
  } else {
    return notes
  }

}
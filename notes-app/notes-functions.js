// get locally stored notes
const getSavedNotes = () => {
  const notesJSON = localStorage.getItem('notes')
  try {
    return notesJSON ? JSON.parse(notesJSON) : []    
  } catch (e) {
    return []
  }

}

// Save the notes to localStorage
const saveNotes = (notes) => {
  localStorage.setItem('notes', JSON.stringify(notes))
}

// Generate the DOM for the note
const generateNoteDOM = (note) => {
  const noteElem = document.createElement('div')
  const textElem = document.createElement('a')
  const button = document.createElement('button')
    
  // Set up the remove Note button
  button.textContent = 'x'
  noteElem.appendChild(button)
  button.addEventListener('click', (e) => {
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
const renderNotes = (notes, filters) => {
sortNotes(notes, filters.sortBy)

  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  document.querySelector('#notes').innerHTML = ''
  
  filteredNotes.forEach((note) => {
    const noteElem = generateNoteDOM(note)    
    document.querySelector('#notes').appendChild(noteElem)
  })
}

const removeNote = (id) => {
  const noteIndex = notes.findIndex((note) => note.id === id)

  if(noteIndex > -1){
    notes.splice(noteIndex, 1)
  }
}

const updateNote = () => {
  note.updatedAt = moment().valueOf()
  const timeBetween = moment(note.updatedAt).fromNow()
  editedElem.textContent = `Last Edited: ${timeBetween}`
}

const sortNotes = (notes, sortBy) => {
  if(sortBy === 'byEdited'){
    return notes.sort((a, b) => {
      if(a.updatedAt > b.updatedAt){
        return -1
      } else if (a.updateAt < b.updateAt){
        return 1
      } else {
        return 0
      }
    })
  } else if (sortBy === 'byCreated'){
    return notes.sort((a, b) => {
      if (a.createdAt > b.createdAt){
        return -1
      } else if (a.createdAt < b. createdAt){
        return 1
      } else {
        return 0
      }
    })
  
   } else if (sortBy === 'alphabetical') {
    return notes.sort((a, b) => {
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
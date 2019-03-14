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
  const noteElem = document.createElement('a')
  const textElem = document.createElement('p')
  const statusElem = document.createElement('p')
  // const button = document.createElement('button')
    
  // Set up the remove Note button
  // button.textContent = 'x'
  // noteElem.appendChild(button)
  // button.addEventListener('click', (e) => {
  //   removeNote(note.id)
  //   saveNotes(notes)
  //   renderNotes(notes, filters)
  // })

  // Set up the title text
  if(note.title.length > 0){
    textElem.textContent = note.title
  } else {
    textElem.textContent = 'Unnamed Note'
  }  
  textElem.classList.add('list-item__title')
  noteElem.appendChild(textElem)

  noteElem.setAttribute('href', `/edit.html#${note.id}`)
  noteElem.classList.add('list-item')

  statusElem.classList.add('list-item__subtitle')
  statusElem.textContent = generateLastEdited(note.updateAt)
  noteElem.appendChild(statusElem)

  return noteElem
}

// Render app notes
const renderNotes = (notes, filters) => {
sortNotes(notes, filters.sortBy)
  const notesElem = document.querySelector('#notes')
  const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

  document.querySelector('#notes').innerHTML = ''
  
  if(filteredNotes.length > 0) {
    filteredNotes.forEach((note) => {
      const noteElem = generateNoteDOM(note)    
      notesElem.appendChild(noteElem)
    })
  } else {
    const emptyElem = document.createElement('p')
    emptyElem.textContent = 'No Notes Yet'
    emptyElem.classList.add('empty-message')
    notesElem.appendChild(emptyElem)
  }
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

const generateLastEdited = (timestamp) => {
  return `Last Edited ${moment(timestamp).fromNow()}`
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
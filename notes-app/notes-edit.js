const titleElem = document.querySelector('#note-title')
const bodyElem = document.querySelector('#note-body')
const removeElem = document.querySelector('#remove-note')
const editedElem = document.querySelector('#last-edited')

const noteId = location.hash.substring(1)

let notes = getSavedNotes()

let note = notes.find(function(note){
  return note.id === noteId
})

if ( note === undefined ){
  location.assign('/index.html')
}

titleElem.value = note.title
editedElem.textContent = moment(note.updateAt).fromNow()
bodyElem.value = note.body

titleElem.addEventListener('input', function(e){
  note.title = e.target.value
  updateNote()
  saveNotes(notes)
})

bodyElem.addEventListener('input', function(e){
  note.body = e.target.value
  updateNote()
  saveNotes(notes)
})

removeElem.addEventListener('click', function(e){
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', function(e){
  if(e.key === 'notes'){
    notes = JSON.parse(e.newValue)
    notes = getSavedNotes()

    note = notes.find(function(note){
      return note.id === noteId
    })
    
    if ( note === undefined ){
      location.assign('/index.html')
    }
    updateNote()
  }
})

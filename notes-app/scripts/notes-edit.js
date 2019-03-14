const titleElem = document.querySelector('#note-title')
const bodyElem = document.querySelector('#note-body')
const removeElem = document.querySelector('#remove-note')
const editedElem = document.querySelector('#last-edited')

const noteId = location.hash.substring(1)

let notes = getSavedNotes()

let note = notes.find((note) => note.id === noteId)

if (!note){
  location.assign('/index.html')
}

titleElem.value = note.title
editedElem.textContent = moment(note.updateAt).fromNow()
bodyElem.value = note.body

titleElem.addEventListener('input', (e) => {
  note.title = e.target.value
  updateNote()
  saveNotes(notes)
})

bodyElem.addEventListener('input', (e) => {
  note.body = e.target.value
  updateNote()
  saveNotes(notes)
})

removeElem.addEventListener('click', (e) => {
  removeNote(note.id)
  saveNotes(notes)
  location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
  if(e.key === 'notes'){
    notes = JSON.parse(e.newValue)
    notes = getSavedNotes()

    note = notes.find((note) => note.id === noteId )
    
    if (!note){
      location.assign('/index.html')
    }
    updateNote()
  }
})

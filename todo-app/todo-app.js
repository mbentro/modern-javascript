const todos = getSavedTodos()

const filters = {
  searchText: ''
}

renderTodos(todos, filters)

document.querySelector('#todo-search').addEventListener('input', (e) => {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', (e) => {
  e.preventDefault()
  if(e.target.elements.addTodo.value.length > 0) {
    addTodo(todos, e.target.elements.addTodo.value)
    saveTodos(todos)
    renderTodos(todos, filters)
  }
  e.target.elements.addTodo.value = ''
})


document.querySelector('#hide-completed').addEventListener('change', (e) => {
  if(e.target.checked){
    const hiddenTodos = hideCompleted(todos)
    renderTodos(hiddenTodos, filters)    
  } else {
    renderTodos(todos, filters)
  }
})
const todos = [
  {
    text: 'Learn JavaScript',
    completed: false
  },
  { 
    text: 'Setup Spring Boot',
    completed: true
  },
  {
    text: 'AUL-942',
    completed: false
  },
  {
    text: 'ATB Unleashed', 
    completed: false
  },
  { 
   text: 'Learn React/Redux',
   completed: true
  }];

  const filters = {
    searchText: ''
  }


const renderTodos = function(todos, filters){

  const filterTodos = todos.filter(function(todo){
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const remainingTodos = filterTodos.filter(function(todo){
    return !todo.completed
  })
  
  document.querySelector('#todos').innerHTML = ''

  const para = document.createElement('h3')
  para.textContent = `You have ${remainingTodos.length} todos left`
  document.querySelector('#todos').appendChild(para)

  filterTodos.forEach(function(todo){
    const todoElem = document.createElement('p')
    todoElem.textContent = todo.text
    document.querySelector('#todos').appendChild(todoElem)
  })  
}
renderTodos(todos, filters)


const addTodo = function(todos, text){
  todos.push({
    text: text,
    completed: false
  })
  renderTodos(todos, filters)
}

document.querySelector('#todo-search').addEventListener('input', function(e){
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function(e){
  e.preventDefault()
  addTodo(todos, e.target.elements.addTodo.value)
  e.target.elements.addTodo.value = ''
})

const hideCompleted = function(todos, completed = false){
 const hiddenTodos = todos.filter(function(todo){
    return todo.completed === completed
  })
  renderTodos(hiddenTodos, filters)
}

document.querySelector('#hide-completed').addEventListener('change', function(e){
  if(e.target.checked === true){
    hideCompleted(todos)
  } else {
    renderTodos(todos, filters)
  }
})

const getSavedTodos = () => {
  const todosJSON = localStorage.getItem('todos')  
  try {
    return todosJSON ? JSON.parse(todosJSON) : []
  } catch (e) {
    return []
  }
}

const saveTodos = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos))
}

const hideCompleted = (todos, completed = false) => {
  const hiddenTodos = todos.filter((todo) => todo.completed === completed)  
  return hiddenTodos
}

const renderTodos = (todos, filters) => {
  const todosElem = document.querySelector('#todos')
  const filterTodos = todos.filter((todo) => todo.text.toLowerCase().includes(filters.searchText.toLowerCase()))

  const remainingTodos = filterTodos.filter((todo) => !todo.completed)

  todosElem.innerHTML = ''

  const para = generateSummaryDOM(remainingTodos)
  todosElem.appendChild(para)

  if(filterTodos.length > 0) {
    filterTodos.forEach((todo) => {
      const todoElem = generateTodoDOM(todo)
      todosElem.appendChild(todoElem)
    })
  } else {
    const emptyElem = document.createElement('p')
    emptyElem.classList.add('empty-message')
    emptyElem.innerHTML = 'No to-dos to show'
    todosElem.appendChild(emptyElem)
  }
}

const generateTodoDOM = (todo) => {
  const rootElem = document.createElement('label')
  const containerElem = document.createElement('div')
  const checkElem = document.createElement('input')
  const todoElem = document.createElement('span')
  const delButton = document.createElement('button')

  checkElem.setAttribute('type', 'checkbox')
  checkElem.checked = todo.completed
  containerElem.appendChild(checkElem)

  checkElem.addEventListener('change', (e) => {
    toggleCompleted(todo.id, e.target.checked)
    saveTodos(todos)
    renderTodos(todos, filters)
  })
  
  todoElem.textContent = todo.text
  containerElem.appendChild(todoElem)
  
  // Setup container
  rootElem.classList.add('list-item')
  containerElem.classList.add('list-item__container')
  rootElem.appendChild(containerElem)

  delButton.textContent = 'Remove'  
  delButton.classList.add('button', 'button--text')
  rootElem.appendChild(delButton)  
  delButton.addEventListener('click', (e) => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return rootElem
}

const generateSummaryDOM = function(remainingTodos){

  const para = document.createElement('h3')
  para.classList.add('list-title')
  const text = remainingTodos.length === 1 ? 'todo' : 'todos'
  para.textContent = `You have ${remainingTodos.length} ${text} left`

  return para
}

const addTodo = function(todos, text){
  todos.push({
    id: uuidv4(),
    text,
    completed: false
  })

 return todos
}

const removeTodo = function(id){
  const todoIndex = todos.findIndex(function(todo){
    return todo.id === id
  })
  if(todoIndex > -1){
    todos.splice(todoIndex, 1)
  }
}

const toggleCompleted = function(id, checked) {
  const todoIndex = todos.findIndex(function(todo){
    return todo.id === id
  })
  if(todoIndex > -1){
      todos[todoIndex].completed = checked
  }
}
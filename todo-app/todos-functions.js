
const getSavedTodos = function(){
  const todosJSON = localStorage.getItem('todos')
  if(todosJSON !== null){
    return JSON.parse(todosJSON)
  } else {
    return []
  }
}

const saveTodos = function(todos){
  localStorage.setItem('todos', JSON.stringify(todos))
}

const hideCompleted = function(todos, completed = false){
  const hiddenTodos = todos.filter(function(todo){
     return todo.completed === completed
   })  
   return hiddenTodos
 }

 const renderTodos = function(todos, filters){
  const filterTodos = todos.filter(function(todo){
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  const remainingTodos = filterTodos.filter(function(todo){
    return !todo.completed
  })
  
  document.querySelector('#todos').innerHTML = ''

  const para = generateSummaryDOM(remainingTodos)
  document.querySelector('#todos').appendChild(para)

  filterTodos.forEach(function(todo){
    const todoElem = generateTodoDOM(todo)
    document.querySelector('#todos').appendChild(todoElem)
  })  
}

const generateTodoDOM = function(todo){
  const rootDiv = document.createElement('div')
  const checkElem = document.createElement('input')
  const todoElem = document.createElement('span')
  const delButton = document.createElement('button')

  checkElem.setAttribute('type', 'checkbox')
  rootDiv.appendChild(checkElem)

  checkElem.checked = todo.completed

  checkElem.addEventListener('change', function(e){
    toggleCompleted(todo.id, e.target.checked)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  todoElem.textContent = todo.text
  rootDiv.appendChild(todoElem)
  
  delButton.textContent = 'x'  
  rootDiv.appendChild(delButton)  
  delButton.addEventListener('click', function(e){
    removeTodo(todo.id)
    saveTodos(todos)
    renderTodos(todos, filters)
  })

  return rootDiv
}

const generateSummaryDOM = function(remainingTodos){

  const para = document.createElement('h3')
  para.textContent = `You have ${remainingTodos.length} todos left`
  return para
}

const addTodo = function(todos, text){
  todos.push({
    id: uuidv4(),
    text: text,
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
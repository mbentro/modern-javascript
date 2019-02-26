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
    completed: true
  },
  { 
   text: 'Lear React/Redux',
   completed: false
  }]

const deleteTodo = function(todoList, text){
  const index = todoList.findIndex(function(todo){
    return todo.text.toLowerCase() === text.toLowerCase()
  })
  if(index >= 0){
    todoList.splice(index, 1)
  }
}

const getThingsToDo = function(todoList){
  return todoList.filter(function(todo, index){
    return todo.completed === false
  })
}

const sortTodos = function(todoList){
  todoList.sort(function(a, b){
    if(a.completed === false && b.completed === true ){
      return -1
    } else if (a.completed === true && b.completed === false) {
      return 1
    } else {
      return 0
    }
  })
}
console.log(todos)
sortTodos(todos)
console.log(todos)


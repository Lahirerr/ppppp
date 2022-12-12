import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'
const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoUserInterface()

const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

// const todoManagement = require('../lib/todoManagement.js')
// const todoList = require('../UI/todoList.js')

// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoList()
// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

const addTodoHandler = () => {
  const todo = document.querySelector('input').value
  if(todo.length !== 0){
    const todoId = addTodo(todo)
    showTodoItem(todoId, todo)
    const newE = document.getElementById(todoId)
    const notDonebutton = newE.children[1]
    const reMovebutton = newE.children[2]
    notDonebutton.addEventListener('click', notDoneButtonHandler)
    reMovebutton.addEventListener('click', removeButtonHandler)
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
  }
}
const notDoneButtonHandler = (event) => {
    const notdonebut = event.target
    change(notdonebut)
    setItemToDone(notdonebut.parentElement.getAttribute('id'))
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
}

const change = (notdonebut) => {
  notdonebut.textContent = 'Done'
  notdonebut.style = 'color: white;background-color: green'
}

const removeButtonHandler = (event) => {
  const removebut = event.target
  removeTodoItem(removebut.parentElement.getAttribute('id'))
  removeTodo(Number(removebut.parentElement.getAttribute('id')))
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
}

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }

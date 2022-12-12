import {
    addTodoHandler,
    notDoneButtonHandler,
    removeButtonHandler,
  } from './eventHandler/eventController.js';
const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', addTodoHandler)


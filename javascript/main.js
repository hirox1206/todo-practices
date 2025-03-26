"use strict";

const addTodoHandler = () => {
  const todoValue = document.getElementById("inputTodo").value;
  const listItem = document.createElement("li");
  listItem.textContent = todoValue;

  const todoList = document.getElementById("todoList");
  todoList.appendChild(listItem);
};

const addTodoButton = document.getElementById("addTodoButton");
addTodoButton.addEventListener("click", addTodoHandler, false);

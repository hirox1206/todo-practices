"use strict";

let i = 0;

const addTodoHandler = () => {
  const inputTodo = document.getElementById("inputTodo");
  const listItem = document.createElement("li");
  const listItemValue = document.createElement("p");
  const removeButton = document.createElement("button");
  listItem.setAttribute("id", `listItem${i}`);
  removeButton.setAttribute("id", `removeTodoButton${i}`);

  listItemValue.textContent = inputTodo.value;
  inputTodo.value = "";
  removeButton.textContent = "削除";

  listItem.appendChild(listItemValue);
  listItem.appendChild(removeButton);

  const todoList = document.getElementById("todoList");
  todoList.appendChild(listItem);

  setRemoveTodoHandler(i);
  i++;
};

const removeTodoHandler = (i) => {
  let listItem = document.getElementById(`listItem${i}`);
  const todoList = document.getElementById("todoList");
  todoList.removeChild(listItem);
};

const setRemoveTodoHandler = (i) => {
  const removeButton = document.getElementById(`removeTodoButton${i}`);
  removeButton.addEventListener("click", () => removeTodoHandler(i), false);
};

const addTodoButton = document.getElementById("addTodoButton");
addTodoButton.addEventListener("click", addTodoHandler, false);

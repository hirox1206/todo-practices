"use strict";

const addTodoHandler = () => {
  const todoValue = document.getElementById("inputTodo").value;
  const listItem = document.createElement("li");
  const listItemValue = document.createElement("p");
  const removeButton = document.createElement("button");

  listItemValue.textContent = todoValue;
  removeButton.textContent = "削除";

  listItem.appendChild(listItemValue);
  listItem.appendChild(removeButton);

  const todoList = document.getElementById("todoList");
  todoList.appendChild(listItem);
};

const addTodoButton = document.getElementById("addTodoButton");
addTodoButton.addEventListener("click", addTodoHandler, false);

"use strict";

document.getElementById("addTodoButton").addEventListener("click", () => {
  const inputTodo = document.getElementById("inputTodo");
  const todoList = document.getElementById("todoList");

  if (!inputTodo.value.trim()) return;

  const listItem = document.createElement("li");
  const listItemValue = document.createElement("p");
  const removeButton = document.createElement("button");

  listItemValue.textContent = inputTodo.value;
  removeButton.textContent = "削除";

  listItem.appendChild(listItemValue);
  listItem.appendChild(removeButton);
  todoList.appendChild(listItem);

  inputTodo.value = "";

  removeButton.addEventListener("click", () => {
    todoList.removeChild(listItem);
  });
});

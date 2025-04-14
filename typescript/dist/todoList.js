import { Todo } from "./todo.js";
export class TodoList {
    static getInstance() {
        if (!TodoList.instance) {
            new TodoList();
        }
        return TodoList.instance;
    }
    constructor() {
        const addTodoButoon = document.querySelector(".todo-app__add-button");
        addTodoButoon === null || addTodoButoon === void 0 ? void 0 : addTodoButoon.addEventListener("click", this.addTodoEventHandler, false);
        const removeTodoButoon = document.querySelector(".todo-app__remove-button");
        removeTodoButoon === null || removeTodoButoon === void 0 ? void 0 : removeTodoButoon.addEventListener("click", this.removeTodoEventHandler.bind(this), false);
    }
    addTodoEventHandler() {
        const todoInput = document.querySelector(".todo-app__input");
        if (!todoInput)
            return;
        const todoContent = todoInput.value;
        if (!todoContent.trim())
            return;
        new Todo(todoContent);
        todoInput.value = "";
    }
    removeTodoEventHandler() {
        const checkedItems = this.checkedItems();
        const todoList = document.querySelector(".todo-app__list");
        checkedItems.forEach((item) => {
            todoList === null || todoList === void 0 ? void 0 : todoList.removeChild(item);
        });
    }
    checkedItems() {
        const checkedCheckBoxes = document.querySelectorAll(".todo-app__checkbox:checked");
        const checkedItems = Array.from(checkedCheckBoxes).map((checkbox) => checkbox.closest(".todo-app__item"));
        return checkedItems;
    }
}

export class Todo {
    constructor(content) {
        this.content = content;
        this.addTodo(content);
    }
    addTodo(content) {
        const todoList = document.querySelector(".todo-app__list");
        const todoItemDivElement = document.createElement("div");
        todoItemDivElement.setAttribute("class", "todo-app__item");
        const checkboxInputElement = document.createElement("input");
        checkboxInputElement.setAttribute("type", "checkbox");
        checkboxInputElement.setAttribute("class", "todo-app__checkbox");
        const todoContentLabelElement = document.createElement("label");
        todoContentLabelElement.setAttribute("class", "todo-app__label");
        todoContentLabelElement.textContent = content;
        todoItemDivElement === null || todoItemDivElement === void 0 ? void 0 : todoItemDivElement.appendChild(checkboxInputElement);
        todoItemDivElement === null || todoItemDivElement === void 0 ? void 0 : todoItemDivElement.appendChild(todoContentLabelElement);
        todoList === null || todoList === void 0 ? void 0 : todoList.appendChild(todoItemDivElement);
    }
}

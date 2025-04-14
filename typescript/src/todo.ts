export class Todo {
  constructor(private content: string) {
    this.addTodo(content);
  }

  private addTodo(content: string) {
    const todoList = document.querySelector<HTMLDivElement>(".todo-app__list");

    const todoItemDivElement = document.createElement("div");
    todoItemDivElement.setAttribute("class", "todo-app__item");

    const checkboxInputElement = document.createElement("input");
    checkboxInputElement.setAttribute("type", "checkbox");
    checkboxInputElement.setAttribute("class", "todo-app__checkbox");

    const todoContentLabelElement = document.createElement("label");
    todoContentLabelElement.setAttribute("class", "todo-app__label");
    todoContentLabelElement.textContent = content;

    todoItemDivElement?.appendChild(checkboxInputElement);
    todoItemDivElement?.appendChild(todoContentLabelElement);
    todoList?.appendChild(todoItemDivElement);
  }
}

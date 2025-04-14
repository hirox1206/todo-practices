class Todo {
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

class TodoList {
  private static instance: TodoList;

  static getInstance() {
    if (!TodoList.instance) {
      new TodoList();
    }
    return TodoList.instance;
  }

  private constructor() {
    const addTodoButoon = document.querySelector<HTMLButtonElement>(
      ".todo-app__add-button"
    );
    if (addTodoButoon) {
      addTodoButoon.addEventListener("click", this.addTodoEventHandler, false);
    }
  }

  private addTodoEventHandler() {
    const todoInput =
      document.querySelector<HTMLInputElement>(".todo-app__input");
    if (!todoInput) return;

    const todoContent = todoInput.value!;
    if (!todoContent.trim()) return;

    new Todo(todoContent);
  }
}

TodoList.getInstance();

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
    addTodoButoon?.addEventListener("click", this.addTodoEventHandler, false);

    const removeTodoButoon = document.querySelector<HTMLButtonElement>(
      ".todo-app__remove-button"
    );
    removeTodoButoon?.addEventListener(
      "click",
      this.removeTodoEventHandler.bind(this),
      false
    );
  }

  private addTodoEventHandler() {
    const todoInput =
      document.querySelector<HTMLInputElement>(".todo-app__input");
    if (!todoInput) return;

    const todoContent = todoInput.value!;
    if (!todoContent.trim()) return;

    new Todo(todoContent);
    todoInput.value = "";
  }

  private removeTodoEventHandler() {
    const checkedItems = this.checkedItems();
    const todoList = document.querySelector<HTMLDivElement>(".todo-app__list");
    checkedItems.forEach((item) => {
      todoList?.removeChild(item);
    });
  }

  private checkedItems(): HTMLDivElement[] {
    const checkedCheckBoxes = document.querySelectorAll(
      ".todo-app__checkbox:checked"
    );
    const checkedItems = Array.from(checkedCheckBoxes).map(
      (checkbox) => checkbox.closest<HTMLDivElement>(".todo-app__item")!
    );
    return checkedItems;
  }
}

TodoList.getInstance();

import { EditModal, Toast } from "./components.js";

export class Todo {
  #tasks;
  #toast;

  constructor(ul, toastDiv) {
    if (!ul || !ul instanceof HTMLElement) {
      throw new Error("Elemento UL inválido ou não encontrado!");
    }
    if (!toastDiv || !toastDiv instanceof HTMLElement) {
      throw new Error("Elemento inválido ou não encontrado!");
    }
    this.toastDiv = toastDiv;
    this.ul = ul;
    this.#getTasks();
    this.#toast = new Toast(this.toastDiv);
  }

  #getTasks() {
    this.#tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.readAllTasks();
  }

  #saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(this.#tasks));
    this.#getTasks();
  }

  createTask(task) {
    this.#tasks.push(task);
    this.#saveTasks();
    this.#toast.createToast(
      "Tarefa criada com sucesso!",
      this.#toast.StatusType.SUCCESS
    );
  }

  readAllTasks() {
    try {
      this.ul.innerHTML = "";
      this.#tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className =
          "flex justify-between items-center bg-white p-3 rounded shadow-md border";

        const taskText = document.createElement("span");
        taskText.textContent = task.name;
        taskText.className =
          "text-gray-800 font-medium flex-1 max-w-1/2 truncate";

        const buttonContainer = document.createElement("div");
        buttonContainer.className = "flex gap-2";

        const editButton = document.createElement("button");
        editButton.textContent = "✏️";
        editButton.className =
          "bg-yellow-500 opacity-50 text-white px-3 py-1 rounded hover:bg-yellow-600";
        editButton.dataset.action = "edit";
        editButton.dataset.id = task.id;
        editButton.addEventListener("click", () => {
          new EditModal(this.toastDiv, task.id).openModal(task.name, this.updateTask.bind(this))
        });

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "🗑️";
        deleteButton.className =
          "bg-red-500 opacity-50 text-white px-3 py-1 rounded hover:bg-red-600";
        deleteButton.dataset.action = "delete";
        deleteButton.dataset.id = task.id;
        deleteButton.addEventListener("click", () => {
          this.deleteTask(task.id);
        });

        buttonContainer.appendChild(editButton);
        buttonContainer.appendChild(deleteButton);

        li.appendChild(taskText);
        li.appendChild(buttonContainer);
        this.ul.appendChild(li);
      });
    } catch (err) {
      this.#toast.createToast("Error", this.#toast.StatusType.ERROR);
      throw new Error(err);
    }
  }

  updateTask(id, updatedTask) {
    const index = this.#tasks.findIndex((task) => task.id === id);
    if (index === -1) throw new Error("Task não encontrada!");
    this.#tasks[index] = { ...this.#tasks[index], name: updatedTask };
    this.#saveTasks();
  }

  deleteAllTasks() {
    localStorage.removeItem("tasks");
    this.#getTasks();
    this.#saveTasks();
    this.#toast.createToast(
      "Tarefas deletadas com sucesso!",
      this.#toast.StatusType.SUCCESS
    );
  }

  deleteTask(id) {
    const index = this.#tasks.findIndex((task) => task.id === id);
    if (index === -1) throw new Error("Task não encontrada!");
    this.#tasks.splice(index, 1);
    this.#saveTasks();
    this.#toast.createToast(
      "Tarefa deletada com sucesso!",
      this.#toast.StatusType.SUCCESS
    );
  }

  get tasks() {
    return [...this.#tasks];
  }

  set tasks(newTasks) {
    if (!Array.isArray(newTasks)) throw new Error("Tasks devem ser uma array!");
    this.#tasks = newTasks;
    this.#saveTasks();
  }
}

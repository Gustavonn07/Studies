import { generateUUID, Toast } from "./components.js";
import { Todo } from "./todo.js";

const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addButton");
const deleteAllBtn = document.getElementById("deleteAllButton");
const ul = document.getElementById("taskList");
const toastDiv = document.getElementById("toastDiv")

const toast = new Toast(toastDiv)
const todo = new Todo(ul, toastDiv);
todo.readAllTasks()

addBtn.addEventListener("click", (e) => {
  e.preventDefault()
  const taskName = input.value.trim()
  if (taskName.length === 0) {
    toast.createToast('Input deve conter um valor!', toast.StatusType.ERROR)
    return;
  }
  const now = new Date();
  const day = now.getDate(); 
  const month = now.getMonth() + 1; 
  const year = now.getFullYear();
  todo.createTask({
    name: taskName,
    id: generateUUID(),
    createdAt: `${day}/${month}/${year}`,
    updatedAt: `${day}/${month}/${year}`,
  });

  input.value = ''
});

deleteAllBtn.addEventListener('click', (e) => {
  e.preventDefault()
  todo.deleteAllTasks()
})
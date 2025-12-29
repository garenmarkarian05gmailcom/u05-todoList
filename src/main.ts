import "./styles/style.css";
import type { Todo } from "./types/todo";
import { loadTodos, saveTodos } from "./services/storage";
import { generateId } from "./utils/uuid";

// DOM Elements
const todoInput = document.getElementById("todo-input") as HTMLInputElement;
const addBtn = document.getElementById("add-btn") as HTMLButtonElement;
const listContainer = document.getElementById("todo-list") as HTMLUListElement;
const clearBtn = document.getElementById("clear-btn") as HTMLButtonElement;
const searchInput = document.getElementById("search-input") as HTMLInputElement;

let todos: Todo[] = loadTodos();

// --- Render todos ---
const renderTodos = (filter = "") => {
  listContainer.innerHTML = "";

  todos
    .filter(todo => todo.text.toLowerCase().includes(filter.toLowerCase()))
    .forEach(todo => {
      const li = document.createElement("li");
      li.className = "todo-item";

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;
        saveTodos(todos);
      });

      const span = document.createElement("span");
      span.textContent = todo.text;
      span.contentEditable = "true";
      span.addEventListener("blur", () => {
        todo.text = span.textContent || "";
        saveTodos(todos);
      });

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        todos = todos.filter(t => t.id !== todo.id);
        saveTodos(todos);
        renderTodos(searchInput.value);
      });

      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(deleteBtn);
      listContainer.appendChild(li);
    });
};

// --- Add todo ---
addBtn.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (!text) return;
  const newTodo: Todo = { id: generateId(), text, completed: false };
  todos.push(newTodo);
  saveTodos(todos);
  renderTodos();
  todoInput.value = "";
});

// --- Clear all ---
clearBtn.addEventListener("click", () => {
  todos = [];
  saveTodos(todos);
  renderTodos();
});

// --- Search/filter ---
searchInput.addEventListener("input", () => {
  renderTodos(searchInput.value);
});

// Initial render
renderTodos();

import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

export const addTodo = (text: string) => {
  const newTodo = { id: uuidv4(), text: text, checked: false };
  const todoList = [...getTodos(), newTodo];
  saveTodos(todoList);
};

export const deleteTodo = (id: string) => {
  const todoList = getTodos().filter((todo) => todo.id.localeCompare(id) !== 0);
  console.log("Deleting", todoList);
  saveTodos(todoList);
};

export const editTodo = (changedTodo: {
  id: string;
  text?: string;
  checked?: boolean;
}) => {
  try {
    const savedTodo = getTodos().find(
      (todo: Todo) => todo.id === changedTodo.id
    );

    if (!savedTodo) {
      throw new Error(`No such element: ${changedTodo.id}`);
    }

    const editedTodo: Todo = { ...savedTodo, ...changedTodo };
    const todoList = getTodos().map((todo) =>
      todo.id.localeCompare(changedTodo.id) === 0 ? editedTodo : todo
    );

    saveTodos(todoList);
  } catch (e) {
    console.log("Edit failed:", e);
  }
};

export const getTodos = (): Todo[] => {
  let savedTodos = JSON.parse(localStorage.getItem("todoList") || "[]");
  console.log("Get", savedTodos);
  return [...savedTodos];
};

const saveTodos = (todoList: Todo[]) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

import { v4 as uuidv4 } from "uuid";

export interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

export const newTodo = (text: string) => {
  const newTodo = { id: uuidv4(), text: text, checked: false };
  const todoList = [...getTodos(), newTodo];
  console.log("Add");
  saveTodos(todoList);
  return todoList;
};

export const deleteTodo = (id: string): Todo[] => {
  const todoList = getTodos().filter((todo) => todo.id.localeCompare(id) !== 0);
  console.log("Delete");
  saveTodos(todoList);
  return todoList;
};

export const updateTodo = (changedTodo: {
  id: string;
  text?: string;
  checked?: boolean;
}) => {
  let todoList = getTodos();

  try {
    const savedTodo = todoList.find((todo: Todo) => todo.id === changedTodo.id);

    if (!savedTodo) {
      throw new Error(`No such element: ${changedTodo.id}`);
    }

    const editedTodo: Todo = { ...savedTodo, ...changedTodo };
    todoList = todoList.map((todo) =>
      todo.id.localeCompare(changedTodo.id) === 0 ? editedTodo : todo
    );
    saveTodos(todoList);
  } catch (e) {
    console.log("Edit failed:", e);
  }

  console.log("Edit");
  return todoList;
};

export const getTodos = (): Todo[] => {
  let savedTodos = JSON.parse(localStorage.getItem("todoList") || "[]");
  console.log("Get", savedTodos);
  return [...savedTodos];
};

const saveTodos = (todoList: Todo[]) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
};

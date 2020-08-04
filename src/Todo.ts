export interface Todo {
  id: string;
  text: string;
  checked: boolean;
}

let id = 0;
const makeId = () => `${id++}`;

let theTodoList: Todo[] = [];

export const addTodo = (text: string) => {
  const newTodo = { id: makeId(), text: text, checked: false };
  theTodoList = [...theTodoList, newTodo];
  return [...theTodoList];
};

export const deleteTodo = (id: string) => {
  theTodoList = theTodoList.filter((todo) => todo.id.localeCompare(id));
  return [...theTodoList];
};

export const editTodo = (id: string, text?: string, checked?: boolean) => {
  try {
    const uneditedTodo = theTodoList.find((todo: Todo) => todo.id === id);

    if (!uneditedTodo) {
      throw new Error(`No such element: ${id} ${text}`);
    }

    const editedTodo: Todo = { ...uneditedTodo, text, checked };

    theTodoList = theTodoList.map((todo) =>
      todo.id === id ? editedTodo : todo
    );
  } catch (e) {
    console.log("Edit failed:", e);
  }
  return [...theTodoList];
};

export const getTodos = () => {
  return [...theTodoList];
};

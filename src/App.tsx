import * as React from "react";
import { Todo, deleteTodo, newTodo, updateTodo } from "./Todo";
import { AddTodoField, TodoList } from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const addTodo = React.useCallback(
    (todoText: string) => {
      const updatedTodos = newTodo(todoText);
      setTodos(updatedTodos);
    },
    [setTodos]
  );

  const removeTodo = React.useCallback(
    (id: string) => {
      const updatedTodos = deleteTodo(id);
      setTodos(updatedTodos);
    },
    [setTodos]
  );

  const toggleTodo = React.useCallback(
    (todo: { id: string; checked: boolean }) => {
      const updatedTodos = updateTodo({
        id: todo.id,
        checked: !todo.checked,
      });
      setTodos(updatedTodos);
    },
    []
  );

  const editTodo = () => undefined;

  return (
    <div className="App">
      <header>
        <h1>Todo Demo</h1>
      </header>
      <main>
        <AddTodoField addTodo={addTodo} />
        <TodoList
          todos={todos}
          onToggleTodo={toggleTodo}
          onEditTodo={editTodo}
          onRemoveTodo={removeTodo}
        />
      </main>
    </div>
  );
}

export default App;

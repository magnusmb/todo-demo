import * as React from "react";
import * as Todo from "./Todo";
import { AddTodoField, TodoList } from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState(Todo.getTodos());

  const addTodo = (todoText: string) => {
    Todo.addTodo(todoText);
    setTodos(Todo.getTodos());
  };

  const deleteTodo = (id: string) => {
    Todo.deleteTodo(id);
    setTodos(Todo.getTodos());
  };

  const toggleTodo = (todo: { id: string; checked: boolean }) => {
    Todo.editTodo({ id: todo.id, checked: !todo.checked });
    setTodos(Todo.getTodos());
  };

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
          onDeleteTodo={deleteTodo}
        />
      </main>
    </div>
  );
}

export default App;

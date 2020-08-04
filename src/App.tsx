import * as React from "react";
import * as Todo from "./Todo";
import { AddTodoField, TodoList } from "./TodoList";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState(Todo.getTodos());

  const addTodo = (todo: string) => {
    setTodos(Todo.addTodo(todo));
  };

  const deleteTodo = (id: string) => {
    setTodos(Todo.deleteTodo(id));
  };

  const checkTodo = (id: string) => {
    setTodos(Todo.checkTodo(id));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo Demo</h1>
      </header>
      <main>
        <AddTodoField addTodo={addTodo} />
        <TodoList todos={todos} checkTodo={checkTodo} deleteTodo={deleteTodo} />
      </main>
    </div>
  );
}

export default App;

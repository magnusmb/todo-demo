import * as React from "react";
import { AddTodoField, TodoList } from "./Todo";
import "./App.css";

function App() {
  const someTodos = ["En todo", "Annen todo", "Tredje todo"];
  const [todos, setTodos] = React.useState([...someTodos]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (theTodo: string) => {
    setTodos(todos.filter((aTodo) => aTodo.localeCompare(theTodo)));
  };

  return (
    <div className="App">
      <header>
        <h1>Todo Demo</h1>
      </header>
      <main>
        <AddTodoField addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </main>
    </div>
  );
}

export default App;

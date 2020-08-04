import React from "react";
import { Todo } from "./Todo";

interface TodoProps {
  todo: Todo;
  onDelete(todoId: string): void;
  onToggle(todo: Todo): void;
  onEditTodo(todo: Todo): void;
}

export const TodoItem: React.FC<TodoProps> = (props) => {
  const todo = props.todo;
  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={() => props.onToggle(todo)}
          checked={todo.checked}
          id={todo.id}
        />{" "}
        {todo.text}
      </label>
      <button onClick={() => props.onDelete(todo.id)}>x</button>
    </li>
  );
};

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo(todoId: string): void;
  onToggleTodo(todo: Todo): void;
  onEditTodo(todo: Todo): void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={props.onToggleTodo}
          onDelete={props.onDeleteTodo}
          onEditTodo={props.onEditTodo}
        />
      ))}
    </ul>
  );
};

export const AddTodoField: React.FC<{ addTodo(todo: string): void }> = (
  props
) => {
  const [todoInput, setTodoInput] = React.useState("");

  const handleChange = (value: string) => {
    setTodoInput(value);
  };

  const handleClick = (todo: string) => {
    props.addTodo(todo);
    setTodoInput("");
  };

  return (
    <div className="todo-field">
      <input
        placeholder="What needs to be done?"
        type="text"
        value={todoInput}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button
        disabled={todoInput.length === 0}
        onClick={() => handleClick(todoInput)}
      >
        +
      </button>
    </div>
  );
};

import React from "react";

interface TodoProps {
  text: string;
  deleteTodo(todo: string): void;
}

export const Todo: React.FC<TodoProps> = (props) => {
  return (
    <li>
      <label>
        <input type="checkbox" id="todo-1" /> {props.text}
      </label>
      <button onClick={() => props.deleteTodo(props.text)}>X</button>
    </li>
  );
};

interface TodoListProps {
  todos: string[];
  deleteTodo(todo: string): void;
}

export const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo, key) => (
        <Todo key={key} text={todo} deleteTodo={props.deleteTodo} />
      ))}
    </ul>
  );
};

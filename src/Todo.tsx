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

export const AddTodoField: React.FC<{ addTodo(todo: string): void }> = (
  props
) => {
  const [newTodo, setNewTodo] = React.useState("");

  const handleChange = (value: string) => {
    setNewTodo(value);
  };

  const handleClick = (todo: string) => {
    props.addTodo(todo);
    setNewTodo("");
  };

  return (
    <div className="todo-field">
      <input
        placeholder="What needs to be done?"
        type="text"
        value={newTodo}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button onClick={() => handleClick(newTodo)}>+</button>
    </div>
  );
};

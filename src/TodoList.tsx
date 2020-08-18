import React from "react";
import { Todo } from "./Todo";

interface TodoProps {
  todo: Todo;
  onRemove(todoId: string): void;
  onToggle(todo: Todo): void;
  onEditTodo(todo: Todo): void;
}

export const TodoItem: React.FC<TodoProps> = (props) => {
  const todo = props.todo;
  const [isChecked, setIsChecked] = React.useState(todo.checked);

  const handleCheck = (checked: boolean) => {
    props.onToggle({ id: todo.id, text: todo.text, checked: checked });
    setIsChecked(checked);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          onChange={(e) => handleCheck(e.target.checked)}
          checked={isChecked}
          id={todo.id}
        />{" "}
        {todo.text}
      </label>
      <button onClick={() => props.onRemove(todo.id)} className="delete">
        x
      </button>
    </li>
  );
};

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo(todoId: string): void;
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
          onRemove={props.onRemoveTodo}
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

import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);
 
  const Todo = ({ todo, index, completeTodo, removeTodo }) => {
    return (
      <div
       className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      >
        {todo.text}
  
        <div>
          <button onClick={() => completeTodo(index)}><i className="fas fa-check-circle"></i></button>
          <button onClick={() => removeTodo(index)}>
          <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>
    );
  }

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          placeholder="add new todo"
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
    );
  };

  return (
    <div id="container">
      <h2>Todo List</h2>
      <p>Using React Hooks</p>
       <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            removeTodo={removeTodo}
            completeTodo={completeTodo}
          />
        ))}

        <TodoForm addTodo={addTodo} />
      </div>
    </div>
    </div>
  );
}

export default App;

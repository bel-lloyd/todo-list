import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/Todoitem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
    "Be awesome",
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  return (
  <div className="app">
  <div className="todo-list">
  <h1>My todo list</h1>
  {todos.map((todo, index) => (
    <TodoItem todo={todo} key={index} />
  ))}
  <TodoForm addTodo={addTodo} />
  </div>
  </div>
  );
}

export default App;
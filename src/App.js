import React, {useState} from "react";
import TodoItem from "./components/Todoitem";

function App() {
  const [todos, settodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
    "Be awesome",
  ]);

  return (
  <div>
  <h1>My todo list</h1>
  {todos.map((todo, index) => (
    <TodoItem todo={todo} key={index} />
  ))}
  </div>
  );
}

export default App;
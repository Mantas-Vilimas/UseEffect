import logo from "./logo.svg";
import "./App.css";
import { useCallback, useState } from "react";
import Todos from "./components/Todos/Todos";

const getId = () => Math.random();
const generateTodos = (length) => {
  const arr = new Array(length).fill(null);
  return arr.map(() => {
    const nextId = getId();
    return { id: nextId, content: "Walk a dog" + nextId };
  });
};

const todos = generateTodos(500);

function App() {
  const [index, setIndex] = useState(0);
  const [todoIndex, setTodoIndex] = useState(0);

  const increaseIndex = () => {
    setIndex(index + 1);
  };

  const getNextTodo = () => {
    setTodoIndex(todoIndex + 1);
  };

  const getCurrentTodo = useCallback(() => {
    return todos[todoIndex];
  }, [todoIndex]);

  return (
    <div className="App">
      <p>{index}</p>
      <button onClick={increaseIndex}>Increase Index</button>
      <button onClick={getNextTodo}>Next Todo</button>
      <Todos getCurrentTodo={getCurrentTodo} />
    </div>
  );
}

export default App;

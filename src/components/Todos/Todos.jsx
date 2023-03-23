import { useEffect, useMemo, useState } from "react";

const Todos = ({ getCurrentTodo }) => {
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const cachedList = useMemo(() => {
    const cachedTodo = todos.map((todo) => {
      return <p key={todo.id}>{todo.content}</p>;
    });

    return cachedTodo;
  }, [todos]);

  useEffect(() => {
    setTodos([...todos, getCurrentTodo()]);
  }, [getCurrentTodo]);

  return <div>{cachedList}</div>;
};

export default Todos;

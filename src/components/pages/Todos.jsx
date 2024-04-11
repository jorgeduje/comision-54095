import { useEffect } from "react";
import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Todos = () => {
  const [todos, loading, error] = useFetch(
    [],
    "https://jsonplaceholder.typicode.com/todos"
  );
  return (
    <div>
      {todos.map((todo) => (
        <h1 key={todo.id}>{todo.title}</h1>
      ))}
    </div>
  );
};

export default Todos;

import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Users = () => {
  const [users, loading, error] = useFetch(
    [],
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div>
      {users.map((user) => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </div>
  );
};

export default Users;

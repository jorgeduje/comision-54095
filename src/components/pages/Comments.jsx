import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

const Comments = () => {
  const [commenst, loading, error] = useFetch(
    [],
    "https://jsonplaceholder.typicode.com/comments"
  );
  return <div>Comments</div>;
};

export default Comments;

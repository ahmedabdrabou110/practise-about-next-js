"use client";

import { useState, useEffect } from "react";

const Posts = () => {
  const [todos, setTodos] = useState({});
  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        next: {
          revalidate: 180,
        },
      }
    );
    const data = await response.json();
    setTodos(data);
  }, []);
  return <div>{todos?.title}</div>;
};

export default Posts;

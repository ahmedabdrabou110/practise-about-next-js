import React from "react";

const page = async ({ params }) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.id}`
  );
  const post = await result.json();
  return (
    <div>
      <h1>{post?.title}</h1>
      <h5>{post?.body}</h5>
    </div>
  );
};

export default page;

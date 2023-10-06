import Link from "next/link";
import React from "react";

const PageDetails = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <Link href={`/posts/${post?.id}`}>
          <div
            style={{
              width: "70%",
              borderRadius: "10px",
              padding: "10px",
              background: "white",
              textAlign: "center",
              color: "#000",
              marginTop: "10px",
              marginBottom: "10px",
            }}
            id={post?.id}
          >
            <h1>{post?.title}</h1>
            <h5>{post?.body}</h5>
          </div>
        </Link>
      ))}
    </>
  );
};

export default PageDetails;

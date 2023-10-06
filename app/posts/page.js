import React, { Suspense } from "react";
// import Posts from "../components/posts/Posts";
import Link from "next/link";
import PageDetails from "../components/posts/PageDetails";

const page = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 180,
    },
  });
  const posts = await response.json();
  const loadingJsx = (
    <div>
      <h1>Loading ...</h1>
    </div>
  );
  return (
    <div
      style={{
        marginLeft: "15%",
        marginRight: "auto",
      }}
    >
      Page Details
      <Suspense fallback={loadingJsx}>
        <PageDetails posts={posts} />
      </Suspense>
    </div>
  );
};

export default page;

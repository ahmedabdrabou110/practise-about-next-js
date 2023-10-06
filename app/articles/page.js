import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      Articles Page
      <Link href="/posts">
        <button>Posts page</button>
      </Link>
    </div>
  );
};

export default page;

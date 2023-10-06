import React from "react";

const page = (props) => {
  console.log(props);
  const { title } = props.params;
  return (
    <div>
      <h2>Show Articles</h2>
      <h1>{title}</h1>
    </div>
  );
};

export default page;

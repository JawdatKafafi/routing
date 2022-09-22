import React from "react";
import queryString from "query-string";

function Posts(props) {
  const queryParams = queryString.parse(props.location.search);
  const { year, month } = queryParams;
  return (
    <div>
      <h1>Posts</h1>
      Year: {year} , Month:{month}
    </div>
  );
}

export default Posts;

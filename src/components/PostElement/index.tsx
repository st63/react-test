import React from "react";

const PostElement = (props: any) => {
  return (
    <div>
      <div>{props.postDetail.id}</div>
      <div>{props.postDetail.title}</div>
      <div>{props.postDetail.body}</div>
    </div>
  );
};

export default PostElement;

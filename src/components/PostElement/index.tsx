import React from "react";

const PostElement = (props: any) => {
  return (
    <div>
      <div>{props.postDetail.id}</div>
      <div>{props.postDetail.title}</div>
      <div>{props.postDetail.date}</div>
      <div>{props.postDetail.autor}</div>
      <div>{props.postDetail.name}</div>
      <div>{props.postDetail.text}</div>
    </div>
  );
};

export default PostElement;

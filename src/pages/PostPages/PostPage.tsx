import React from "react";
import { connect } from "react-redux";

const Post = (props: any) => {
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

let mapStateToProps = (state: any) => {
  return {
    postDetail: state.posts.postDetail,
  };
};

const PostContainer = connect(mapStateToProps)(Post);

export default PostContainer;

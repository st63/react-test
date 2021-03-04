import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostElement from "../../../components/PostElement";

const Post = (props: any) => {
  return (
    <div>
      <PostElement postDetail={props.postDetail} />
    </div>
  );
};

let mapStateToProps = (state: any) => {
  return {
    postDetail: state.posts.postDetail,
  };
};

const withRouterWrap = withRouter(Post);

const PostContainer = connect(mapStateToProps)(
  withRouterWrap
);

export default PostContainer;

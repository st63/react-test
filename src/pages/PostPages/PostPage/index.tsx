import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostElement from "../../../components/PostElement";
import { getPostAction } from "../../../redux/reducers";

const Post = (props: any) => {
  let userId = props.match.params.postId;
  props.getPostAction(userId);

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

const PostContainer = connect(mapStateToProps, { getPostAction })(
  withRouterWrap
);

export default PostContainer;

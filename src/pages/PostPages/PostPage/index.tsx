import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostElement from "../../../components/PostElement";
import { getPost } from "../../../redux/posts/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const Post = (props: any) => {
  const postIdFromUrl = props.match.params.postId;
  const postIdFromState = props.postDetail.id;

  React.useEffect(() => {
    props.getPost(postIdFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postIdFromUrl]);

  return postIdFromUrl == postIdFromState ? (
    <PostElement postDetail={props.postDetail} />
  ) : (
    <CircularProgress />
  );
};

let mapStateToProps = (state: any) => {
  return {
    postDetail: state.posts.postDetail,
  };
};

const withRouterWrap = withRouter(Post);

const PostContainer = connect(mapStateToProps, { getPost })(withRouterWrap);

export default PostContainer;

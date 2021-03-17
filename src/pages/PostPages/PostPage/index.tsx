import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostElement from "../../../components/PostElement";
import { getPostAction } from "../../../redux/posts/actions";
import CircularProgress from "@material-ui/core/CircularProgress";

const Post = ({ post, getPost, match }: any) => {
  const postIdFromUrl = match.params.postId;

  React.useEffect(() => {
    getPost(postIdFromUrl);
  }, [postIdFromUrl, getPost]);

  if (!post || post.id != postIdFromUrl) {
    return <CircularProgress />
  }

  return <PostElement postDetail={post} />
};

let mapStateToProps = (state: any) => {
  return {
    post: state.posts.post,
  };
};

const withRouterWrap = withRouter(Post);

const PostContainer = connect(mapStateToProps, { getPost: getPostAction })(withRouterWrap);

export default PostContainer;

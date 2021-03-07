import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostElement from "../../../components/PostElement";
import { getPost } from "../../../redux/actions";

const Post = (props: any) => {
  let postId = props.match.params.postId;

  React.useEffect(() => {
    props.getPost(postId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

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

const PostContainer = connect(mapStateToProps, { getPost })(withRouterWrap);

export default PostContainer;

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PostElement from "../../../components/PostElement";
import { getPost } from "../../../redux/actions";

const Post = (props: any) => {
	debugger;
	let postIdFromUrl = props.match.params.postId;
	let postIdFromState = props.postDetail.id;

  React.useEffect(() => {
    props.getPost(postIdFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postIdFromUrl]);

  return postIdFromUrl == postIdFromState ? (
    <div>
      <PostElement postDetail={props.postDetail} />
    </div>
  ) : (
    <div>Loading</div>
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

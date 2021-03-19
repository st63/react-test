import { postDetail, postList, addPost } from "../../api";

export const getPostAction = (postId: any) => {
  return (dispatch: any) => {
    postDetail(postId).then((response: any) => {
      dispatch({
        type: "GET_POST",
        post: response,
      });
    });
  };
};

export const getListPostAction = () => {
  return (dispatch: any, getState: any) => {
    const { auth } = getState();
    postList(auth.username).then((response: any) => {
      dispatch({
        type: "GET_LIST_POSTS",
        posts: response,
      });
    });
  };
};

export const createPostAction = (formObj: any) => {
  return (dispatch: any, getState: any) => {
    const { auth } = getState();
    if (!auth.username) {
      throw new Error("auth failed");
    }
    addPost({
      ...formObj,
      created_at: Date.now(),
      username: auth.username,
    }).then((response: any) => {
      dispatch(addPostActionOld(response));
    });
  };
};

export const addPostActionOld = (post: any) => ({
  type: "ADD_POST",
  post,
});

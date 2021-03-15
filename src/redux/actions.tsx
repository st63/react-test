import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const getPost = (postId: any) => {
  return (dispatch: any) => {
    axios.get(`http://localhost:3200/posts/${postId}`).then((response: any) => {
      dispatch(getPostAction(response.data));
    });
  };
};

export const getListPost = () => {
  return (dispatch: any) => {
    axios.get(`http://localhost:3200/posts`).then((response: any) => {
      dispatch(getListPostAction(response.data));
    });
  };
};

export const addPost = (formObj: any, login: any) => {
  return (dispatch: any) => {
    axios("http://localhost:3200/posts", {
      method: "POST",
      data: {
        title: formObj.title,
        body: formObj.body,
        userId: uuidv4(),
        date: Date.now(),
        login: login,
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response: any) => {
      console.log(response.data);
      dispatch(addPostAction(response.data));
    });
  };
};

export const authorize = (formObj: any) => {
  return (dispatch: any) => {
    axios("http://localhost:3200/users", {
      method: "POST",
      data: {
        email: formObj.email,
        password: formObj.password,
        login: formObj.login,
        userId: uuidv4(),
      },
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then((response: any) => {
      console.log(response.data);
      dispatch(authorizeAction(response.data));
    });
  };
};

export const getPostAction = (post: any) => ({
  type: "GET_POST",
  post,
});

export const getListPostAction = (posts: any) => ({
  type: "GET_LIST_POSTS",
  posts,
});

export const addPostAction = (post: any) => ({
  type: "ADD_POST",
  post,
});

export const authorizeAction = (authorizeData: any) => ({
  type: "AUTHORIZE",
  authorizeData,
});

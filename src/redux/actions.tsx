import axios from "axios";

export const getPost = (postId: any) => {
  return (dispatch: any) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response: any) => {
        dispatch(getPostAction(response.data));
      });
  };
};

export const getListPost = () => {
  return (dispatch: any) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((response: any) => {
        dispatch(getListPostAction(response.data));
      });
  };
};

export const addPost = (formObj: any) => {
	return (dispatch: any) => {
		axios("https://jsonplaceholder.typicode.com/posts", {
			method: "POST",
			data: {
			  title: formObj.title,
			  body: formObj.body,
			  userId: 1,
			},
			headers: {
			  "Content-type": "application/json; charset=UTF-8",
			},
		 }).then((response: any) => {
		  dispatch(addPostAction(response.data));
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
})

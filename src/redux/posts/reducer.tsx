const GET_POST = "GET_POST";
const GET_LIST_POSTS = "GET_LIST_POSTS";
const ADD_POST = "ADD_POST";

const initialState = {
  items: [],
  post: {},
};

const postsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        post: action.post,
      };
    case GET_LIST_POSTS:
      return {
        ...state,
        items: action.posts,
      };
    case ADD_POST:
      return {
        ...state,
        post: action.post,
      };

    default:
      return state;
  }
};

export default postsReducer;

const GET_POST = "GET_POST";
const GET_LIST_POSTS = "GET_LIST_POSTS";
const ADD_POST = "ADD_POST";
const AUTHORIZE = "AUTHORIZE";

let initialState = {
  posts: [
    {
      id: 1,
      title: "Заголовок",
      date: 1614771433162,
      autor: "Stas",
      name: "Первый пост",
    },
    {
      id: 2,
      title: "Заголовок",
      date: 1614775378326,
      autor: "Andrey",
      name: "Второй пост",
    },
    {
      id: 3,
      title: "Заголовок",
      date: 1614775413091,
      autor: "Ivan",
      name: "Третий пост",
    },
  ],
  users: [
    {
      email: "",
      password: "",
      login: "",
    },
  ],
  postDetail: {
    id: 3,
    title: "Заголовок",
    date: 1614775413091,
    autor: "Ivan",
    name: "Третий пост",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  currentUser: {
    email: "",
    password: "",
    login: "",
    userId: "",
  },
};

const postsReducer = (state = initialState, action: any) => {
  let stateCopy;
  switch (action.type) {
    case GET_POST:
      stateCopy = {
        ...state,
        postDetail: action.post,
      };
      return stateCopy;
    case GET_LIST_POSTS:
      stateCopy = {
        ...state,
        posts: action.posts,
      };
      return stateCopy;
    case ADD_POST:
      stateCopy = {
        ...state,
        postDetail: action.post,
      };
      return stateCopy;
    case AUTHORIZE:
      stateCopy = {
        ...state,
        users: action.authorizeData,
        currentUser: action.authorizeData,
      };
      return stateCopy;
    default:
      return state;
  }
};

export default postsReducer;

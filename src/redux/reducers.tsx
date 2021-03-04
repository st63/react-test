const GET_POST = "GET_POST";
const GET_LIST_POSTS = "GET_LIST_POSTS";

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
  postDetail: {
    id: 3,
    title: "Заголовок",
    date: 1614775413091,
    autor: "Ivan",
    name: "Третий пост",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
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

    default:
      return state;
  }
};

export default postsReducer;

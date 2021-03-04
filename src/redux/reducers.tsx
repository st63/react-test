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
  return state;
};

export default postsReducer;

import React from "react";
import { NavLink } from "react-router-dom";

let posts = [
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
];

const MainPage = (props: any) => {
  let post = posts.map((p) => (
    <li key={p.id}>
      <NavLink to={`/post/${p.id}`}>
        {p.id}
        {p.title}
      </NavLink>
    </li>
  ));
  return (
    <>
      <ul>{post}</ul>
      <NavLink to="/add-post">
        <div>Добавить запись</div>
        <div>{props.store.getState}</div>
      </NavLink>
    </>
  );
};

export default MainPage;

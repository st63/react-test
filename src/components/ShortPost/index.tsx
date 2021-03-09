import React from "react";
import { NavLink } from "react-router-dom";
import s from "./index.module.css";

const ShortPost = (props: any) => {
  return (
    <li className={s.shortPost}>
      <NavLink to={`/post/${props.id}`} className={s.link}>
        <span className={s.id}>{props.id}</span>
        <span className={s.title}>{props.title}</span>
      </NavLink>
    </li>
  );
};

export default ShortPost;

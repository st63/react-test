import React from "react";
import { NavLink } from "react-router-dom";

const ShortPost = (props: any) => {
  return (
    <li>
      <NavLink to={`/post/${props.id}`}>
        {props.id}
        {props.title}
      </NavLink>
    </li>
  );
};

export default ShortPost;

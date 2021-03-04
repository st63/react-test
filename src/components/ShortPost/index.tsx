import React from "react";
import { NavLink } from "react-router-dom";

const ShortPost = (props: any) => {
  return (
    <li>
      <NavLink onClick={() => props.getPost(props.id)} to={`/post/${props.id}`}>
        {props.id}
        {props.title}
      </NavLink>
    </li>
  );
};

export default ShortPost;

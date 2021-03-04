import React from "react";
import { NavLink } from "react-router-dom";
import { getPost } from '../../redux/actions';

const ShortPost = (props: any) => {
  return (
    <li>
      <NavLink onClick={() => getPost(props.id)} to={`/post/${props.id}`}>
        {props.id}
        {props.title}
      </NavLink>
    </li>
  );
};

export default ShortPost;

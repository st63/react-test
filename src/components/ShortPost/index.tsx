import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const ShortPost = (props: any) => {
  return (
    <NavLink to={`/post/${props.id}`}>
      <ListItem button>
        {props.id}
        {props.title}
      </ListItem>
    </NavLink>
  );
};

export default ShortPost;

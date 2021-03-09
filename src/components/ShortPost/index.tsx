import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";

const ShortPost = (props: any) => {
  return (
    <Link to={`/post/${props.id}`} component={NavLink}>
      <ListItem button>
        {props.id} {props.title}
      </ListItem>
    </Link>
  );
};

export default ShortPost;

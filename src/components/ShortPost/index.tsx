import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const ShortPost = (props: any) => {
  return (
    <ListItem>
      <Link to={`/post/${props.id}`} component={NavLink}>
        {props.id} {props.title}
        <Typography component="p">Автор: {props.userId}</Typography>
      </Link>
    </ListItem>
  );
};

export default ShortPost;

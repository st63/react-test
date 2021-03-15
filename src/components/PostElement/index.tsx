import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { StyledPaper } from "../../components/StyledPaper";

const PostElement = (props: any) => {
  return (
    <StyledPaper elevation={3}>
      {props.postDetail.id} {props.postDetail.title}
      <Divider />
      {props.postDetail.body}
      <Typography component="p">Автор: {props.postDetail.login}</Typography>
      <Typography component="p">Дата: {props.postDetail.date}</Typography>
    </StyledPaper>
  );
};

export default PostElement;

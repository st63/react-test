import React from "react";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import { StyledPaper } from "../../pages/MainPage";

const PostElement = (props: any) => {
  return (
    <StyledPaper elevation={3}>
      {props.postDetail.id} {props.postDetail.title}
      <Divider />
      {props.postDetail.body}
      <Typography component="p">Автор: {props.postDetail.userId}</Typography>
    </StyledPaper>
  );
};

export default PostElement;

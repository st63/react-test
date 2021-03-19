import React from "react";
import Typography from "@material-ui/core/Typography";
import { StyledPaper } from "../../components/StyledPaper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 500px;
`;

const PostElement = (props: any) => {
  return (
    <StyledCard>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          № {props.postDetail.id}
        </Typography>
        <Typography variant="h5" component="h4">
          Title: {props.postDetail.title}
        </Typography>
        <div dangerouslySetInnerHTML={{ __html: props.postDetail.body }}></div>
        <Typography color="textSecondary">
          Created: {props.postDetail.created_at}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default PostElement;

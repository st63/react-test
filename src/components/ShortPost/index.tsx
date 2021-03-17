import React from "react";
import { NavLink } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import styled from 'styled-components'

const StyledCard = styled(Card)`
  width: 500px;
`

const ShortPost = ({ id, title, autor, created_at }: any) => {
  return (
    <ListItem key={id}>
      <StyledCard>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            № {id}
          </Typography>
          <Typography variant="h5" component="h4">
            Title: {title}
          </Typography>
          <Typography color="textSecondary">
            Created: {created_at}
          </Typography>
        </CardContent>
        <CardActions>
          <Button to={`/post/${id}`} component={NavLink}>Читать</Button>
        </CardActions>
      </StyledCard>
    </ListItem>
  );
};

export default ShortPost;

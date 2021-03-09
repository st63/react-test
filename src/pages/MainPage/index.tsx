import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ShortPost from "../../components/ShortPost";
import { getListPost } from "../../redux/actions";
import { Button } from "@material-ui/core";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

export const StyledPaper = styled(Paper)`
  padding: 2em;
`;

const MainPage = (props: any) => {
  let post = props.posts.map((p: any) => (
    <ShortPost key={p.id} id={p.id} title={p.title} userId={p.userId} />
  ));

  React.useEffect(() => {
    props.getListPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledPaper elevation={3}>
      <Typography variant="h4" gutterBottom>
        Список постов
      </Typography>
      <Link to="/add-post" component={NavLink}>
        <Button size="small" variant="outlined" color="primary">
          Добавить запись
        </Button>
      </Link>
      <List>{post}</List>
    </StyledPaper>
  );
};

let mapStateToProps = (state: any) => {
  return {
    posts: state.posts.posts,
  };
};

const MainPageContainer = connect(mapStateToProps, { getListPost })(MainPage);

export default MainPageContainer;

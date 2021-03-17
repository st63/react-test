import React from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { getListPostAction } from "../../redux/posts/actions";
import ShortPost from "../../components/ShortPost";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { FormHeader, FormContainer, FormBody } from "../../components/Form";

const StyledLink = ({ to, ...props }: any) => (
  <Button color="primary" component={Link} to={to} {...props}>
    {props.children}
  </Button>
)

const MainPage = ({ username, getListPost, history, posts }: any) => {
  React.useEffect(() => {
    if (username) {
      getListPost(username);
    }
  }, [getListPost, username]);

  if (!username) {
    history.push('/login')
  }

  return (
    <FormContainer>
      <FormHeader>
        Список постов от {username}
      </FormHeader>
      <FormBody>
        <ButtonGroup>
          <StyledLink to="/logout" color="secondary">
            Выйти
          </StyledLink>
          <StyledLink to="/add-post">
            Добавить запись
          </StyledLink>
        </ButtonGroup>
        <List>{posts.map(ShortPost)}</List>
      </FormBody>
    </FormContainer>
  );
};

let mapStateToProps = (state: any) => {
  return {
    posts: state.posts.items,
    username: state.auth.username,
  };
};

const MainPageContainer = compose<any>(connect(mapStateToProps, { getListPost: getListPostAction }), withRouter)(MainPage);

export default MainPageContainer;

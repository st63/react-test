import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ShortPost from "../../components/ShortPost";
import { getListPost } from "../../redux/actions";
import { Button } from "@material-ui/core";
import List from '@material-ui/core/List';

const MainPage = (props: any) => {
  let post = props.posts.map((p: any) => (
    <ShortPost key={p.id} id={p.id} title={p.title} />
  ));

  React.useEffect(() => {
    props.getListPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavLink to="/add-post">
        <Button size="small" variant="outlined" color="primary">
          Добавить запись
        </Button>
      </NavLink>
      <List>{post}</List>
    </div>
  );
};

let mapStateToProps = (state: any) => {
  return {
    posts: state.posts.posts,
  };
};

const MainPageContainer = connect(mapStateToProps, { getListPost })(MainPage);

export default MainPageContainer;

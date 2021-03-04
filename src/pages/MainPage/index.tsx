import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ShortPost from './ShortPost';

const MainPage = (props: any) => {
  let post = props.posts.map((p: any) => (
    <ShortPost key={p.id} id={p.id} title={p.title} />
  ));
  return (
    <>
      <ul>{post}</ul>
      <NavLink to="/add-post">
        <div>Добавить запись</div>
      </NavLink>
    </>
  );
};

let mapStateToProps = (state: any) => {
  return {
    posts: state.posts.posts,
  };
};

const MainPageContainer = connect(mapStateToProps)(MainPage);

export default MainPageContainer;

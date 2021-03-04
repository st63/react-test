import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import ShortPost from "../../components/ShortPost";
import { getListPost, getPost } from "../../redux/actions";

const MainPage = (props: any) => {
  let post = props.posts.map((p: any) => (
    <ShortPost key={p.id} id={p.id} title={p.title} getPost={props.getPost} />
  ));

  
  React.useEffect(() => {
	  props.getListPost();
// eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

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

const MainPageContainer = connect(mapStateToProps, { getListPost, getPost })(MainPage);

export default MainPageContainer;

import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const MainPage = (props: any) => {
  let post = props.posts.posts.map((p: any) => (
    <li key={p.id}>
      <NavLink to={`/post/${p.id}`}>
        {p.id}
        {p.title}
      </NavLink>
    </li>
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
		posts: state.posts,
	}
}

const MainPageContainer = connect(mapStateToProps)(MainPage)

export default MainPageContainer;

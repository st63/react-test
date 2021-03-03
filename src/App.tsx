import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import AddPost from "./pages/posts/AddPost";
import Post from "./pages/posts/Post";
import {store} from "./redux/redux-store";

function App() {
  return (
	  <BrowserRouter>
      <Route path="/" render={() => <MainPage store={store} />} />
      <Route path="/post" component={Post} />
      <Route path="/add-post" component={AddPost} />
    </BrowserRouter>
  );
}

export default App;

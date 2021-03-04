import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPageContainer from "./pages/MainPage";
import AddPost from "./pages/PostPages/AddPostPage";
import PostContainer from "./pages/PostPages/PostPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={MainPageContainer} />
        <Route path="/post" component={PostContainer} />
        <Route path="/add-post" component={AddPost} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

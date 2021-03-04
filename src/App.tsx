import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPageContainer from "./pages/MainPage";
import AddPost from "./pages/PostPages/AddPostPage";
import PostContainer from "./pages/PostPages/PostPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/post/:postId" component={PostContainer} />
          <Route path="/add-post" component={AddPost} />
          <Route path="/" component={MainPageContainer} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

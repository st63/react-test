import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPageContainer from "./pages/MainPage";
import AddPostContainer from "./pages/PostPages/AddPostPage";
import PostContainer from "./pages/PostPages/PostPage";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Container maxWidth="sm">
          <Switch>
            <Route path="/post/:postId" component={PostContainer} />
            <Route path="/add-post" component={AddPostContainer} />
            <Route path="/" component={MainPageContainer} />
          </Switch>
        </Container>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

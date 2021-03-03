import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPageContainer from "./pages/MainPage/MainPage";
import AddPost from "./pages/posts/AddPost";
import Post from "./pages/posts/Post";
import { store } from "./redux/redux-store";
import { Provider } from "react-redux";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Route path="/" component={MainPageContainer} />
        <Route path="/post" component={Post} />
        <Route path="/add-post" component={AddPost} />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

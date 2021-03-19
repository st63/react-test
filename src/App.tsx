import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPageContainer from "./pages/MainPage";
import AddPostContainer from "./pages/PostPages/AddPostPage";
import PostContainer from "./pages/PostPages/PostPage";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import Paper from "@material-ui/core/Paper";
import styled, { createGlobalStyle } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import LogoutPage from "./pages/LogoutPage";
import { PersistGate } from "redux-persist/integration/react";

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
`;

const Container = styled(Paper)`
  padding: 30px;
  min-width: 400px;
`;

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter forceRefresh={false}>
          <CssBaseline />
          <GlobalStyle />
          <AppContainer>
            <Container elevation={0}>
              <Switch>
                <Route path="/post/:postId" component={PostContainer} />
                <Route path="/add-post" component={AddPostContainer} />
                <Route path="/registration" component={RegistrationPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/logout" component={LogoutPage} />
                <Route path="/" component={MainPageContainer} />
              </Switch>
            </Container>
          </AppContainer>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Route path='/mainpage' component={MainPage} />
    </BrowserRouter>
  );
}

export default App;

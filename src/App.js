import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "GlobalStyles";
import { AppWrap } from "App.styles";
import Sidebar from "components/layouts/Sidebar";
import Router from "components/layouts/Router";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <AppWrap>
        <Sidebar />
        <Router />
      </AppWrap>
    </BrowserRouter>
  );
};

export default App;

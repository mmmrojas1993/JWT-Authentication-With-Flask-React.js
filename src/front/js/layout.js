import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Login } from "./pages/Login";
import { Home } from "./pages/home";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/demo">
            <Demo />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/single/:theid">
            <Single />
          </Route>
          <Route>
            <h1>Not found! c:</h1>
          </Route>
        </Switch>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};
export default injectContext(Layout);

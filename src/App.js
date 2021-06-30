import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import PageNotFound from "./components/PageNotFound";
// import Corousel from "./components/Corousel";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {/* <Corousel /> */}
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Cart" component={Cart} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/SignUp" component={SignUp} />
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;

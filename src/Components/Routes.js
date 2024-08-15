import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Features from "../Pages/Features";

import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/service">
        <Service />
      </Route>
      <Route exact path="/features">
        <Features />
      </Route>
    </Switch>
  );
};
export default Routes;

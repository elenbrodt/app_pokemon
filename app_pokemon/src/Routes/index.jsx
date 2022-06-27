import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Pokemons from "../pages/Pokemons";

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/pokemon/:name" component={Pokemons} />
  </Switch>
);

export default Routes;

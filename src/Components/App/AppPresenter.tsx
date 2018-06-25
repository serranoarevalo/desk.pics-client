import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Header from "../../Components/Header";
import About from "../../Routes/About";
import Add from "../../Routes/Add";
import Home from "../../Routes/Home";
import View from "../../Routes/View";

const AppPresenter = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route exact={true} path={"/"} component={Home} />
      <Route path={"/add"} component={Add} />
      <Route path={"/about"} component={About} />
      <Route path={"/view/:id"} component={View} />
      <Redirect from={"*"} to={"/"} />
    </Switch>
  </React.Fragment>
);

export default AppPresenter;

import React from "react";
import { Route } from "react-router-dom";
import Home from "../../Routes/Home";

const AppPresenter = () => (
  <React.Fragment>
    <Route exact={true} path={"/"} component={Home} />
  </React.Fragment>
);

export default AppPresenter;

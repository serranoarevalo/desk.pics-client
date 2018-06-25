import React from "react";
import { Route } from "react-router-dom";
import Home from "../../Routes/Home";
import SubmitPlace from "../../Routes/SubmitPlace";

const AppPresenter = () => (
  <React.Fragment>
    <Route exact={true} path={"/"} component={Home} />
    <Route path={"/add"} component={SubmitPlace} />
  </React.Fragment>
);

export default AppPresenter;

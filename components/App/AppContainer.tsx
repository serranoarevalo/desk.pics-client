import React from "react";
import { HashRouter as Router } from "react-router-dom";
import AppPresenter from "./AppPresenter";

class AppContainer extends React.Component {
  public render() {
    return (
      <Router>
        <AppPresenter />
      </Router>
    );
  }
}

export default AppContainer;

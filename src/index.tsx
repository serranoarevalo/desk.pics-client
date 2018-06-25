import React from "react";
import { ApolloProvider } from "react-apollo";
import ReactDOM from "react-dom";
import client from "./apollo";
import App from "./Components/App";
import "./globalStyles";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root") as HTMLElement
);

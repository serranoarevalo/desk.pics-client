import React from "react";
import App, { Container } from "next/app";
import Header from "../components/header";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";

class MyApp extends App<any> {
  static async getInitialProps({ Component, ctx }): Promise<any> {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return pageProps;
  }
  render() {
    const { Component, apollo, pageProps } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

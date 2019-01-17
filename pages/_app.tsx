import React from "react";
import Head from "next/head";
import App, { Container } from "next/app";
import Header from "../components/header";
import ReactGA from "react-ga";
import withApollo from "../lib/withApollo";
import { ApolloProvider } from "react-apollo";

class Layout extends React.Component {
  componentDidUpdate() {
    let theWindow = window as any;

    if (!theWindow.GA_INITIALIZED) {
      ReactGA.initialize("UA-100494511-8");
      theWindow.GA_INITIALIZED = true;
    }

    ReactGA.pageview(window.location.pathname + window.location.search);
  }
  render() {
    const { children } = this.props;
    return (
      <main>
        <Head>
          <title>Deskpics | Share where you work from</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#f8f5f2" />
          <link rel="stylesheet" href="/static/reset.css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="shortcut icon" href="/static/manifes.json" />
          <meta
            name="og:title"
            content="Deskpics | Share where you work from"
          />
          <meta name="og:image" content="/static/ogimage.png" />
          <meta
            name="og:description"
            content="Share where you work from and see other people's desks!"
          />
        </Head>
        <Header />
        {children}
      </main>
    );
  }
}

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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Container>
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);

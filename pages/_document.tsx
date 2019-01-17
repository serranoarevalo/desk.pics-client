import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document<any> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="theme-color" content="#f8f5f2" />
          <link rel="stylesheet" href="/static/reset.css" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="shortcut icon" href="/static/manifest.json" />
          <meta
            name="og:title"
            content="Deskpics | Share where you work from"
          />
          <meta name="og:image" content="/static/ogimage.png" />
          <meta
            name="og:description"
            content="Share where you work from and see other people's desks!"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

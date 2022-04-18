import React from "react";
import Head from "next/head";
import App from "next/app";

export default class ACRedditApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>Reddit Client Ready!</title>
        </Head>
        <Component {...pageProps} />
      </React.Fragment>
    );
  }
}

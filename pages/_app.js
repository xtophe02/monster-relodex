import React from "react";
import App from "next/app";
import Head from "next/head";
import { Container, Header } from "semantic-ui-react";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Monster-Relodex</title>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
          />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
            key="viewport"
          />
        </Head>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.2, width=device-width"
            key="viewport"
          />
        </Head>
        <Container>
          <Header as="h1" textAlign='center'>Monster Relodex</Header>
          <Component {...pageProps} />
        </Container>
      </div>
    );
  }
}

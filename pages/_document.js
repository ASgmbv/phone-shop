import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
// import GAScript from "analytics/ga-script"
import { ColorModeScript } from "@chakra-ui/core";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <ColorModeScript />
          <Main />
          <NextScript />
          {/* <GAScript /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

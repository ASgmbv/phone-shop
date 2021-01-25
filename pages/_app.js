/* eslint-disable react/prop-types */
// import '../styles/globals.css'

import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AnimateSharedLayout } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout type="crossfade">
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AnimateSharedLayout>
  );
}

export default MyApp;

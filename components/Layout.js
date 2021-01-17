/* eslint-disable react/prop-types */
import React from "react";
import { Container } from "@chakra-ui/react";
import Header from "./Header";

const Layout = ({ children, maxW = "1440px" }) => {
  return (
    <>
      <Header />
      <Container mt="4.5rem" maxW={maxW}>
        {children}
      </Container>
    </>
  );
};

export default Layout;

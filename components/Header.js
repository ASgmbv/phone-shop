import { Box, Container, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Header = (props) => {
  return (
    <Box
      as="header"
      width="100%"
      position="sticky"
      zIndex="10"
      bg="white"
      top="0"
      boxShadow="0 30px 30px rgba(0,0,0,.02), 0 0 8px rgba(0,0,0,.03), 0 1px 0 rgba(0,0,0,.05)"
      border="0 solid #d2d6dc"
      {...props}
    >
      <Container maxW="4xl">
        <Flex py="5" justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Link fontSize="xl" fontWeight="bold">
              SJ
            </Link>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Link fontWeight="500">Blog</Link>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

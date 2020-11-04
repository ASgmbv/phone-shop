import React from "react";
import { Box, Container, Text } from "@chakra-ui/core";
import Link from "next/link";

const Header = (props) => {
  return (
    <Box
      as="header"
      pos="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      width="full"
      borderBottom="1px solid"
      borderBottomColor="gray.100"
      bg="white"
      {...props}
    >
      <Container
        maxW="xl"
        height="4.5rem"
        mx="auto"
        d="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Link href="/">
          <a>
            <img src="/vercel.svg" width="100px" height="100px" />
          </a>
        </Link>
        <Link href="/blog">
          <a>
            <Text as="span" fontWeight="500" fontSize="lg">
              Blog
            </Text>
          </a>
        </Link>
      </Container>
    </Box>
  );
};

export default Header;

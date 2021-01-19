import { Icon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  Img,
  Link,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";

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
      <Flex bg="gray.500" color="white">
        <Container maxW="4xl" py="1">
          <Flex justifyContent="space-between" alignItems="center">
            <Flex as="nav" alignItems="center" flexDirection={["row"]}>
              <PhoneIcon boxSize={[3, null, 4]} mr={[1, null, 2]} />
              <Icon as={FaWhatsapp} boxSize={[3, null, 4]} mr={[1, null, 2]} />
              <Icon as={FaTelegram} boxSize={[3, null, 4]} mr={[1, null, 2]} />
              <Link href="tel:+905525164080" isExternal fontSize="xs">
                +90 552 516 4080
              </Link>
              <Link href="tel:+905372754195" isExternal fontSize="xs" ml="2">
                +90 537 275 4195
              </Link>
            </Flex>
            <Link
              isExternal
              href="https://mobile.donanimhaber.com/profil/2549127"
            >
              <Img src="/dhw.png" height={[3, null, 4]} />
            </Link>
          </Flex>
        </Container>
      </Flex>
      <Container maxW="4xl">
        <Flex py="2" justifyContent="space-between" alignItems="center">
          <NextLink href="/" passHref>
            <Link fontSize="xl" fontWeight="bold">
              HG iletişim
            </Link>
          </NextLink>
          <NextLink href="/blog" passHref>
            <Link fontWeight="500" fontSize="sm" letterSpacing="wider">
              BLOG
            </Link>
          </NextLink>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;

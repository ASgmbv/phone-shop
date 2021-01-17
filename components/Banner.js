/* eslint-disable react/prop-types */
import { Box, Container, Flex, Heading, Text, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Banner = ({ mainPage = {} }) => {
  // console.log({ mainPage });

  return (
    <Container maxW="7xl" bg="white" my={[4, null, 8]}>
      <Flex
        gap="4"
        py={["50px", null, null, null, "100px"]}
        flexDirection={["column-reverse", null, null, null, "row"]}
      >
        <Box
          flex={["none", null, null, null, 1]}
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundImage={`url(${mainPage.bannerImage})`}
          height={["200px", "250px", "300px", "350px", "400px"]}
        ></Box>
        <Flex
          flexDir="column"
          alignItems="center"
          textAlign="center"
          justifyContent="center"
          px={[0, null, null, null, 10]}
          mb={[10, null, null, null, 0]}
        >
          <Heading size="2xl" fontWeight="600" maxW="500px" mb="6">
            {mainPage.bannerTitle}
          </Heading>
          <Text maxW="500px" lineHeight="tall" mb="6" fontSize={["lg"]}>
            {mainPage.bannerDescription}
          </Text>
          <NextLink href={mainPage.bannerLink || ""} passHref>
            <Link maxW="500px" color="facebook.400" fontSize="xl">
              devam et...
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Banner;

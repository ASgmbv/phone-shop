/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Button,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const Banner = ({ mainPage = {} }) => {
  // console.log({ mainPage });

  return (
    <Container maxW="7xl" bg="white" my={[4, null, 8]}>
      <Flex
        gap="4"
        py={["30px", null, null, null, "80px"]}
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
          <Heading
            fontSize={["3xl", null, "5xl"]}
            color="gray.700"
            maxW="520px"
            mb={4}
          >
            {mainPage.bannerTitle}
          </Heading>

          <Text
            maxW="500px"
            lineHeight="tall"
            mb={4}
            fontSize={["md", null, "lg"]}
            color="gray.500"
          >
            {mainPage.bannerDescription}
          </Text>

          <Flex alignItems="center">
            <NextLink href={mainPage.bannerLink || ""} passHref>
              <Button mx="2" colorScheme="blue" variant="outline">
                detaylar
              </Button>
            </NextLink>

            <NextLink href={"/banner"} passHref>
              <Button colorScheme="blue" mx="2">
                Fiyat liste
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Banner;

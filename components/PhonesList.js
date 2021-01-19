/* eslint-disable react/prop-types */
import { Grid, Container, Text, Img, Flex, Divider } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";

const PhonesList = ({ phones }) => {
  return (
    <Container maxW="7xl" bg="white" mb="100px">
      <Flex my={["30px", null, "50px"]} alignItems="center">
        <Divider />
        <Text
          mx="4"
          whiteSpace="nowrap"
          fontSize={["lg", null, "2xl"]}
          color="gray.600"
        >
          STAR PRODUCTS
        </Text>
        <Divider />
      </Flex>
      <Grid
        templateColumns={["repeat(2, 1fr)", null, null, null, "repeat(4, 1fr)"]}
        gap="1"
      >
        {phones.map(({ name, price, image, slug }, index) => {
          return (
            <NextLink key={name} href={`/phones/${slug}`} passHref>
              <a>
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  p="2"
                  border="1px solid"
                  borderColor="gray.200"
                  bg="gray.50"
                  _hover={{
                    bg: "gray.50",
                  }}
                >
                  <Text fontSize={["md", null, "xl"]}>{name}</Text>
                  <Text
                    as="span"
                    fontSize={["sm", null, "md"]}
                    mb="3"
                    color="gray.600"
                  >
                    {price}
                  </Text>

                  <Img
                    src={image}
                    alt={name}
                    height={["100px", null, "200px"]}
                    objectFit="contain"
                    mb="2"
                  />
                </Flex>
              </a>
            </NextLink>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PhonesList;

/* eslint-disable react/prop-types */
import { Grid, Container, Text, Img, Flex, Divider } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import MotionBox from "./MotionBox";

const PhonesList = ({ phones }) => {
  return (
    <Container maxW="7xl" bg="white" mb="100px">
      <Text>
        Ankara/Kızılay'dan elden teslim diğer illere havale sonrası kargo. 0537
        275 41 95, 0552 516 40 80
      </Text>
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
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          null,
          "repeat(4, 1fr)",
        ]}
        gap="3"
      >
        {phones.map(({ name, price, image, slug }, index) => {
          return (
            <NextLink key={name} href={`/phones/${slug}`} passHref>
              <a>
                <Flex
                  flexDirection="column"
                  justifyContent="space-between"
                  p="2"
                  h="full"
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
                    height={["150px", null, "200px"]}
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

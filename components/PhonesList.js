/* eslint-disable react/prop-types */
import {
  Grid,
  Container,
  Text,
  Img,
  Flex,
  Heading,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const PhonesList = ({ phones }) => {
  return (
    <Container maxW="7xl" bg="white">
      <Grid
        templateColumns={["repeat(2, 1fr)", null, null, null, "repeat(4, 1fr)"]}
        py={["50px"]}
        mb="50px"
        gap="4"
      >
        {phones.map(({ name, price, image, slug }) => {
          return (
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              p="4"
              key={name}
            >
              <Img
                src={image}
                alt={name}
                width={["100%", null, "70%"]}
                height={["250px", null, "250px"]}
                objectFit="contain"
                mb="2"
              />
              <Heading size="md" mb="2">
                {name}
              </Heading>
              <Text as="span" fontWeight="600" mb="2">
                {price}
              </Text>
              <NextLink href={`/phones/${slug}`} passHref>
                <Link color="blue.500">
                  detaylar <ChevronRightIcon />{" "}
                </Link>
              </NextLink>
            </Flex>
          );
        })}
      </Grid>
    </Container>
  );
};

export default PhonesList;

/* eslint-disable react/prop-types */
import {
  Flex,
  Img,
  Container,
  Text,
  Heading,
  Button,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import { queryPhones, queryPhoneByUid } from "../../utils/prismicQueries";
import { RichText } from "prismic-reactjs";
import NextLink from "next/link";

export async function getStaticPaths() {
  const phones = await queryPhones();
  const paths = phones.map((phone) => ({
    params: { phone: phone.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const phone = await queryPhoneByUid({
    phoneUid: params.phone,
  });

  return {
    props: {
      phone,
    },
    revalidate: 1,
  };
}

const PhonePage = ({ phone = {} }) => {
  const { name, description, image, price } = phone;

  return (
    <>
      <Header />
      <Container maxW="7xl" bg="white" my={[4, null, 8]}>
        <Flex
          py={["50px"]}
          flexDirection={["column", null, null, null, "row"]}
          alignItems={["center", null, null, null, "flex-start"]}
          overflow="hidden"
        >
          <Img
            src={image}
            alt={name}
            width={["100%", null, null, null, "40%"]}
            objectFit="contain"
            height={["200px", null, "500px"]}
            mx={[0, null, null, null, 10]}
            mb={[10, null, null, null, 10]}
          />
          <Flex alignSelf="flex-start" p="1" flex="1" flexDirection="column">
            <Heading fontSize={["2xl", null, "4xl"]} mb="2">
              {name}
            </Heading>
            <Text mb="5" fontSize="lg" fontWeight="bold" color="orange.400">
              {price}
            </Text>
            {/* <Box
              mb="5"
              sx={{
                p: {
                  mb: 2,
                  lineHeight: "taller",
                  fontSize: "lg",
                },
                h1: {
                  fontWeight: 700,
                  fontSize: "3xl",
                  lineHeight: [1.33, null, 1.2],
                  mb: 3,
                },
                h2: {
                  fontWeight: 700,
                  fontSize: "2xl",
                  lineHeight: [1.33, null, 1.2],
                  mb: 3,
                },
                h3: {
                  fontWeight: 700,
                  fontSize: "xl",
                  lineHeight: [1.33, null, 1.2],
                  mb: 3,
                },
              }}
            > */}
            <Box className="blog-content">{RichText.render(description)}</Box>
            {/* </Box> */}
            <NextLink
              href={`https://api.whatsapp.com/send?phone=905525164080&text=${name} telefonu sipariş vermek istiyorum.`}
              passHref
            >
              <Button as="a" alignSelf="flex-start" colorScheme="blue">
                Sipariş Ver
              </Button>
            </NextLink>
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default PhonePage;

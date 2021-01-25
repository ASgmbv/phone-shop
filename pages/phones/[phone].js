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
import MotionBox from "../../components/MotionBox";
import { AnimatePresence } from "framer-motion";

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
  const { name, description, image, price, slug } = phone;

  return (
    <>
      <Header />
      <AnimatePresence>
        <Container maxW="7xl" bg="white" my={[4, null, 8]}>
          <Flex
            py={["50px"]}
            flexDirection={["column", null, null, null, "row"]}
            alignItems={["center", null, null, null, "flex-start"]}
            overflow="hidden"
          >
            <MotionBox layoutId={slug}>
              <Img
                src={image}
                alt={name}
                width={["100%", null, null, null, "40%"]}
                objectFit="contain"
                height={["200px", null, "500px"]}
                mx={[0, null, null, null, 10]}
                mb={[10, null, null, null, 10]}
              />
            </MotionBox>
            <Flex alignSelf="flex-start" p="1" flex="1" flexDirection="column">
              <Heading fontSize={["2xl", null, "4xl"]} mb="2">
                {name}
              </Heading>
              <Text mb="5" fontSize="lg" fontWeight="bold" color="orange.400">
                {price}
              </Text>
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
      </AnimatePresence>
    </>
  );
};

export default PhonePage;

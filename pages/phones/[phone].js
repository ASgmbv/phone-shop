/* eslint-disable react/prop-types */
import {
  Img,
  Container,
  Text,
  Heading,
  Button,
  Box,
  Grid,
} from "@chakra-ui/react";
import React from "react";
import Header from "@/components/Header";
import { queryPhones, queryPhoneByUid } from "../../utils/prismicQueries";
import { RichText } from "prismic-reactjs";
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
          <Grid
            py="50px"
            overflow="hidden"
            templateColumns={[
              "repeat(1, 1fr)",
              null,
              null,
              null,
              "repeat(2, 1fr)",
            ]}
          >
            <MotionBox layoutId={slug} p="10">
              <Img
                src={image}
                alt={name}
                objectFit="contain"
                height={["200px", null, "500px"]}
                mx="auto"
              />
            </MotionBox>
            <Box>
              <Heading fontSize={["2xl", null, "4xl"]} mb="2">
                {name}
              </Heading>
              <Text mb="5" fontSize="lg" fontWeight="bold" color="orange.400">
                {price}
              </Text>
              <Box className="blog-content">{RichText.render(description)}</Box>
              <Button
                mt="6"
                as="a"
                alignSelf="flex-start"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="blue"
                href={`https://api.whatsapp.com/send?phone=905525164080&text=${name} telefonunun güncel fiyat ve stok durumunu öğrenmek istiyorum`}
              >
                güncel fiyat ve stok durumu
              </Button>
            </Box>
          </Grid>
        </Container>
      </AnimatePresence>
    </>
  );
};

export default PhonePage;

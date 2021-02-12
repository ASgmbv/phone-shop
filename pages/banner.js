import { Container, Text, Img } from "@chakra-ui/react";
import Header from "@/components/Header";
import { queryBannerPage } from "../utils/prismicQueries";

export async function getStaticProps() {
  const { image, description } = await queryBannerPage();

  return {
    props: {
      image,
      description,
    },
    revalidate: 1,
  };
}

const Banner = ({ image, description }) => {
  return (
    <>
      <Header />
      <Container maxW="4xl" mt="50px">
        <Img src={image} alt={description} width="100%" objectFit="contain" />
        <Text my="4">{description}</Text>
      </Container>
    </>
  );
};

export default Banner;

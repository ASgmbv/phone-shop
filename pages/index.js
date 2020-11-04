/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Heading, Container, Divider, Box } from "@chakra-ui/core";
import PhonesList from "../components/PhonesList";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import Hero from "../components/Hero";
import BlogPosts from "../components/BlogPosts";
import Slider from "../components/Slider";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Details from "../components/Details";

export default function Home({ phones, main }) {
  // const title = RichText.asText(main.title);
  // const subTitle = RichText.asText(main.subtitle);

  return (
    <>
      {/* <Hero title={title} subtitle={subTitle} hero={main.hero.url} /> */}
      <Header />
      <Slider mt="4.5rem" photos={main.slider_images} />
      <Details featuresTitle={main.features_title} features={main.features} />
      <PhonesList phones={phones} />
      <Box height="100px" />
    </>
  );
}

export async function getStaticProps() {
  const phones = await Client().query(
    Prismic.Predicates.at("document.type", "phone")
  );

  const main = await Client().getSingle("main");

  return {
    props: {
      phones: phones ? phones.results : [],
      main: main.data,
    },
    revalidate: 1,
  };
}

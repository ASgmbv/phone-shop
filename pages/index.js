import { Heading, Container, Divider, Box } from "@chakra-ui/core";
import PhonesList from "../components/PhonesList";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import Hero from "../components/Hero";

export default function Home({ phones, main }) {
  const title = RichText.asText(main.title);
  const subTitle = RichText.asText(main.subtitle);

  return (
    <Box>
      <Hero title={title} subtitle={subTitle} hero={main.hero.url} />
      <PhonesList phones={phones} />
      <Box height="100px" />
    </Box>
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

/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PhonesList from "../components/PhonesList";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { queryPhones, queryMainPage } from "../utils/prismicQueries";
import Head from "next/head";

export async function getStaticProps() {
  const mainPage = await queryMainPage();
  const phones = await queryPhones();

  return {
    props: {
      mainPage,
      phones,
    },
    revalidate: 1,
  };
}

export default function Home({ phones, mainPage }) {
  return (
    <>
      <Head>
        <title>guleryuzhasan</title>
      </Head>
      <Header />
      <Banner mainPage={mainPage} />
      <PhonesList phones={phones} />
    </>
  );
}

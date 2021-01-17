/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import PhonesList from "../components/PhonesList";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { queryPhones, queryMainPage } from "../utils/prismicQueries";

export async function getStaticProps() {
  const phones = await queryPhones();

  const mainPage = await queryMainPage();

  return {
    props: {
      phones,
      mainPage,
    },
    revalidate: 1,
  };
}

export default function Home({ phones, mainPage }) {
  return (
    <>
      <Header />
      <Banner mainPage={mainPage} />
      <PhonesList phones={phones} />
    </>
  );
}

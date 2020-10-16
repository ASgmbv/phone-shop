import {
  Heading,
  Container,
  Divider,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/core";
import PhoneItem from "../components/PhoneItem";
import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";

export default function Home({ phones }) {
  return (
    <Box bg="#F3F3F3">
      <Container bg="white">
        <Heading as="h1">Phones</Heading>
        <Divider mt="20px" />
        {/* <pre>{JSON.stringify(phones, null, 2)}</pre> */}
        <Stack
          divider={<StackDivider style={{ marginBottom: 0, marginTop: 0 }} />}
        >
          {phones.map(({ data, id }) => {
            const temp = {
              name: RichText.asText(data.name),
              externalUrl: data.externallink.url,
              price: data.price,
              image: data.image.url,
              memory: data.memory.map((item) =>
                RichText.asText(item.memoryitem)
              ),
              cpu: RichText.asText(data.cpu),
              screen: RichText.asText(data.screen),
              camera: data.camera.map((item) =>
                RichText.asText(item.cameraitem)
              ),
              frontalCamera: RichText.asText(data.frontalCamera),
              slots: data.slots.map((item) => RichText.asText(item.slot)),
              battery: RichText.asText(data.frontalCamera),
              width: data.width,
              height: data.height,
              weight: data.weight,
              colors: data.colors.map((item) => item.color),
              isHot: data.ishot,
            };

            return <PhoneItem key={id} {...temp} />;
          })}
        </Stack>
      </Container>
    </Box>
  );
}

export async function getStaticProps() {
  const phones = await Client().query(
    Prismic.Predicates.at("document.type", "phone")
  );

  return {
    props: {
      phones: phones ? phones.results : [],
    },
    revalidate: 1,
  };
}

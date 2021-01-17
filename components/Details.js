/* eslint-disable react/prop-types */
import React from "react";
import {
  Container,
  Heading,
  Wrap,
  WrapItem,
  SlideFade,
} from "@chakra-ui/react";
import Feature from "./Feature";
import { RichText } from "prismic-reactjs";

const Details = ({ featuresTitle, features }) => {
  const title = RichText.asText(featuresTitle);

  return (
    <Container maxW="xl" py="100px">
      <Heading
        size={["xl"]}
        textAlign="center"
        letterSpacing="2"
        maxW="600px"
        letterSpacing="wide"
        mx="auto"
      >
        {title}
      </Heading>
      <SlideFade in={true}>
        <Wrap
          mt="24"
          width="100%"
          spacing="10"
          sx={{
            li: {
              flex: 1,
            },
          }}
        >
          {features.map((feature, index) => {
            return (
              <WrapItem key={"feature-" + index} justifyContent="center">
                <Feature
                  image={feature.feature_image.url}
                  title={RichText.asText(feature.feature_title)}
                  description={RichText.asText(feature.feature_description)}
                />
              </WrapItem>
            );
          })}
        </Wrap>
      </SlideFade>
    </Container>
  );
};

export default Details;

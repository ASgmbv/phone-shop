/* eslint-disable react/prop-types */
import React from "react";
import { Container, Heading, Wrap, WrapItem } from "@chakra-ui/core";
import Feature from "./Feature";
import { RichText } from "prismic-reactjs";

const Details = ({ featuresTitle, features }) => {
  const title = RichText.asText(featuresTitle);

  return (
    <Container maxW="xl" py="100px">
      <Heading
        fontSize={["xl", null, "2xl"]}
        textAlign="center"
        fontWeight="500"
      >
        {title}
      </Heading>
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
            <WrapItem key={"feature-" + index}>
              <Feature
                image={feature.feature_image.url}
                title={RichText.asText(feature.feature_title)}
                description={RichText.asText(feature.feature_description)}
              />
            </WrapItem>
          );
        })}
      </Wrap>
    </Container>
  );
};

export default Details;

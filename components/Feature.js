/* eslint-disable react/prop-types */
import React from "react";
import Image from "next/image";
import { Heading, Text, Stack } from "@chakra-ui/react";

const Feature = ({ image, title, description, ...props }) => {
  return (
    <Stack alignItems="center" minW="300px" spacing="2" {...props}>
      <Image src={image} width="150" height="90" priority={true} />
      <Heading size="md" textAlign="center" fontWeight="500">
        {title}
      </Heading>
      <Text textAlign="center" color="gray.500">
        {description}
      </Text>
    </Stack>
  );
};

export default Feature;

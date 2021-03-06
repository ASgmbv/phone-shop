import { Heading, Container, Flex, Image } from "@chakra-ui/react";

const Hero = ({ title, subtitle, hero }) => {
  return (
    <Container
      maxW="lg"
      bg="green.200"
      my="50px"
      height="300px"
      backgroundImage={`url(${hero})`}
      backgroundPosition="center"
      backgroundSize="cover"
      position="relative"
    >
      <Flex
        width="100%"
        height="100%"
        position="absolute"
        top="0"
        left="0"
        bg="rgba(0, 0, 0, 0.4)"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h1" size="2xl" textAlign="center" color="white" maxW="xl">
          {title}
        </Heading>
        <Heading
          as="h2"
          size="lg"
          textAlign="center"
          my="4"
          color="white"
          maxW="xl"
        >
          {subtitle}
        </Heading>
        <Image
          src="https://media.giphy.com/media/2gMn4lAKEzVQ58oOlS/giphy.gif"
          boxSize="60px"
        />
      </Flex>
    </Container>
  );
};

export default Hero;

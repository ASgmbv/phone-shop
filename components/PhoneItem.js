import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Stack,
  Link,
  Wrap,
  Collapse,
  Button,
  Divider,
} from "@chakra-ui/core";
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, ExternalLinkIcon } from "@chakra-ui/icons";

const SpecText = ({ children, ...otherProps }) => (
  <Text fontSize="sm" {...otherProps}>
    {children}
  </Text>
);

const ColorItem = ({ color }) => (
  <Box bg={color} borderRadius="50%" width="15px" height="15px" />
);

const PhoneItem = ({
  name, // required
  externalUrl,
  price,
  image,
  memory = [],
  cpu,
  screen,
  camera = [],
  frontalCamera,
  slots = [],
  battery,
  width,
  height,
  weight,
  colors = [],
  isHot = false,
  ...otherProps
}) => {
  const [show, setShow] = useState(false);

  return (
    <Box
      py="10"
      _hover={{ bg: "#f9f9f9" }}
      boxShadow={[null, "lg"]}
      borderWidth={[null, "1px"]}
      borderRadius={[null, "lg"]}
      {...otherProps}
    >
      <Flex>
        <Flex width="130px" flexDir="column">
          <Image src={image} boxSize="130px" objectFit="cover" alt={name} />
          {colors.length === 0 ? null : (
            <Wrap px="4" py="2" justify="center">
              {colors.map((color, index) => (
                <ColorItem color={color} key={`color-${index}`} />
              ))}
            </Wrap>
          )}
        </Flex>
        <Stack flex="1">
          {externalUrl ? (
            <Link href={externalUrl} isExternal>
              <Flex alignItems="center">
                <Heading size="sm">{name}</Heading>
                {isHot ? <Image src="hot.gif" ml="1" width="30px" /> : null}
                <ExternalLinkIcon ml="2" />
              </Flex>
            </Link>
          ) : (
            <>
              <Heading size="sm">{name}</Heading>
              {isHot ? <Image src="hot.gif" ml="1" width="30px" /> : null}
            </>
          )}
          {price ? (
            <SpecText fontWeight="bold">{price} TL den basliyor</SpecText>
          ) : null}
          {memory.length === 0 ? null : (
            <SpecText>{memory.join(" | ")}</SpecText>
          )}
          {cpu ? <SpecText>{cpu}</SpecText> : null}
          {screen ? <SpecText>{screen}</SpecText> : null}
          <Collapse isOpen={show}>
            <Stack>
              {camera.length === 0 ? null : (
                <SpecText>Kamera: {camera.join(", ")}</SpecText>
              )}
              {frontalCamera ? (
                <SpecText>Ön Kamera: {frontalCamera}</SpecText>
              ) : null}
              {slots.length === 0 ? null : (
                <SpecText>Slots: {slots.join(", ")}</SpecText>
              )}
              {battery ? <SpecText>Batarya: {battery}</SpecText> : null}
              {height && width ? (
                <SpecText>
                  Size: {height}mm x {width}mm
                </SpecText>
              ) : null}
              {weight ? <SpecText>Weight: {weight}g</SpecText> : null}
            </Stack>
          </Collapse>
          <Divider />
          <Button
            onClick={() => {
              setShow(!show);
            }}
            variant="link"
            colorScheme="black"
            fontSize="sm"
            rightIcon={show ? <ArrowUpIcon /> : <ArrowDownIcon />}
            padding="0"
            height="30px"
          >
            Incele
          </Button>
          <Divider />
        </Stack>
      </Flex>
      <Flex mt="4">
        <Button
          as="a"
          href={`https://api.whatsapp.com/send?phone=905525164080&text=${name} telefonu sipariş vermek istiyorum.`}
          target="_blank"
          rel="noopener noreferrer"
          width="80%"
          colorScheme="whatsapp"
          mx="auto"
        >
          Sipariş Ver
        </Button>
      </Flex>
    </Box>
  );
};

export default PhoneItem;

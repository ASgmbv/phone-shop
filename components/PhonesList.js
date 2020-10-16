import { Stack, StackDivider, Container } from "@chakra-ui/core";
import PhoneItem from "./PhoneItem";
import { RichText } from "prismic-reactjs";

const PhonesList = ({ phones }) => {
  return (
    <Container bg="white">
      <Stack
        // divider={<StackDivider style={{ marginBottom: 0, marginTop: 0 }} />}
        spacing="4"
      >
        {phones.map(({ data, id }) => {
          const temp = {
            name: RichText.asText(data.name),
            externalUrl: data.externallink.url,
            price: data.price,
            image: data.image.url,
            memory: data.memory.map((item) => RichText.asText(item.memoryitem)),
            cpu: RichText.asText(data.cpu),
            screen: RichText.asText(data.screen),
            camera: data.camera.map((item) => RichText.asText(item.cameraitem)),
            frontalCamera: RichText.asText(data.frontalcamera),
            slots: data.slots.map((item) => RichText.asText(item.slot)),
            battery: RichText.asText(data.battery),
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
  );
};

export default PhonesList;

import { extendTheme } from "@chakra-ui/core";

const customTheme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Inter, sans-serif",
      },
    }),
  },
});

export default customTheme;

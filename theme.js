import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme({
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "Inter, sans-serif",
        // backgroundColor: "#F2F2F2",
      },
      ".simage": {
        objectFit: "cover",
      },
      ".blog-content": {
        p: {
          fontSize: "md",
          lineHeight: "tall",
          mb: "4",
        },
        h1: {
          mt: "2rem",
          mb: ".25rem",
          lineHeight: 1.2,
          fontWeight: "bold",
          fontSize: "1.875rem",
          letterSpacing: "-.025em",
        },
        h2: {
          mt: "4rem",
          mb: "0.5rem",
          lineHeight: 1,
          fontWeight: "semibold",
          fontSize: "1.5rem",
          letterSpacing: "-.025em",
          "& + h3": {
            mt: "1.5rem",
          },
        },
        h3: {
          mt: "3rem",
          // mb: "0.5rem",
          lineHeight: 1.25,
          fontWeight: "semibold",
          fontSize: "1.25rem",
          letterSpacing: "-.025em",
        },
        h4: {
          mt: "3rem",
          lineHeight: 1.375,
          fontWeight: "semibold",
          fontSize: "1.125rem",
        },
        ol: {
          mt: "1.5rem",
          ml: "1.25rem",
          "blockquote &": { mt: 0 },
          "& > * + *": {
            mt: "0.25rem",
          },
          fontSize: "lg",
        },
        a: {
          textDecoration: "underline",
          color: "blue.400",
          transition: "color 0.15s",
          transitionTimingFunction: "ease-out",
          _hover: {
            color: "blue.600",
          },
        },
      },
    }),
  },
});

export default customTheme;

/* eslint-disable react/prop-types */
import {
  Container,
  List,
  ListItem,
  Heading,
  Box,
  Link as ChakraLink,
  Text,
} from "@chakra-ui/core";
import React from "react";
import Prismic from "prismic-javascript";
import { Client } from "../../prismic-configuration";
import { RichText } from "prismic-reactjs";
import Link from "next/link";
import { linkResolver, hrefResolver } from "../../prismic-configuration";
import Header from "../../components/Header";

const Blog = ({ posts = [] }) => {
  return (
    <>
      <Header />
      <Container mt="4.5rem">
        <Text fontSize="3xl" fontWeight="bold" pb="10" pt="6">
          Blog
        </Text>
        <List>
          {posts.map((post, index) => (
            <ListItem mb="10" key={"blog-post-" + index}>
              <BlogPost post={post} />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
};

const BlogPost = ({ post }) => {
  const title = RichText.asText(post.data.title);

  return (
    <Box>
      <Link as={linkResolver(post)} href={hrefResolver(post)} passHref>
        <ChakraLink>
          <Heading as="h2" fontSize="xl">
            {title}
          </Heading>
        </ChakraLink>
      </Link>
      <BlogFirstParagraph sliceZone={post.data.body} />
    </Box>
  );
};

const BlogFirstParagraph = ({ sliceZone, textLimit = 200 }) => {
  const firstTextSlice = sliceZone.find((slice) => slice.slice_type === "text");
  if (firstTextSlice) {
    const text = RichText.asText(firstTextSlice.primary.text);
    let limitedText = text.substring(0, textLimit);

    if (text.length > textLimit) {
      // Cut only up to the last word and attach '...' for readability
      limitedText = `${limitedText.substring(
        0,
        limitedText.lastIndexOf(" ")
      )}...`;
    }

    return <Text lineHeight="taller">{limitedText}</Text>;
  }

  return null;
};

export async function getStaticProps() {
  const posts = await Client().query(
    Prismic.Predicates.at("document.type", "blog_post"),
    {
      orderings: "[document.last_publication_date desc]",
    }
  );

  return {
    props: {
      posts: posts.results,
      // posts,
    },
    revalidate: 1,
  };
}

export default Blog;

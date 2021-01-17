/* eslint-disable react/prop-types */
import {
  Container,
  List,
  ListItem,
  Heading,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { RichText } from "prismic-reactjs";
import NextLink from "next/link";
import Header from "../../components/Header";
import { queryBlogPosts } from "../../utils/prismicQueries";
import { format } from "date-fns";

export async function getStaticProps() {
  const posts = await queryBlogPosts();

  return {
    props: {
      posts,
    },
    revalidate: 1,
  };
}

const Blog = ({ posts = [] }) => {
  return (
    <>
      <Header />
      <Box bg="white" height="100vh">
        <Container maxW="2xl" bg="white">
          <Heading size="lg" pb="10" pt="6">
            Blog
          </Heading>
          <List>
            {posts.map((post, index) => (
              <ListItem mb={[4, null, 8]} key={"blog-post-" + index}>
                <BlogPost post={post} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
    </>
  );
};

const BlogPost = ({ post }) => {
  const title = RichText.asText(post.title);

  return (
    <Box>
      <NextLink href={`/blog/${post.slug}`} passHref>
        <Link>
          <Heading mb="2" size="lg">
            {title}
          </Heading>
        </Link>
      </NextLink>
      <Text mb="2" color="gray.500">
        {format(new Date(post.lastPublicationDate), "dd/MM/yyyy")}
      </Text>
      <BlogFirstParagraph sliceZone={post.body} />
    </Box>
  );
};

const BlogFirstParagraph = ({ sliceZone, textLimit = 200 }) => {
  const firstTextSlice = sliceZone.find((slice) => slice.slice_type === "text");
  if (firstTextSlice) {
    const text = RichText.asText(firstTextSlice.primary.text);
    let limitedText = text.substring(0, textLimit);

    if (text.length > textLimit) {
      limitedText = `${limitedText.substring(
        0,
        limitedText.lastIndexOf(" ")
      )}...`;
    }

    return (
      <Text fontSize="lg" lineHeight="taller">
        {limitedText}
      </Text>
    );
  }

  return null;
};

export default Blog;

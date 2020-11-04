/* eslint-disable react/prop-types */
import React from "react";
import { RichText } from "prismic-reactjs";
import {
  Box,
  Container,
  Link as ChakraLink,
  Flex,
  Text,
  Heading,
} from "@chakra-ui/core";
import Link from "next/link";
import Image from "next/image";
import { Client } from "../../prismic-configuration";
import Prismic from "prismic-javascript";
import Header from "../../components/Header";

const Post = ({ post }) => {
  if (!post || !post.data) {
    return null;
  }

  let title = RichText.asText(post.data.title);

  return (
    <>
      <Header />
      <Container maxW="sm" my="4.5rem">
        <Link href="/blog">
          <ChakraLink>
            <Flex my="30px" alignItems="center">
              <Text verticalAlign="middle" mt="20px">
                Blog
              </Text>
            </Flex>
          </ChakraLink>
        </Link>
        <Heading as="h1" mb="6">
          {title}
        </Heading>
        <SliceZone sliceZone={post.data.body} />
      </Container>
    </>
  );
};

const SliceZone = ({ sliceZone }) => (
  <>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case "image_with_caption":
          return <ImageWithCaption slice={slice} key={index} />;
        case "text":
          return <TextSlice slice={slice} key={index} />;
        default:
          return null;
      }
    })}
  </>
);

const TextSlice = ({ slice }) => {
  return (
    <div className="blog-content">
      <RichText render={slice.primary.text} />
    </div>
  );
};

const ImageWithCaption = ({ slice }) => {
  let caption = slice.primary.image.alt || "Photo";
  let width = slice.primary.image.dimensions.width || 500;
  let height = slice.primary.image.dimensions.height || 500;
  let url = slice.primary.image.url;

  return (
    <Box my="30px" d="flex" flexDir="column" alignItems="center">
      <Image
        alt={caption}
        src={url}
        width={width}
        height={height}
        className="simage"
      />
      <Text textAlign="center" color="gray.500" fontStyle="italic">
        {caption}
      </Text>
    </Box>
  );
};

export async function getStaticProps({ params }) {
  const post = (await Client().getByUID("blog_post", params.uid)) || {};

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await Client().query(
    Prismic.Predicates.at("document.type", "blog_post"),
    {
      orderings: "[document.last_publication_date desc]",
    }
  );

  return {
    paths: res.results.map((doc) => ({ params: { uid: `/blog/${doc.uid}` } })),
    fallback: true,
  };
}

export default Post;

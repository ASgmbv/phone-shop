/* eslint-disable react/prop-types */
import React from "react";
import { RichText } from "prismic-reactjs";
import { Box, Container, Text, Image, Heading } from "@chakra-ui/react";
import Header from "../../components/Header";
import { queryBlogPosts, queryPostByUid } from "../../utils/prismicQueries";
import { format } from "date-fns";

export async function getStaticPaths() {
  const posts = await queryBlogPosts();

  const paths = posts.map((post) => ({
    params: { uid: `/blog/${post.slug}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const post = await queryPostByUid({ postUid: params.uid });

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}

const Post = ({ post = {} }) => {
  let title = RichText.asText(post.title || []);
  console.dir({ post }, { depth: null });

  return (
    <>
      <Header />
      <Box bg="white" py="10">
        <Container maxW="2xl">
          <Heading as="h1" pt="10" pb="4">
            {title}
          </Heading>
          <Text mb="2" color="gray.500">
            {post.lastPublicationDate.substring(0, 10)}
          </Text>
          <SliceZone sliceZone={post.body} />
        </Container>
      </Box>
    </>
  );
};

const SliceZone = ({ sliceZone = [] }) => {
  // console.dir({ sliceZone }, { depth: null });

  return (
    <>
      {sliceZone?.map((slice, index) => {
        switch (slice.slice_type) {
          case "image":
            return <ImageWithCaption slice={slice} key={index} />;
          case "text":
            return <TextSlice slice={slice} key={index} />;
          default:
            return null;
        }
      })}
    </>
  );
};

const TextSlice = ({ slice }) => {
  return (
    <div className="blog-content">
      <RichText render={slice.primary.text} />
    </div>
  );
};

const ImageWithCaption = ({ slice }) => {
  let url = slice?.primary?.image?.url || "";
  let alt = slice?.primary?.image?.alt || "";

  return (
    <Box my="30px" d="flex" flexDir="column" alignItems="center">
      <Image alt={alt} src={url} width="100%" objectFit="contain" />
      <Text textAlign="center" color="gray.500" fontStyle="italic">
        {alt}
      </Text>
    </Box>
  );
};

export default Post;

import { Client } from "../prismic-configuration";
import Prismic from "prismic-javascript";

export async function queryMainPage() {
  const mainPage = await Client().getSingle("main_page");
  // console.dir({ mainPage }, { depth: null });
  return {
    bannerTitle: mainPage.data.banner_title,
    bannerDescription: mainPage.data.banner_description,
    bannerImage: mainPage.data.banner_image.url,
    bannerLink: mainPage.data.banner_link,
  };
}

export async function queryPostByUid({ postUid }) {
  const post = (await Client().getByUID("blog_post", postUid)) || {};

  return {
    title: post?.data.title || [],
    body: post?.data.body || [],
    slug: post?.uid || "",
    lastPublicationDate: post?.last_publication_date || "",
  };
}

export async function queryBlogPosts() {
  let posts = await Client().query(
    Prismic.Predicates.at("document.type", "blog_post"),
    {
      orderings: "[document.last_publication_date desc]",
    }
  );

  posts = posts.results.map((post) => {
    return {
      title: post.data.title,
      body: post.data.body,
      slug: post.uid,
      lastPublicationDate: post.last_publication_date,
    };
  });

  return posts;
}

export async function queryPhoneByUid({ phoneUid }) {
  const phone = (await Client().getByUID("phone", phoneUid)) || {};
  const data = phone.data || {};

  return {
    name: data.name || "",
    description: data.description || "",
    image: data.image?.url || "",
    price: data.price || 0,
    slug: phone.uid || "",
  };
}

export async function queryPhones() {
  let response;
  let phones = [];

  do {
    response = await Client().query(
      Prismic.Predicates.at("document.type", "phone")
    );

    response.results.map((phone) => {
      const data = phone.data || {};

      phones.push({
        name: data.name || "",
        description: data.description || "",
        image: data.image?.url || "",
        price: data.price || 0,
        slug: phone.uid || "",
      });
    });
  } while (response.next_page);

  return phones;
}

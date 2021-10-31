import client, { previewClient } from "./sanity";

const postFields = `
_id,
publishedAt,
title,
slug,
excerpt,
description,
mainImage,
description,
event_when,
event_location,
event_Time,

body[]{
  ...,
  children[]{
    ...,
    // Join inline reference
    _type == "authorReference" => {
      // check /studio/documents/authors.js for more fields
      "name": @.author->name,
      "slug": @.author->slug
    }
  }
},
"authors": authors[].author->,
"categories": categories[]{
  "title": ^->title,
  "slug": ^->slug.current
}
`;

const getClient = (preview) => (preview ? previewClient : client);

export async function getPostBySlug(slug) {
  const data = await getClient(true).fetch(
    `*[_type == "post" && slug.current == $slug] | order(publishedAt desc){
      ${postFields},
      body
    }`,
    { slug }
  );
  return data[0];
}

export async function getLatestPost() {
  const data =
    await client.fetch(`*[_type == "post"][0...4]| order(publishedAt desc){
    ${postFields},
    body
  }`);

  return data;
}

export async function getAllPosts() {
  const data = await client.fetch(`*[_type == "post"]| order(publishedAt desc){
    ${postFields},
    body
  }`);
  return data;
}

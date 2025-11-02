import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

export function Head({ title, description, image, pathname }) {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);
  const meta = site.siteMetadata;
  const seo = {
    title: title ? `${title} | ${meta.title}` : meta.title,
    description: description || meta.description,
    image: new URL(image || meta.image, meta.siteUrl),
    url: new URL(pathname || "/", meta.siteUrl),
  };
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}

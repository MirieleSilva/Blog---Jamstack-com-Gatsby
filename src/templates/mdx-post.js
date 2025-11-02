import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { Head as SEO } from "../components/SEO";

export default function MdxPost({ data, children }) {
  const { mdx } = data;
  return (
    <Layout>
      <article className="card">
        <h1>{mdx.frontmatter.title}</h1>
        <p className="small">{mdx.frontmatter.date}</p>
        <div className="prose">{children}</div>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostById($id: String!) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`;

export { SEO as Head };

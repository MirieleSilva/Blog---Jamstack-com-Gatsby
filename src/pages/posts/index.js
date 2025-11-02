import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/Layout";
import { Head as SEO } from "../../components/SEO";
import { format } from "date-fns";

export default function PostsList({ data }) {
  const items = data.allMdx.nodes;
  return (
    <Layout>
      <h1>Posts</h1>
      <div className="grid">
        {items.map(n => (
          <article key={n.id} className="card">
            <h3><Link to={n.fields.slug}>{n.frontmatter.title}</Link></h3>
            <p className="small">{format(new Date(n.frontmatter.updated || n.frontmatter.date), "dd/MM/yyyy")}</p>
            <p>{n.excerpt}</p>
            <Link to={n.fields.slug}>Ler mais →</Link>
          </article>
        ))}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query posts_list {
    allMdx(
      filter: { fields: { section: { eq: "posts" } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
    ) {
      nodes {
        id
        excerpt(pruneLength: 120)
        fields { slug }
        frontmatter { title date updated }
      }
    }
  }
`;


export { SEO as Head };

const path = require("path");

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type MdxFrontmatter {
      title: String!
      date: Date @dateformat
      updated: Date @dateformat
      slug: String
      section: String
    }
  `);
};

exports.onCreateNode = async ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const fileNode = getNode(node.parent);
    const source = fileNode.sourceInstanceName;
    const baseSlug = node.frontmatter.slug || fileNode.name;
    const section = node.frontmatter.section || source;

    const slug = `/${section}/${baseSlug}/`;
    createNodeField({ node, name: "slug", value: slug });
    createNodeField({ node, name: "section", value: section });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx(sort: { frontmatter: { date: DESC } }) {
        nodes {
          id
          fields { slug section }
          internal { contentFilePath }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("Erro ao carregar MDX", result.errors);
  }

  const template = path.resolve("./src/templates/mdx-post.js");

  result.data.allMdx.nodes.forEach((node) => {
    createPage({
      path: node.fields.slug,
      component: `${template}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};

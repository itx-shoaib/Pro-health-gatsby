exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityPortfolioProject {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data.allSanityPortfolioProject?.nodes || [];

  projects.forEach((edge, index) => {
    const path = `/project/${edge.slug.current}`;

    createPage({
      path,
      component: require.resolve("./src/templates/project.js"),
      context: { slug: edge.slug.current },
    });
  });
};

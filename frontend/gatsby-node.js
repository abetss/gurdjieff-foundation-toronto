const crypto = require("crypto");
const path = require(`path`);

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
  resolve(
    graphql(request).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      return result;
    })
  )
});

const createMdxNode = (contentType, contentProperty, { node, actions, createNodeId }) => {
    if (node.internal.type === contentType) {
        const newContentType = `${contentType}${contentProperty}`;
        const newNode = {
            id: createNodeId(`${newContentType}-${node.id}`),
            parent: node.id,
            children: [],
            internal: {
                content: node[contentProperty] || " ",
                type: newContentType,
                mediaType: "text/markdown",
                contentDigest: crypto
                    .createHash("md5")
                    .update(node[contentProperty] || " ")
                    .digest("hex"),
            },
        };
        actions.createNode(newNode);
        actions.createParentChildLink({
            parent: node,
            child: newNode,
        });
    }
}

module.exports.onCreateNode = async (onCreateNodeProps) => {
    createMdxNode('StrapiHomePage', 'content', onCreateNodeProps);
    createMdxNode('StrapiArticle', 'Footer', onCreateNodeProps);
    createMdxNode('StrapiArticle', 'Content', onCreateNodeProps);
    createMdxNode('StrapiArticle', 'Summary', onCreateNodeProps);
};

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;

    const result = await graphql( `
      {
        allStrapiArticle {
          edges {
            node {
              strapiId
              Slug
            }
          }
        }
      }
      `);

    result.data.allStrapiArticle.edges.forEach(({ node }) => {
      console.log('node', JSON.stringify(node, null, 2));
      createPage({
        path: `/articles/${node.Slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.strapiId,
        },
      })
    })
    // Query for articles nodes to use in creating pages.
    // return getArticles;

  //   const { createPage } = actions
  //   const result = await graphql(
  //     `
  //       {
  //         articles: allStrapiArticle {
  //           nodes {
  //             strapiId
  //             Slug
  //           }
  //         }
  //       }
  //     `
  //   )

  // if (result.errors) {
  //   throw result.errors
  // }

  // // Create blog articles pages.
  // const articles = result.data.articles.nodes
  // articles.forEach((article, index) => {
  //   createPage({
  //     path: `/article/${article.Slug}`,
  //     component: require.resolve("./src/templates/article.js"),
  //     context: {
  //       id: article.node.strapiId,
  //     },
  //   })
  // })
  };
/** @jsx jsx */
import { jsx, Heading, Grid, Text, Divider, Link as ThLink, Card, Flex } from "theme-ui"
import { Link, graphql } from "gatsby"
import { MdEmail, MdPhone } from "react-icons/md"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Fragment } from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ArticlesPage = ({
  data: {
    allStrapiArticle: { nodes: articles },
  },
}) => (
  <Layout>
    <SEO title="Gurdjieff foundation Toronto - Articles" />
    <div sx={{ pt: [3, 4, 4], maxWidth: [`90vw`, "85vw", "80vw"], mx: "auto" }}>
      <Heading as="h1">Articles</Heading>
      <Grid gap={4} columns={1} sx={{ mt: [2, 2, 3] }}>
        {articles.map((article, i) => (
          <Grid
            // gap={2}
            columns={1}
            key={`contact-us-${article.id}`}
            sx={{
              display: "inline-grid",
              bg: "muted",
              my: [1, 2, 2],
              px: 3,
              py: 2,
              borderRadius: 4,
              boxShadow: "0 0 2px rgba(0, 0, 0, 0.125)",
            }}
          >
            <Grid >
              <Text as="span" sx={{ fontWeight: "bold", fontSize: 4 }}>
                {article.Title}
              </Text>
              <Text as="span">by {article.Author}</Text>
            </Grid>
            <MDXProvider>
              <MDXRenderer>{article.childStrapiArticleSummary.childMdx.body}</MDXRenderer>
            </MDXProvider>
          </Grid>
        ))}
      </Grid>
    </div>
  </Layout>
)

export default ArticlesPage

export const query = graphql`
  query ArticlesQuery {
    allStrapiArticle {
      nodes {
        id
        Title
        Author
        childStrapiArticleSummary {
          childMdx {
            body
          }
        }
      }
    }
  }
`

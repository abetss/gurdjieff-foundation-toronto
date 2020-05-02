/** @jsx jsx */
import { jsx, Heading, Grid, Text } from "theme-ui"

import { Link, graphql, navigate } from "gatsby"
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
}) => {
  const navigateToArticle = slug => {
    navigate(`/articles/${slug}`)
  }
  console.log('articles', JSON.stringify(articles, null, 2));
  return (
    <Layout>
      <SEO title="Gurdjieff foundation Toronto - Articles" />
      <div sx={{ pt: [3, 4, 4], maxWidth: [`90vw`, "85vw", "80vw"], mx: "auto" }}>
        <Heading as="h1">Articles</Heading>
        <Grid gap={2} columns={1} sx={{ mt: [1, 1, 2] }}>
          {articles.map((article, i) => (
            <Grid
              // gap={2}
              onClick={() => navigateToArticle(article.Slug)}
              columns={1}
              key={`contact-us-${article.id}`}
              sx={{
                display: "inline-grid",
                bg: "muted",
                my: [1, 2, 2],
                px: 3,
                pt: 3,
                pb: 1,
                borderRadius: 2,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.125)",
                cursor: 'pointer',
                '&:hover': {
                  bg: 'muted-darker',
                  transition: 'background-color 100ms linear'
                }
              }}
            >
              <Grid>
                <Heading as="h2" sx={{ color: 'primary' }}>{article.Title}</Heading>
                <Heading as="h3">by {article.Author}</Heading>
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
}

export default ArticlesPage

export const query = graphql`
  query ArticlesQuery {
    allStrapiArticle {
      nodes {
        Title
        Author
        childStrapiArticleSummary {
          childMdx {
            body
          }
        }
        Slug
      }
    }
  }
`

/** @jsx jsx */
import { jsx, Grid, Divider, Container } from "theme-ui"
import { graphql, navigate } from "gatsby"
import { Flex, Text } from "theme-ui"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1 } from "../components/typography/h1"

const IndexPage = ({
  data: {
    strapiHomePage: { quote, childStrapiHomePagecontent, contentImage, childStrapiHomePageLinks },
    allStrapiArticle: { nodes: articles },
  },
}) => {
  const navigateToArticle = slug => {
    navigate(`/articles/${slug}`)
  }

  return (
    <Layout>
      <SEO title="Gurdjieff foundation Toronto" />
      <div sx={{ width: "100%", bg: "muted", color: "primary" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: ["start", "center", "center"],
            py: [4, 4, 5],
          }}
        >
          <Text
            sx={{
              fontSize: [5, 5, 6],
              fontFamily: "quote",
            }}
            as="blockquote"
          >
            " {quote} "
          </Text>
        </Container>
      </div>

      <Container>
        <div sx={{ display: "inline-block" }}>
          <Img
            sx={{ float: "left ", mr: [4, 4, 5], mb: [3, 3, 4], width: 350 }}
            fluid={contentImage.childImageSharp.fluid}
          />
          <div>
            <MDXProvider>
              <MDXRenderer>{childStrapiHomePagecontent.childMdx.body}</MDXRenderer>
            </MDXProvider>
          </div>
        </div>
      </Container>
      <Container>
        <Divider sx={{ mb: [4, 4, 5] }} />
        <H1>Latest Articles</H1>
        <Grid gap={[2, 1, 1]} columns={1} sx={{ mt: [3, 3, 4] }}>
          {articles.map((article, i) => (
            <Flex
              sx={{ flexDirection: ["column", "row", "row"] }}
              key={`contact-us-${article.id}`}
              onClick={() => navigateToArticle(article.Slug)}
            >
              <Text as="span" sx={{ color: "primary", cursor: "pointer" }}>
                {article.Title}
              </Text>
              <Text as="span" sx={{ ml: [0, 2] }}>
                by {article.Author}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Container>
      <div sx={{ mt: [4, 4, 5], bg: "secondary", "& a": { color: "primary-darker" } }}>
        <Container sx={{ py: [3, 3, 3] }}>
          <MDXProvider>
            <MDXRenderer>{childStrapiHomePageLinks.childMdx.body}</MDXRenderer>
          </MDXProvider>
        </Container>
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomePageQuery {
    strapiHomePage {
      quote
      childStrapiHomePagecontent {
        childMdx {
          body
        }
      }
      childStrapiHomePageLinks {
        childMdx {
          body
        }
      }
      contentImage {
        id
        relativePath
        publicURL
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 350, background: "white") {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    allStrapiArticle {
      nodes {
        id
        Title
        Author
        Slug
      }
    }
  }
`

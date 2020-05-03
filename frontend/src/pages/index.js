/** @jsx jsx */
import { jsx, Grid, Heading, Divider } from "theme-ui"
import { graphql, navigate } from "gatsby"
import { Flex, Text } from "theme-ui"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
      <div sx={{ mt: -2, width: "100%", bg: "muted", color: "primary" }}>
        <Flex
          sx={{
            variant: "container.margin",
            justifyContent: "center",
            alignItems: ["start", "center", "center"],
            py: [3, 4, 5],
          }}
        >
          <Text
            sx={{
              fontSize: 6,
              fontFamily: "quote",
            }}
            as="blockquote"
          >
            " {quote} "
          </Text>
        </Flex>
      </div>

      <div sx={{ variant: "container.margin", mt: 5 }}>
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
      <div sx={{ variant: "container.margin" }}>
        <Divider sx={{ mt: 7, mb: 5, color: "muted" }} />
        <Heading as="h1">Latest Articles</Heading>
        <Grid gap={1} columns={1} sx={{ mt: [3, 3, 4] }}>
          {articles.map((article, i) => (
            <Flex key={`contact-us-${article.id}`} onClick={() => navigateToArticle(article.Slug)}>
              <Text as="span" sx={{ color: "primary", cursor: "pointer" }}>
                {article.Title}
              </Text>
              <Text as="span" sx={{ ml: 2 }}>
                by {article.Author}
              </Text>
            </Flex>
          ))}
        </Grid>
      </div>

      {/* <div sx={{ mt: 7, bg: 'secondary', '& p, & h1, & h2, & h3': {color: 'background'}, '& a': { color: 'primary-darker'} }}> */}
      <div sx={{ mt: 6, bg: "secondary", "& a": { color: "primary-darker" } }}>
        <div sx={{ variant: "container.margin", py: 3 }}>
          <MDXProvider>
            <MDXRenderer>{childStrapiHomePageLinks.childMdx.body}</MDXRenderer>
          </MDXProvider>
        </div>
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
        Title
        Author
        Slug
      }
    }
  }
`

/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Flex, Text } from "theme-ui"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    strapiHomePage: { quote, childStrapiHomePageContent, contentImage }
  }
}) => (
  <Layout>
    <SEO title="Gurdjieff foundation Toronto" />
    <div sx={{ mt: -2, width: "100%", bg: "muted", color: "primary" }}>
      <Flex
        sx={{
          variant: "container.margin",
          justifyContent: "center",
          alignItems: ["start", "center", "center"],
          py: [3, 4, 5]
        }}
      >
        <Text
          sx={{
            fontSize: 6,
            fontFamily: "quote"
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
      <MDXProvider>
        <MDXRenderer>{childStrapiHomePageContent.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    strapiHomePage {
      quote
      childStrapiHomePageContent {
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
  }
`

/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { Flex, Text } from "theme-ui"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    strapiHomePage: { quote, content, contentImage },
  },
}) => (
  <Layout>
    <SEO title="Gurdjieff foundation Toronto" />
    <Flex
      sx={{
        mt: -2,
        height: 3,
        justifyContent: "center",
        alignItems: "center",
        bg: "muted",
        color: "primary",
      }}
    >
      <Text sx={{ fontSize: 6 }} fontSize={6} as="blockquote">
        {quote}
      </Text>
    </Flex>

    <div sx={{ variant: "padding.content", mt: 4 }}>
      <ReactMarkdown
        transformImageUri={uri => (uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`)}
        escapeHtml={false}
        source={content}
      />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    strapiHomePage {
      quote
      content
      contentImage {
        id
        relativePath
        publicURL
      }
    }
  }
`

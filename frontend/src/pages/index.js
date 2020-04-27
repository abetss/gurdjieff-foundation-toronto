import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from "react-markdown"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    strapiHomePage: { Title, body },
  },
}) => (
  <Layout>
    {/* <SEO title={Title} /> */}
    <h1>{Title}</h1>
    <ReactMarkdown
      transformImageUri={uri => (uri.startsWith("http") ? uri : `${process.env.IMAGE_BASE_URL}${uri}`)}
      escapeHtml={false}
      source={body}
    />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query MyQuery {
    strapiHomePage {
      Title
      body
    }
  }
`

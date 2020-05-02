/** @jsx jsx */
import { jsx, Heading, Divider } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
const ReactMarkdown = require('react-markdown')

const ArticleTemplate = ({ data: { article } }) => (
  <Layout>
    <SEO title={article.Title} />
    <div sx={{ pt: [3, 4, 4], maxWidth: [`90vw`, "85vw", "80vw"], mx: "auto" }}>
      <Heading as="h1">{article.Title}</Heading>
      <Heading sx={{ mb: 5, mt:2 }} as="h2">
        By {article.Author}
      </Heading>
      <MDXProvider>
        <MDXRenderer>{article.childStrapiArticleContent.childMdx.body}</MDXRenderer>
      </MDXProvider>
      <Divider sx={{ my: 4, color: 'muted'}}/>
      <div>
        <MDXProvider>
          <MDXRenderer>{article.childStrapiArticleFooter.childMdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </div>
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: Int!) {
    article: strapiArticle(strapiId: { eq: $id }) {
      Title
      Author
      childStrapiArticleContent {
        childMdx {
          body
        }
      }
      childStrapiArticleFooter {
        childMdx {
          body
        }
      }
    }
    strapiArticle(strapiId: { eq: $id }) {
      Title
    }
  }
`

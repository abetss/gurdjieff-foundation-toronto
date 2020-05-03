/** @jsx jsx */
import { jsx, Heading, Divider, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1, H2 } from "../components"
const ReactMarkdown = require('react-markdown')

const ArticleTemplate = ({ data: { article } }) => (
  <Layout>
    <SEO title={article.Title} />
    <Container>
      <H1>{article.Title}</H1>
      <H2 sx={{ mt:[3,4,4] }}>
        By {article.Author}
      </H2>
      <Divider sx={{ mb: [3,4,4], mt:[3,4,4], borderStyle: 'solid', borderWidth: 3, color: 'primary', bg: 'primary' }}/>
      <MDXProvider>
        <MDXRenderer>{article.childStrapiArticleContent.childMdx.body}</MDXRenderer>
      </MDXProvider>
      <Divider sx={{ my: 4, color: 'muted'}}/>
      <div sx={{ '& p, & h1, & h2, & h3': { color: 'gray' }}}>
        <MDXProvider>
          <MDXRenderer>{article.childStrapiArticleFooter.childMdx.body}</MDXRenderer>
        </MDXProvider>
      </div>
    </Container>
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

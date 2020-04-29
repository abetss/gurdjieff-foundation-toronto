/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          subTitle
        }
      }
    }
  `)

  return (
    <Fragment>
      <div sx={{ display: "flex", flexDirection: "column" }}>
        <div>
          <Header title={data.site.siteMetadata.title} subTitle={data.site.siteMetadata.subTitle} />
          <main>{children}</main>
        </div>
        <footer sx={{ mt: 5, variant: "padding.content", display: "flex", justifyContent: "center", color: "grey" }}>
          <span>© {new Date().getFullYear()}, Gurdjieff Traditional Studies</span>
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/** @jsx jsx */
import { jsx, Flex, NavLink, Heading } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ title, subTitle }) => (
  <header
    sx={{
      bg: `primary`,
      mb: 2,
    }}
  >
    <div sx={{ py: 2, variant: "container.margin" }}>
      <Link
        to="/"
        sx={{
          color: `background`,
          textDecoration: `none`,
          display: "flex",
          alignItems: ["flex-start", "center", "center"],
          flexDirection: ["column", "row", "row"],
          flexWrap: 'wrap',
          letterSpacing: "0.1em",
        }}
      >
        <Heading as="h1" sx={{ margin: 0, fontSize: 5, whiteSpace: "nowrap", fontFamily: 'logo' }}>
          {title}
        </Heading>
        <Heading
          as="h1"
          sx={{
            margin: 0,
            fontSize: 4,
            fontFamily: 'logo',
            whiteSpace: "nowrap",
            ml: [0, 1, 1],
            "::before": { content: ['""', '" - "', '" - "'] },
          }}
        >
          {subTitle}
        </Heading>
      </Link>
      <Flex
        as="nav"
        sx={{ mt: [2, 0, 0], justifyContent: "space-between", flexDirection: "row", flexWrap: 'wrap' }}
      >
        <Flex sx={{ flexDirection: ["column", "row", "row"] }}>
          <Link sx={{ variant: "links.nav" }} to="/">
            Home
          </Link>
          <Link sx={{ variant: "links.nav" }} to="/about/">
            Gurdjieff
          </Link>
          <Link sx={{ variant: "links.nav" }} to="/articles">
            Articles
          </Link>
          <Link sx={{ variant: "links.nav" }} to="/contact-us">
            Contact us
          </Link>
        </Flex>
        <Flex>
          <NavLink target="_blank" sx={{ fontStyle: "italic" }} href="https://traditionalstudiespress.com/">
            Traditional Studies Press
          </NavLink>
        </Flex>
      </Flex>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

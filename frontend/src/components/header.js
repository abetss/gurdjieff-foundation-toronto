/** @jsx jsx */
import { jsx, Flex, NavLink } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const Header = ({ title, subTitle }) => (
  <header
    sx={{
      bg: `primary`,
      mb: 2,
    }}
  >
    <div sx={{ py: 2, variant: "padding.content" }}>
      <Link
        to="/"
        sx={{
          color: `background`,
          textDecoration: `none`,
          display: "flex",
          alignItems: ["flex-start", "center", "center"],
          flexDirection: ["column", "row", "row"],
          letterSpacing: "0.1em",
        }}
      >
        <h1 sx={{ margin: 0, fontSize: 5, whiteSpace: "nowrap" }}>{title}</h1>
        <h1
          sx={{
            margin: 0,
            fontSize: 4,
            whiteSpace: "nowrap",
            ml: [0, 1, 1],
            "::before": { content: ['""', '" - "', '" - "'] },
          }}
        >
          {subTitle}
        </h1>
      </Link>
      <Flex as="nav">
        <NavLink href="#!">Home</NavLink>
        <NavLink href="#!">About</NavLink>
        <NavLink href="#!">Articles</NavLink>
        <NavLink href="#!">Contact us</NavLink>
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

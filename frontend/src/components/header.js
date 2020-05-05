/** @jsx jsx */
import { jsx, Flex, NavLink, Heading, Container } from "theme-ui"
import { useCallback } from "react"
import { Link, useStaticQuery, graphql, navigate } from "gatsby"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import { usePopupState, bindTrigger, bindMenu } from "material-ui-popup-state/hooks"

const Header = ({ title, subTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      allStrapiAboutGurdjieff {
        nodes {
          Title
          Slug
        }
      }
    }
  `)

  const gurdjieffMenus = data.allStrapiAboutGurdjieff.nodes
  const navigateTo = useCallback(
    (base, slug) => {
      navigate(`/${base}/${slug}`)
    },
    []
  )

  const popupState = usePopupState({ variant: "popover", popupId: "GurdjieffMenu" })
  return (
    <header
      sx={{
        bg: `primary`,
      }}
    >
      <Container sx={{ pt: [2, 3, 3], pb: [2, 2, 2] }}>
        <Link
          to="/"
          sx={{
            color: `background`,
            textDecoration: `none`,
            display: "flex",
            alignItems: ["flex-start", "flex-end", "flex-end"],
            flexDirection: ["column", "row", "row"],
            flexWrap: "wrap",
            letterSpacing: "0.1em",
          }}
        >
          <Heading as="h1" sx={{ margin: 0, fontSize: 5, fontFamily: "logo" }}>
            {title}
          </Heading>
          <Heading
            as="h1"
            sx={{
              margin: 0,
              fontSize: 4,
              fontFamily: "logo",
              mt: [1, 0, 0],
              ml: [0, 1, 1],
              "::before": { content: ['""', '" - "', '" - "'] },
            }}
          >
            {subTitle}
          </Heading>
        </Link>
        <Flex as="nav" sx={{ mt: [2, 2, 2], justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }}>
          <Flex sx={{ flexDirection: ["column", "row", "row"] }}>
            <Link sx={{ variant: "links.nav" }} to="/">
              Home
            </Link>
            <span sx={{ variant: "links.nav", cursor: 'pointer' }} {...bindTrigger(popupState)}>
              <Flex>
                Gurdjieff
                <svg
                  sx={{
                    fill: "currentColor",
                    width: "1em",
                    height: "1em",
                    display: "inline-block",
                    fontSize: "1.5rem",
                    transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                    flexShrink: "0",
                    userSelect: "none",
                  }}
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                </svg>
              </Flex>
            </span>
            <div>
              <Menu {...bindMenu(popupState)} elevation={1}>
                {gurdjieffMenus.map(menu => (
                  <MenuItem key={`gurdjieff-menu-${menu.Slug}`} onClick={(e) => {
                    navigateTo("gurdjieff", menu.Slug)
                  }}>{menu.Title}</MenuItem>
                ))}
              </Menu>
            </div>

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
      </Container>
    </header>
  )
}

export default Header

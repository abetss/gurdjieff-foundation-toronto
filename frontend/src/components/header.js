/** @jsx jsx */
import { jsx, Flex, NavLink, Heading, Container, useColorMode } from "theme-ui"
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { DropDownNav } from "./drop-down-nav"

const ThemeDropDown = ({ colorModeNames, selectedColorMode, handleChange }) => {
  return (
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={selectedColorMode}
      onChange={handleChange}
    >
      {colorModeNames.map(({ name, value }) => (
        <MenuItem key={`theme-color-mode-${value}`} value={value}>
          {name}
        </MenuItem>
      ))}
    </Select>
  )
}

const Header = ({ title, subTitle }) => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      gurdjieffPages: allStrapiAboutGurdjieff(filter: { Navigation_Menu: { eq: "About_Gurdjieff" } }) {
        nodes {
          Title
          Slug
        }
      }
      aboutUsPages: allStrapiAboutGurdjieff(filter: { Navigation_Menu: { eq: "About_Us" } }) {
        nodes {
          Title
          Slug
        }
      }
    }
  `)

  const [colorMode, setColorMode] = useColorMode()
  const colorModes = [
    { name: "Light Modern", value: "default" },
    { name: "Dark Modern", value: "dark" },
    { name: "Light Paper", value: "light-paper" },
  ]

  const gurdjieffMenus = data.gurdjieffPages.nodes
  const aboutUsMenus = data.aboutUsPages.nodes

  return (
    <header
      sx={{
        bg: `header.primary`,
      }}
    >
      <Container sx={{ pt: [2, 3, 3], pb: [2, 2, 2] }}>
        <Flex sx={{ justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }}>
          <Link
            to="/"
            sx={{
              color: `header.background`,
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
          <ThemeDropDown
            colorModeNames={colorModes}
            selectedColorMode={colorMode}
            handleChange={e => {
              setColorMode(e.target.value)
            }}
          />
        </Flex>

        <Flex as="nav" sx={{ mt: [2, 2, 2], justifyContent: "space-between", flexDirection: "row", flexWrap: "wrap" }}>
          <Flex sx={{ flexDirection: ["column", "row", "row"] }}>
            <Link sx={{ variant: "links.nav" }} to="/">
              Home
            </Link>
            {aboutUsMenus.length > 0 && (
              <DropDownNav title="About Us" baseUrl="about-us" menuId="about-menu" subMenus={aboutUsMenus} />
            )}
            {gurdjieffMenus.length > 0 && (
              <DropDownNav title="Gurdjieff" baseUrl="gurdjieff" menuId="gurdjieff-menu" subMenus={gurdjieffMenus} />
            )}

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

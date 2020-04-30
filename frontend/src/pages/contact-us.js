/** @jsx jsx */
import { jsx, Heading, Grid, Text, Divider, Link as ThLink, Card, Flex } from "theme-ui"
import { Link } from "gatsby"
import { MdEmail, MdPhone } from "react-icons/md"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Fragment } from "react"

const ContactUsPage = ({
  data: {
    strapiContactUs: { title, contacts },
  },
}) => (
  <Layout>
    <SEO title={title} />
    <div sx={{ pt: [3, 4, 4], maxWidth: [`90vw`, "85vw", "80vw"], mx: "auto" }}>
      <Heading as="h1">{title}</Heading>
      <Grid gap={4} columns={[1, 2, 2]} sx={{ mt: [2, 2, 3] }}>
        {contacts.map((contact, i) => (
          <Fragment>
            {/* {i > 0 && <Divider sx={{ color: "muted" }} />} */}
            <Grid
              // gap={2}
              columns={1}
              key={`contact-us-${contact.id}`}
              sx={{
                display: "inline-grid",
                bg: "muted",
                my: [3, 4, 4],
                px: 3,
                py: 2,
                borderRadius: 4,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.125)",
              }}
            >
              <Text>{contact.DisplayName}</Text>
              <Flex sx={{ alignItems: 'center' }}>
                <MdEmail sx={{ color: 'primary' }} />
                <ThLink sx={{ textDecoration: "none", pl:2 }} target="_blank" href={`mailto:${contact.Email}`}>
                  {contact.Email}
                </ThLink>
              </Flex>
              <Flex sx={{ alignItems: 'center' }}>
                <MdPhone sx={{ color: 'primary' }}/>
                <ThLink sx={{ textDecoration: "none", pl:2 }} target="_blank" href={`tel:${contact.PhoneNumber}`}>
                  {contact.PhoneNumber}
                </ThLink>
              </Flex>
            </Grid>
          </Fragment>
        ))}
      </Grid>
    </div>
  </Layout>
)

export default ContactUsPage

export const query = graphql`
  query ContactUsQuery {
    strapiContactUs {
      contacts {
        DisplayName
        Email
        PhoneNumber
        id
      }
      title
    }
  }
`

/** @jsx jsx */
import { jsx, Grid, Text, Link as ThLink, Flex, Container } from "theme-ui"
import { graphql } from "gatsby"
import { MdEmail, MdPhone } from "react-icons/md"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1 } from "../components"
import { useSelectTexture } from "../utils/hooks/useSelectTexture"

const ContactUsPage = ({
  data: {
    strapiContactUs: { title, contacts },
  },
}) => {
  const [textureType] = useSelectTexture()
  return (
    <Layout>
      <SEO title={`Gurdjieff foundation Toronto - ${title}`} />
      <Container>
        <H1>{title}</H1>
        <Grid gap={[3, 3, 4]} columns={[1, 1, 2]} pt={[3, 4, 4]}>
          {contacts.map(contact => (
            <Grid
              // gap={2}
              key={`contact-us-${contact.id}`}
              columns={1}
              sx={{
                display: "inline-grid",
                bg: "muted",
                px: 3,
                py: 2,
                borderRadius: 4,
                boxShadow: "0 0 2px rgba(0, 0, 0, 0.125)",
                variant: `texture.${textureType}`,
              }}
            >
              <Text>{contact.DisplayName}</Text>
              <Flex sx={{ alignItems: "center" }}>
                <MdEmail sx={{ color: "primary" }} />
                <ThLink sx={{ textDecoration: "none", pl: 2 }} target="_blank" href={`mailto:${contact.Email}`}>
                  {contact.Email}
                </ThLink>
              </Flex>
              <Flex sx={{ alignItems: "center" }}>
                <MdPhone sx={{ color: "primary" }} />
                <ThLink sx={{ textDecoration: "none", pl: 2 }} target="_blank" href={`tel:${contact.PhoneNumber}`}>
                  {contact.PhoneNumber}
                </ThLink>
              </Flex>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Layout>
  )
}

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

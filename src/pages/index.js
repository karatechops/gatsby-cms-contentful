import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Heading, Text } from 'grommet';
import { CloudUpload, Services, ServerCluster } from "grommet-icons"

import Content from "../components/content"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import { rhythm } from "../utils/typography"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const { title, intro, heroBg, videos } = data.markdownRemark.frontmatter;
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} />
        <Hero
          bg={heroBg}
          title={title}
          desc={intro}
        />
        <Content direction="row-responsive" pad={{ vertical: 'xlarge' }}>
          <Box align="center" basis="1/3" gap="medium" pad={{ right: 'small' }}>
            <CloudUpload size="large" color="dark-1" />
            <Heading margin="none" textAlign="center">column 1</Heading>
            <Text textAlign="center">
              Activated charcoal chambray, hoodie mlkshk glossier church-key green juice air plant letterpress shaman banjo keytar kinfolk. 
            </Text>
          </Box>
          <Box align="center" basis="1/3" gap="medium" pad={{ horizontal: 'small' }}>
            <ServerCluster size="large" color="dark-1" />
            <Heading margin="none" textAlign="center">column 2</Heading>
            <Text textAlign="center">
              Flannel austin ethical, fanny pack ugh photo booth marfa dreamcatcher direct trade lyft. 
            </Text>
          </Box>
          <Box align="center" basis="1/3" gap="medium" pad={{ left: 'small' }}>
            <Services size="large" color="dark-1" />
            <Heading margin="none" textAlign="center">column 3</Heading>
            <Text textAlign="center">
              Biodiesel hashtag palo santo unicorn synth vinyl af raw denim kitsch ugh shoreditch quinoa la croix bespoke. 
            </Text>
          </Box>
        </Content>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: "/" } }) {
      excerpt
      fields {
        slug
      }
      frontmatter {
        title
        intro
        heroBg
        videos {
          photo
          title
          url
        }
      }
    }
  }
`

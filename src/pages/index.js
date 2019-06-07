import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class Home extends React.Component {
  render() {
    const { data } = this.props
    const { title, intro, heroBg, videos } = data.markdownRemark.frontmatter;
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={title} />
        {title}
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

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import { Box, Heading, Paragraph, Button } from 'grommet';

import { Content, Layout, SEO } from '../../components';

class Blog extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <SEO title="Blog" />
        <Box background="brand">
          <Content margin={{ vertical: 'large' }}>
            <Heading size="xlarge" margin="none" style={{ lineHeight: 1 }}>
              Blog
            </Heading>
          </Content>
        </Box>
        <Content pad={{ top: 'large' }} align="center" gap="large">
          {posts.map(
            ({ node }) =>
              node.fields.slug !== '/' && (
                <Box key={node.id} gap="medium" width="100%" align="start">
                  <Heading margin="none">{node.frontmatter.title}</Heading>
                  <Box width="50%">
                    <Paragraph margin="none">{node.excerpt}</Paragraph>
                  </Box>
                  <Link to={`/blog${node.fields.slug}`}>
                    <Button label="Read more" />
                  </Link>
                </Box>
              ),
          )}
        </Content>
      </Layout>
    );
  }
}

Blog.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }).isRequired,
            excerpt: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Blog;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          rawMarkdownBody
          fields {
            slug
          }
          excerpt
          frontmatter {
            title
            date
            description
          }
        }
      }
    }
  }
`;

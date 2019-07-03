import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Heading, Paragraph } from 'grommet';

import Layout from '../components/layout';
import SEO from '../components/seo';

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    return (
      <Layout title={siteTitle}>
        <SEO title="404: Not Found" />
        <Heading>Not Found</Heading>
        <Paragraph>
          You just hit a route that doesn&#39;t exist... the sadness.
        </Paragraph>
      </Layout>
    );
  }
}

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

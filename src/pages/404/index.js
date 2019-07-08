import React from 'react';
import { Box, Heading, Paragraph } from 'grommet';
import { Layout, SEO } from '../../components';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

class NotFoundPage extends React.Component {
  render() {
    const siteMetadata = useSiteMetadata();
    return (
      <Layout title={siteMetadata.siteTitle}>
        <Box flex align="center" justify="center">
          <SEO title="404: Not Found" />
          <Heading>Not Found</Heading>
          <Paragraph>
            You just hit a route that doesn&#39;t exist... the sadness.
          </Paragraph>
        </Box>
      </Layout>
    );
  }
}

export default NotFoundPage;

import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Box, Text } from 'grommet';

function Header() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <Box
      direction="row"
      background="dark-1"
      gap="small"
      pad={{ vertical: 'small', horizontal: 'medium' }}
      justify="between"
    >
      <Link to="/">
        <Text weight="bold" color="accent-1">
          {(site.siteMetadata && site.siteMetadata.title) || 'Home'}
        </Text>
      </Link>
      <Link to="/blog">
        <Text weight="bold" color="accent-1">
          Blog
        </Text>
      </Link>
    </Box>
  );
}
export default Header;

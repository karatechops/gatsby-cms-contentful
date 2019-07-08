import React from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'grommet';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

function Header() {
  const siteMetadata = useSiteMetadata();

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
          {(siteMetadata && siteMetadata.title) || 'Home'}
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

import React from 'react';
import { Link } from 'gatsby';
import { Box, Text } from 'grommet';

export const Header = () => (
  <Box
    direction="row"
    background="dark-1"
    gap="small"
    pad={{ vertical: 'small', horizontal: 'medium' }}
    justify="between"
  >
    <Link to="/">
      <Text weight="bold" color="accent-1">
        Home
      </Text>
    </Link>
    <Link to="/blog">
      <Text weight="bold" color="accent-1">
        Blog
      </Text>
    </Link>
  </Box>
);

export default Header;

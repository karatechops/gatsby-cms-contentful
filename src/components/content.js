import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

export const Content = ({ children, ...rest }) =>
  <Box width="xxlarge" alignSelf="center" {...rest}>
    {children}
  </Box>;

export default Content;

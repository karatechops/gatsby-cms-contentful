import React from 'react';
import PropTypes from 'prop-types';

import { Box, Heading, Text } from 'grommet';

export const Hero = ({ title, desc, bg }) =>
  <Box pad="large" height="large" background={`url(${bg})`}>
    <Box width="large">
      <Heading size="xlarge" color="white">{title}</Heading>
      <Text color="white">
        {desc}
      </Text>
    </Box>
  </Box>;

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  bg: PropTypes.string.isRequired,
};

export default Hero;

import React from 'react';
import PropTypes from 'prop-types';
import {
  grommet, Anchor, Grommet, Box,
} from 'grommet';

import Content from './content';

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
      <Grommet
        full
        theme={grommet}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          minHeight: '100vh',
          height: 'auto',
        }}
      >
        <Box as="header" background="brand" pad={{ horizontal: 'large', vertical: 'small' }}>
          {title}
        </Box>
        <Box flex as="main">
          {children}
        </Box>
        <Box as="footer" background="light-2" pad={{ vertical: 'medium' }}>
          <Content direction="row" justify="center">
            © {new Date().getFullYear()}, Built with
            {' '}
            <Anchor href="https://grommet.io"><span role="img" aria-label="love">💜</span></Anchor>
          </Content>
        </Box>
      </Grommet>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;

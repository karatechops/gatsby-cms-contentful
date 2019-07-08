import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Grommet, Box, Text } from 'grommet';

import theme from './theme';
import './reset.css';
import { Content, Header } from '../index';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Grommet
        full
        theme={theme}
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '100%',
          minHeight: '100vh',
          height: 'auto',
        }}
      >
        <Header />
        <Box flex as="main">
          {children}
        </Box>
        <Box as="footer" background="dark-1" pad={{ vertical: 'medium' }}>
          <Content direction="row" justify="center">
            <Text>
              © {new Date().getFullYear()}, Built with{' '}
              <Anchor href="https://grommet.io">
                <span role="img" aria-label="love">
                  💜
                </span>
              </Anchor>
            </Text>
          </Content>
        </Box>
      </Grommet>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

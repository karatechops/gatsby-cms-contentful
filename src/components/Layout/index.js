import React from 'react';
import PropTypes from 'prop-types';
import { grommet, Anchor, Grommet, Box, Text } from 'grommet';
import { deepMerge } from 'grommet/utils';
import { css } from 'styled-components';

import './reset.css';
import Content from '../Content';

const theme = deepMerge(
  {
    heading: {
      extend: css`
        font-weight: 100;
      `,
    },
    paragraph: {
      extend: css`
        font-weight: 100;
        max-width: 100%;
      `,
    },
  },
  grommet,
);

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

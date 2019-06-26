import React from "react"
import { Link } from "gatsby"
import { Anchor, Grommet, Box } from "grommet"

import Content from './content';

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <Grommet full style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '100%',
        minHeight: '100vh',
        height: 'auto' 
      }}>
        <Box as="header" background="brand" pad={{ horizontal: 'large', vertical: 'small' }}>
          {title}
        </Box>
        <Box flex as="main">
          {children}
        </Box>
        <Box as="footer" background="light-2" pad={{ vertical: 'medium' }}>
          <Content direction="row" justify="center">
            © {new Date().getFullYear()}, Built with
            {` `}
            <Anchor href="https://grommet.io">💜</Anchor>
          </Content>
        </Box>
      </Grommet>
    )
  }
}

export default Layout

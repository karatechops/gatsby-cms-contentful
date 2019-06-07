import React from "react"
import { Link } from "gatsby"
import { Anchor, Grommet, Box } from "grommet"

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
        <Box as="header">
          {title}
        </Box>
        <Box flex as="main">
          {children}
        </Box>
        <Box as="footer" direction="row">
          © {new Date().getFullYear()}, Built with
          {` `}
          <Anchor href="https://grommet.io">💜</Anchor>
        </Box>
      </Grommet>
    )
  }
}

export default Layout
